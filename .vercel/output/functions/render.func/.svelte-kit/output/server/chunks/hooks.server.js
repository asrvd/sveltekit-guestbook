import { D as DEV, e as env } from "./index.js";
import { Auth } from "@auth/core";
import GitHub from "@auth/core/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { r as router, c as createContext } from "./context.js";
import { createTRPCHandle } from "trpc-sveltekit";
import { PrismaClient } from "@prisma/client";
const dev = DEV;
const GITHUB_ID = "8e58dfc33231f93cff99";
const GITHUB_SECRET = "9a019fe561158d82e303c746f7163113df18e96f";
const AUTH_SECRET = "c444ce24a52485b1d33ff144bc193e6c25c8d7e34345fd586aef94b6a07e3604";
async function getSession(req, config) {
  config.secret ??= AUTH_SECRET;
  config.trustHost ??= true;
  const url = new URL("/api/auth/session", req.url);
  const request = new Request(url, { headers: req.headers });
  const response = await Auth(request, config);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}
const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AuthHandle(prefix, authOptions) {
  return function({ event, resolve }) {
    const { url, request } = event;
    event.locals.getSession ??= () => getSession(request, authOptions);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/")) {
      return resolve(event);
    }
    return Auth(request, authOptions);
  };
}
function SvelteKitAuth(options) {
  const { prefix = "/auth", ...authOptions } = options;
  authOptions.secret ??= AUTH_SECRET;
  authOptions.trustHost ??= !!(env.AUTH_TRUST_HOST ?? env.VERCEL ?? dev);
  return AuthHandle(prefix, authOptions);
}
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          return i < length - 1 ? apply_handle(i + 1, event3, { transformPageChunk }) : resolve(event3, { transformPageChunk });
        }
      });
    }
  };
}
const prisma = new PrismaClient();
const authHandle = SvelteKitAuth({
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    }
  },
  providers: [
    GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    })
  ],
  adapter: PrismaAdapter(prisma)
});
const trpcHandle = createTRPCHandle({
  router,
  createContext
});
const handle = sequence(trpcHandle, authHandle);
export {
  authHandle,
  handle,
  trpcHandle
};

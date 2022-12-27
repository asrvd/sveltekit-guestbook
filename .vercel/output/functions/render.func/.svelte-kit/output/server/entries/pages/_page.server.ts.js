import { r as router, c as createContext } from "../../chunks/context.js";
const load = async (event) => {
  const messages = await router.createCaller(await createContext()).guestbook.getAllMessages();
  return {
    session: await event.locals.getSession(),
    messages
  };
};
export {
  load
};

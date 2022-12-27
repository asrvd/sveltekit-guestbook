import { z } from "zod";
import { initTRPC } from "@trpc/server";
import { PrismaClient } from "@prisma/client";
const t = initTRPC.context().create();
const guestbookRouter = t.router({
  getAllMessages: t.procedure.query(async ({ ctx }) => {
    try {
      const messages = await ctx.prisma.message.findMany({
        orderBy: {
          createdAt: "desc"
        }
      });
      return messages;
    } catch (error) {
      console.log(error);
    }
  }),
  addMessage: t.procedure.input(
    z.object({
      text: z.string().min(1),
      authorName: z.string().min(1),
      authorId: z.string().min(1)
    })
  ).mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.message.create({
        data: {
          authorName: input.authorName,
          text: input.text,
          authorId: input.authorId
        }
      });
    } catch (error) {
      console.log(error);
    }
  })
});
const router = t.router({
  guestbook: guestbookRouter
});
const prisma = global.prisma || new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"]
});
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
const createContext = async () => {
  return {
    prisma
  };
};
export {
  createContext as c,
  router as r
};

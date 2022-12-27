import { z } from 'zod';
// import { auth } from '$lib/trpc/middlewares/auth';
import { t } from '$lib/trpc/t';

export const guestbookRouter = t.router({
	getAllMessages: t.procedure.query(async ({ ctx }) => {
		try {
			const messages = await ctx.prisma.message.findMany({
				orderBy: {
					createdAt: 'desc'
				}
			});
			return messages;
		} catch (error) {
			console.log(error);
		}
	}),
	addMessage: t.procedure
		.input(
			z.object({
				text: z.string().min(1),
				authorName: z.string().min(1),
				authorId: z.string().min(1)
			})
		)
		.mutation(async ({ ctx, input }) => {
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

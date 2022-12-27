import { guestbookRouter } from '$lib/trpc/router/guestbook';
import { t } from '$lib/trpc/t';

export const router = t.router({
	guestbook: guestbookRouter
});

export type Router = typeof router;


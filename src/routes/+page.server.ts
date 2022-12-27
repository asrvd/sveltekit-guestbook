import type { PageServerLoad } from './$types';
import { router } from '$lib/trpc/router/index';
import { createContext } from '$lib/trpc/context';

export const load: PageServerLoad = async (event) => {
	const messages = await router.createCaller(await createContext()).guestbook.getAllMessages();
	return {
		session: await event.locals.getSession(),
		messages: messages
	};
};

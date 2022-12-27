/* eslint-disable */
// @ts-nocheck

import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import prisma from '$lib/db/prisma';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authHandle = SvelteKitAuth({
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
	session: {
		strategy: 'database',
		generateSessionToken: () => {
			return crypto.randomUUID();
		}
	},
	adapter: PrismaAdapter(prisma)
});

export const trpcHandle = createTRPCHandle({
	router,
	createContext
});

export const handle = sequence(trpcHandle, authHandle);

<script lang="ts">
	import { z } from 'zod';
	import { trpc } from '$lib/trpc/client';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import type { PageData } from './$types';
	import { invalidateAll } from '$app/navigation';
	import GithubIcon from '$lib/components/GithubIcon.svelte';
	import SendIcon from '$lib/components/SendIcon.svelte';
	import SignOutIcon from '$lib/components/SignOutIcon.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import SvelteIcon from '$lib/components/SvelteIcon.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data: PageData;

	const inputSchema = z.object({
		text: z
			.string()
			.min(1, { message: 'Message is empty!' })
			.max(100, { message: 'Message should not be more than 100 characters!' }),
		authorName: z.string().min(1, { message: 'User is not logged in!' }),
		authorId: z.string().min(1, { message: 'User is not logged in!' })
	});

	let message = '';
	let loading = false;

	const postMessage = async () => {
		loading = true;
		const input = inputSchema.safeParse({
			text: message.trim(),
			authorName: data.session?.user?.name,
			authorId: data.session?.user?.id
		});
		if (!input.success) {
			console.log(input.error.issues[0]?.message as string);
			toast.error(input.error.issues[0]?.message as string, {
				position: 'top-right'
			});
			loading = false;
			return;
		}

		try {
			await trpc().guestbook.addMessage.mutate(input.data);
			message = '';
			loading = false;
			await invalidateAll();
			toast.success('Message posted!', {
				position: 'top-right'
			});
			console.log('posted');
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong!', {
				position: 'top-right'
			});
			loading = false;
		}
	};
</script>

<main class="min-w-screen min-h-screen p-6 bg-zinc-900 flex flex-col justify-center items-center">
	<div class="lg:w-1/3 md:w-2/3">
		<h2 class="text-zinc-200 lg:text-[3.5rem] text-[2.5rem] font-extrabold">
			<SvelteIcon />
			GuestBook
		</h2>

		{#if data.session?.user}
			<div class="flex flex-col gap-4 dark:bg-zinc-800 bg-zinc-200 p-4 rounded-lg shadow-xl">
				<textarea
					class="w-full h-32 p-2 rounded-md dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-200 text-zinc-800 text-sm focus:border-none border-none ring-0"
					bind:value={message}
				/>
				<div class="flex gap-4 justify-evenly items-center w-auto">
					<button
						class="w-full px-6 py-2 rounded-md dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-200 text-zinc-800 hover:shadow-xl duration-200"
						on:click={postMessage}
					>
						<SendIcon />
						{loading ? 'Sending...' : 'Send It'}
					</button>
					<button
						class="w-full max-w-max px-6 py-2 rounded-md dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-200 text-zinc-800 hover:shadow-xl duration-200"
						on:click={() => signOut()}
					>
						<SignOutIcon />
						Sign Out
					</button>
				</div>
			</div>
		{:else}
			<div
				class="flex flex-col rounded-lg dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 p-4 gap-2 shadow-xl"
			>
				<div>
					<h3 class="dark:text-zinc-200 text-zinc-800 m-0">Leave a Message 👇</h3>
					<p class="dark:text-zinc-300 text-zinc-700 m-0 text-sm">
						You need to be signed in to post a message.
					</p>
				</div>
				<div class="flex gap-2">
					<button
						class="max-w-max rounded-lg dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-100 text-zinc-900 py-2 px-6 hover:shadow-xl duration-200 "
						on:click={() => signIn('github')}
					>
						<GithubIcon />
						Sign In
					</button>
				</div>
			</div>
		{/if}

		{#if data.messages}
			<div class="flex flex-col py-6">
				{#each data.messages as message (message.id)}
					<div
						class="flex flex-col gap-2 dark:hover:bg-zinc-800/40 hover:bg-zinc-300/40 hover:shadow-xl duration-200 p-4 rounded-lg"
					>
						<p
							class="dark:text-zinc-200 text-zinc-800 text-sm lg:text-base md:text-base m-0 break-all"
						>
							{message.text}
						</p>
						<div
							class="flex justify-start items-center gap-4 dark:text-zinc-400 text-zinc-700 text-xs"
						>
							<p class="m-0">by {message.authorName}</p>
							•
							<p class="m-0">
								on{' '}
								{Intl.DateTimeFormat('en-US', {
									dateStyle: 'medium',
									timeStyle: 'short'
								}).format(new Date(message.createdAt))}
							</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<Footer />
</main>

<Toaster />

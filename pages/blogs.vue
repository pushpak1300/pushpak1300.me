<template>
	<main class="">
		<AppHeader
			class="mb-16"
			:title
			:description
		/>
		<div
			v-if="blogs"
			class="space-y-4"
		>
			<BlogItem
				v-for="(blog, id) in blogs"
				:key="id"
				:blog="blog"
			/>
		</div>
		<div class="pt-24">
			<div class="mb-6 flex items-center gap-3">
				<div class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10">
					<div class="h-1.5 w-1.5 rounded-full bg-current" />
				</div>
				<h2 class="uppercase text-xs font-semibold text-gray-400">
					STAY IN TOUCH
				</h2>
			</div>
			<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
				Subscribe to newsletter and unsubscribe at any time.
			</p>
			<form @submit.prevent="subscribeToNewsletter">
				<div class="flex items-center gap-3 mt-6">
					<UInput
						id="email-address"
						v-model="email"
						name="email-address"
						type="email"
						autocomplete="email"
						placeholder="Enter your email"
						required
						icon="i-heroicons-envelope"
						class="flex-1"
						size="lg"
					/>
					<UButton
						:loading="loading"
						type="submit"
						:label="emailSubmited? 'Done' : 'Join →'"
						size="lg"
						color="primary"
					/>
				</div>
			</form>
		</div>
	</main>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';
import { useSeoMeta, useAsyncData } from '#imports';
import type BlogItem from '~/components/BlogItem.vue';

const title = 'Blogs';
const description = 'The articles I\'ve penned over the years. Though I\'ve been quiet in recent times, I plan to reignite my writing soon.';

useSeoMeta({
	title,
	description,
});

interface BlogContent extends ParsedContent {
	name: string;
	description: string;
	slug: string;
	projectLink: string;
	mainLink: string;
	skills: string;
	githubUrl: string;
}

const { data: blogs } = await useAsyncData('blogs-all', () =>
	queryContent<BlogContent>('blogs').sort({ published_at: -1 }).find(),
);

const email = ref('');
const emailSubmited = ref(false);
const loading = ref(false);

const subscribeToNewsletter = async () => {
	loading.value = true;
	await useFetch('https://usebasin.com/f/baffd19320ff.json', {
		method: 'post',
		body: { email: email.value },
	});
	email.value = '';
	emailSubmited.value = true;
	loading.value = false;
};
</script>

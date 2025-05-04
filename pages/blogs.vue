<template>
	<main class="">
		<AppHeader
			class="mb-8 md:mb-16"
			:title
			:description
		/>
		<div
			v-if="blogs"
			class="border-primary border-l-2 pl-4"
		>
			<BlogItem
				v-for="(blog, id) in blogs"
				:key="id"
				:blog="blog"
			/>
		</div>
		<div class="pt-16 md:pt-24">
			<div class="mb-6 flex items-center gap-3">
				<div class="text-primary-500 bg-primary-500/10 flex-none rounded-full p-1">
					<div class="size-1.5 rounded-full bg-current" />
				</div>
				<h2 class="text-xs font-semibold uppercase text-neutral-400">
					STAY IN TOUCH
				</h2>
			</div>
			<p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
				Subscribe to newsletter and unsubscribe at any time.
			</p>
			<form @submit.prevent="subscribeToNewsletter">
				<div class="mt-6 flex items-center gap-3">
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
import { useSeoMeta, useAsyncData, queryCollection } from '#imports';
import appConfig from '~/app.config';

const title = 'Blogs';
const description = 'The articles I\'ve penned over the years. Though I\'ve been quiet in recent times, I plan to reignite my writing soon.';

useSeoMeta({
	title,
	description,
});

useHead({
	title: `${title} | ${appConfig.name}`,
});

const { data: blogs } = await useAsyncData('blogs-all', () => 
	queryCollection('blogs')
		.order('published_at', 'DESC')
		.all()
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

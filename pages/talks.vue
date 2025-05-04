<template>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-4xl font-bold mb-8">{{ PAGE_CONFIG.title }}</h1>
		<p class="text-lg mb-8">{{ PAGE_CONFIG.description }}</p>

		<div v-if="groupedTalks.length > 0" class="space-y-12">
			<div v-for="talk in groupedTalks" :key="talk.title" class="space-y-4">
				<h2 class="text-2xl font-semibold">{{ talk.title }}</h2>
				<div class="grid gap-4">
					<TalkItem
						v-for="instance in talk.instances"
						:key="`${talk.title}-${instance.date}`"
						:talk="instance"
					/>
				</div>
			</div>
		</div>
		<div v-else class="text-center py-12">
			<p class="text-lg text-gray-600">No talks available at the moment.</p>
		</div>

		<!-- Contact Section -->
		<section class="mt-16 space-y-4">
			<h2 class="text-xl font-semibold">
				Want me to speak at your event?
			</h2>
			<p class="text-sm text-neutral-600 dark:text-neutral-400">
				If you are organizing a tech conference or meetup focused on Laravel(PHP), Vue (Typescript), Voice AI or
				modern web development, I'd be happy to give a talk!
			</p>
			<ul class="ml-4 list-disc space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
				<li>I am currently doing in-person/online talks</li>
				<li>For events outside India, visa assistance may be required</li>
			</ul>
			<p class="text-sm text-neutral-600 dark:text-neutral-400">
				Reach out to me at <a
					:href="`mailto:${PAGE_CONFIG.email}`"
					class="text-primary underline"
				>{{
					PAGE_CONFIG.email }}</a>
			</p>
		</section>
	</div>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData } from '#imports';
import type { TalksResponse, RawTalk, GroupedTalk } from '~/types/content';
import appConfig from '~/app.config';
import TalkItem from '~/components/TalkItem.vue';

const PAGE_CONFIG = {
	title: 'Talks',
	description: 'I\'ve had the pleasure of speaking at various conferences and meetups. Here\'s a collection of my talks.',
	email: 'talks@pushpak1300.me',
} as const;

// SEO setup
useSeoMeta({
	title: PAGE_CONFIG.title,
	description: PAGE_CONFIG.description,
});

useHead({
	title: `${PAGE_CONFIG.title} | ${appConfig.name}`,
});

// Data fetching
const { data: talksData } = await useAsyncData('talks-all', () =>
	$fetch<TalksResponse>('/api/talks')
);

// Computed properties
const talks = computed(() => talksData.value?.talks || []);

const groupedTalks = computed(() => {
	if (!talks.value || talks.value.length === 0) return []; // Return empty array if no talks

	const groupByTitle = (talks: RawTalk[]): Record<string, GroupedTalk> => {
		return talks.reduce((acc, talk) => {
			if (!acc[talk.title]) {
				acc[talk.title] = {
					title: talk.title,
					instances: [],
				};
			}
			acc[talk.title].instances.push(...talk.instances);
			return acc;
		}, {} as Record<string, GroupedTalk>);
	};

	const groupByYear = (titleGroups: Record<string, GroupedTalk>): GroupedTalk[] => {
		const result: GroupedTalk[] = [];
		Object.values(titleGroups).forEach((group) => {
			group.instances.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			result.push(group);
		});
		return result;
	};

	const titleGroups = groupByTitle(talks.value);
	const yearGroups = groupByYear(titleGroups);

	return yearGroups;
});
</script>

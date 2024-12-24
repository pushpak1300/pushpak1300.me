<template>
	<main>
		<AppHeader
			class="mb-8 md:mb-16"
			:title="PAGE_CONFIG.title"
			:description="PAGE_CONFIG.description"
		/>
		<div v-if="talks">
			<div
				v-for="(yearTalks, year) in groupedTalks"
				:key="year"
				class="mb-8"
			>
				<h2 class="mb-4 text-xl font-semibold uppercase">
					{{ year }}
				</h2>
				<TalkItem
					v-for="talk in yearTalks"
					:key="talk.title"
					:talk="talk"
				/>
			</div>
		</div>

		<!-- Contact Section -->
		<section class="mt-16 space-y-4">
			<h2 class="text-xl font-semibold">
				Want me to speak at your event?
			</h2>
			<p class="text-sm text-gray-600 dark:text-gray-400">
				If you are organizing a tech conference or meetup focused on Laravel(PHP), Vue (Typescript), Voice AI or
				modern web development, I'd be happy to give a talk!
			</p>
			<ul class="ml-4 list-disc space-y-2 text-sm text-gray-600 dark:text-gray-400">
				<li>I am currently doing in-person/online talks</li>
				<li>For events outside India, visa assistance may be required</li>
			</ul>
			<p class="text-sm text-gray-600 dark:text-gray-400">
				Reach out to me at <a
					:href="`mailto:${PAGE_CONFIG.email}`"
					class="text-primary underline"
				>{{
					PAGE_CONFIG.email }}</a>
			</p>
		</section>
	</main>
</template>

<script setup lang="ts">
import { useSeoMeta, useAsyncData } from '#imports';
import appConfig from '~/app.config';
import TalkItem from '~/components/TalkItem.vue';

const PAGE_CONFIG = {
	title: 'Talks',
	description: 'Presentations and talks I\'ve given at various conferences and meetups over the years.',
	email: 'talks@pushpak1300.me',
} as const;

interface TalkInstance {
	conference: string;
	date: string;
	slidesUrl?: string;
	youtubeUrl?: string;
	tweetUrl?: string;
}

interface RawTalk extends TalkInstance {
	title: string;
}

interface GroupedTalk {
	title: string;
	instances: TalkInstance[];
}

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
	queryContent<{ talks: RawTalk[] }>('talks').findOne(),
);

// Computed properties
const talks = computed(() => talksData.value?.talks || []);

const groupedTalks = computed(() => {
	if (!talks.value) return {};

	const groupByTitle = (talks: RawTalk[]): Record<string, GroupedTalk> => {
		return talks.reduce((groups, talk) => {
			if (!groups[talk.title]) {
				groups[talk.title] = {
					title: talk.title,
					instances: [],
				};
			}
			groups[talk.title].instances.push({
				conference: talk.conference,
				date: talk.date,
				slidesUrl: talk.slidesUrl,
				youtubeUrl: talk.youtubeUrl,
				tweetUrl: talk.tweetUrl,
			});
			return groups;
		}, {} as Record<string, GroupedTalk>);
	};

	const groupByYear = (titleGroups: Record<string, GroupedTalk>): Record<string, GroupedTalk[]> => {
		return Object.values(titleGroups).reduce((groups, talk) => {
			talk.instances.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
			const year = new Date(talk.instances[0].date).getFullYear().toString();
			if (!groups[year]) {
				groups[year] = [];
			}
			groups[year].push(talk);
			return groups;
		}, {} as Record<string, GroupedTalk[]>);
	};

	const titleGroups = groupByTitle(talks.value);
	const yearGroups = groupByYear(titleGroups);
	return yearGroups;
});
</script>

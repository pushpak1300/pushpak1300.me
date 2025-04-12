<template>
	<main>
		<AppHeader
			class="mb-8 md:mb-16"
			:title="PAGE_CONFIG.title"
			:description="PAGE_CONFIG.description"
		/>
		<div v-if="talks.length > 0">
			<div
				v-for="group in groupedTalks"
				:key="group.year"
				class="mb-8"
			>
				<h2 class="mb-4 text-xl font-semibold uppercase">
					{{ group.year }}
				</h2>
				<TalkItem
					v-for="talk in group.talks"
					:key="talk.title"
					:talk="talk"
				/>
			</div>
		</div>
		<div v-else>
			<p>Loading talks...</p> <!-- Optional: Add a loading state -->
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
	if (!talks.value || talks.value.length === 0) return []; // Return empty array if no talks

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
			// Sort instances within each title group by date descending
			groups[talk.title].instances.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			return groups;
		}, {} as Record<string, GroupedTalk>);
	};

	const groupByYear = (titleGroups: Record<string, GroupedTalk>): Record<string, GroupedTalk[]> => {
		return Object.values(titleGroups).reduce((groups, talk) => {
			// Use the latest instance's date for determining the year
			const year = new Date(talk.instances[0].date).getFullYear().toString();
			if (!groups[year]) {
				groups[year] = [];
			}
			groups[year].push(talk);
			// Sort talks within each year alphabetically by title
			groups[year].sort((a, b) => a.title.localeCompare(b.title));
			return groups;
		}, {} as Record<string, GroupedTalk[]>);
	};

	const titleGroups = groupByTitle(talks.value);
	const yearGroups = groupByYear(titleGroups);

	// Sort years in descending order
	const sortedYears = Object.keys(yearGroups).sort((a, b) => parseInt(b) - parseInt(a));

	// Map to the final array structure for the template
	return sortedYears.map(year => ({
		year,
		talks: yearGroups[year],
	}));
});
</script>

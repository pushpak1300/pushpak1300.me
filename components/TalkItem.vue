<template>
	<div
		v-motion-fade-visible
		:delay="200"
		class="py-4 md:py-2"
	>
		<div class="group">
			<h2 class="group-hover:text-primary text-lg font-medium">
				{{ talk.title }}
			</h2>
			<div class="mt-4 py-4">
				<div
					v-for="instance in talk.instances"
					:key="`${instance.conference}-${instance.date}`"
					class="ml-4 border-l border-gray-200 pl-4 dark:border-gray-800"
				>
					<div class="space-y-2">
						<time
							:datetime="instance.date"
							class="text-xs text-gray-800 dark:text-gray-400"
						>
							{{ getReadableDate(instance.date) }}
						</time>
						<p class="text-sm text-gray-800 dark:text-gray-400">
							{{ instance.conference }}
						</p>
						<div class="flex gap-6">
							<AppIconLink
								v-if="instance.slidesUrl"
								:key="instance.conference + 'slides'"
								name="Slides"
								:link="instance.slidesUrl"
								icon="heroicons:presentation-chart-line"
								target="_blank"
								:active="true"
								:show-name="false"
							/>
							<AppIconLink
								v-if="instance.youtubeUrl"
								:key="instance.conference + 'youtube'"
								name="YouTube"
								:link="instance.youtubeUrl"
								icon="heroicons:video-camera"
								target="_blank"
								:active="true"
								:show-name="false"
							/>
							<AppIconLink
								v-if="instance.tweetUrl"
								:key="instance.conference + 'tweet'"
								name="Tweet"
								:link="instance.tweetUrl"
								icon="proicons:x-twitter"
								target="_blank"
								:active="true"
								:show-name="false"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface TalkInstance {
	conference: string;
	date: string;
	slidesUrl?: string;
	youtubeUrl?: string;
	tweetUrl?: string;
}

interface GroupedTalk {
	title: string;
	instances: TalkInstance[];
}

defineProps({
	talk: {
		type: Object as () => GroupedTalk,
		required: true,
	},
});

const getReadableDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};
</script>

<template>
	<div
		v-motion-fade-visible
		:delay="200"
		class="py-4 md:py-2"
	>
		<div class="group">
			<div class="mt-4 py-4">
				<div class="ml-4 border-l border-neutral-200 pl-4 dark:border-neutral-800">
					<div class="space-y-2">
						<time
							:datetime="talk.date"
							class="text-xs text-neutral-800 dark:text-neutral-400"
						>
							{{ getReadableDate(talk.date) }}
						</time>
						<p class="text-sm text-neutral-800 dark:text-neutral-400">
							{{ talk.conference }}
						</p>
						<div class="flex gap-6">
							<AppIconLink
								v-if="talk.slidesUrl"
								:key="talk.conference + 'slides'"
								name="Slides"
								:link="talk.slidesUrl"
								icon="heroicons:presentation-chart-line"
								target="_blank"
								:active="true"
								:show-name="false"
							/>
							<AppIconLink
								v-if="talk.youtubeUrl"
								:key="talk.conference + 'youtube'"
								name="YouTube"
								:link="talk.youtubeUrl"
								icon="heroicons:video-camera"
								target="_blank"
								:active="true"
								:show-name="false"
							/>
							<AppIconLink
								v-if="talk.tweetUrl"
								:key="talk.conference + 'tweet'"
								name="Tweet"
								:link="talk.tweetUrl"
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
import type { TalkInstance } from '~/types/content';

defineProps({
	talk: {
		type: Object as () => TalkInstance,
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

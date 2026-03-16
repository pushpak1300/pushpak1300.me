<template>
  <div v-motion-fade-visible :delay="200">
    <div
      class="bg-stone-50/40 border border-stone-200/80 dark:bg-white/3 dark:border-white/10 px-4 py-4 rounded-2xl"
    >
      <div class="flex gap-4 items-center justify-between">
        <div>
          <p class="dark:text-stone-100 font-medium font-sans text-base text-stone-900">
            {{ talk.conference }}
          </p>
        </div>
        <time :datetime="talk.date" class="dark:text-stone-500 text-stone-400 text-xs">
          {{ getReadableDate(talk.date) }}
        </time>
      </div>
      <div class="flex gap-4 items-center mt-3 text-sm">
        <a
          v-if="talk.slidesUrl"
          :href="talk.slidesUrl"
          target="_blank"
          class="dark:hover:text-stone-100 dark:text-stone-400 flex gap-2 hover:text-stone-900 items-center text-stone-500 transition-colors"
        >
          <Icon name="heroicons:presentation-chart-line" class="size-4" />
          Slides
        </a>
        <a
          v-if="talk.youtubeUrl"
          :href="talk.youtubeUrl"
          target="_blank"
          class="dark:hover:text-stone-100 dark:text-stone-400 flex gap-2 hover:text-stone-900 items-center text-stone-500 transition-colors"
        >
          <Icon name="heroicons:video-camera" class="size-4" />
          Video
        </a>
        <a
          v-if="talk.tweetUrl"
          :href="talk.tweetUrl"
          target="_blank"
          class="dark:hover:text-stone-100 dark:text-stone-400 flex gap-2 hover:text-stone-900 items-center text-stone-500 transition-colors"
        >
          <Icon name="proicons:x-twitter" class="size-4" />
          Post
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type TalkListItem = {
  conference: string;
  date: string;
  slidesUrl?: string;
  tweetUrl?: string;
  youtubeUrl?: string;
};

defineProps<{
  talk: TalkListItem;
}>();

const getReadableDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

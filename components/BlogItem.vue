<template>
	<div class="py-4 md:py-2">
		<ULink
			:to="blog.external_url"
			class="group rounded-lg"
			:target="blog.external ? '_blank' : '_self'"
		>
			<div
				v-motion-fade-visible
				:delay="300"
				class="group grid grid-cols-1 md:grid-cols-4"
			>
				<time
					class="group-hover:text-primary flex-none text-sm text-gray-800 dark:text-gray-400 md:py-8"
					:datetime="blog.published_at"
				>
					{{ getReadableDate(blog.published_at) }}
				</time>
				<div class="space-y-2 rounded py-4 md:col-span-3 md:p-8 md:hover:bg-gray-100 md:hover:dark:bg-gray-900">
					<h2
						class="group-hover:text-primary-500 dark:group-hover:text-primary-200 text-lg font-medium"
					>
						{{ blog.title }}
					</h2>
					<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
						{{ blog.description }}
					</p>
					<div
						class="text-primary text-sm"
					>
						Read More →
					</div>
				</div>
			</div>
		</ULink>
	</div>
</template>

<script setup lang="ts">
defineProps({
	blog: {
		type: Object,
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

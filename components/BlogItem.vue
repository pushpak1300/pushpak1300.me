<template>
	<div class="py-3">
		<ULink
			:to="blog.external_url"
			class="group rounded-lg"
			:target="blog.external ? '_blank' : '_self'"
		>
			<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
				<h2
					class="flex gap-3 text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-200"
				>
					<span class="block w-0.5 rounded-full bg-primary-500" />
					{{ blog.title }}
				</h2>
				<div
					class="hidden sm:block flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-primary-200"
				/>
				<time
					class="text-sm flex-none text-gray-800 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-200"
					:datetime="blog.published_at"
				>
					{{ getReadableDate(blog.published_at) }}
				</time>
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
		month: 'short',
		day: 'numeric',
	});
};
</script>

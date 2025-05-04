<template>
	<UTooltip
		:text="name"
		:ui="{ popper: { strategy: 'absolute' } }"
	>
		<a
			:href="link"
			target="_blank"
			class="group-hover:text-primary relative flex items-center justify-center py-4 transition"
		>
			<Icon
				aria-hidden="true"
				:name="icon"
				class="z-10 size-5"
			/>

			<span
				v-if="active"
				class="absolute left-1/2 top-1/2 z-0 size-8 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-neutral-200 dark:bg-white/10"
			/>
			<span class="sr-only">{{ name }}</span>
		</a>
		<a
			v-if="showName"
			:href="link"
			target="_blank"
			class="relative flex items-center justify-center"
		>
			<span class="group-hover:text-primary-500 sr-only sm:not-sr-only sm:pr-2">{{ name }}</span>
		</a>
	</UTooltip>
</template>

<script setup lang="ts">
defineProps({
	name: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
	target: {
		type: String,
		required: true,
		default: '_blank',
	},
	active: {
		type: Boolean,
		required: false,
		default: false,
	},
	showName: {
		type: Boolean,
		required: true,
		default: false,
	},
});
</script>

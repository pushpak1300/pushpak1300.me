<template>
    <UTooltip :text="name" :ui="{ popper: { strategy: 'absolute' } }">
        <a :href="link" target="_blank"
            class="relative py-4 flex items-center justify-center transition group-hover:text-primary-500 dark:hover:text-primary-400"
            active-class="text-primary-600 dark:text-primary-400">
            <Icon aria-hidden="true" :name="icon" class="w-5 h-5 z-10" />

            <span v-if="active"
                class="absolute h-8 w-8 z-0 rounded-xl bg-gray-200 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <span class="sr-only">{{ name }}</span>
        </a>
        <a v-if="showName" :to="link" target="_blank" class="relative flex items-center justify-center"
            active-class="text-primary-600 dark:text-primary-400">
            <span class="sr-only sm:not-sr-only sm:pr-2 group-hover:text-primary-500">{{ name }}</span>
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

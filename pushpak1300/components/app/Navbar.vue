<template>
	<div ref="headerRef" :style="styles" class="fixed top-0 w-full z-50">
		<nav class="mx-auto px-2 sm:px-4 max-w-4xl">
			<ul
				class="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-md shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5">
				<li v-for="item in items" :key="item.path" class="group">
					<UTooltip :text="item.name" :ui="{ popper: { strategy: 'absolute' } }">
						<ULink :to="item.path" :target="item.target"
							class="relative px-2 py-4 flex items-center justify-center transition group-hover:text-primary-500 dark:hover:text-primary-400"
							active-class="text-primary-600 dark:text-primary-400">
							<Icon aria-hidden="true" :name="item.icon" class="w-5 h-5 z-10" />

							<span v-if="$route.path === item.path"
								class="absolute h-8 w-8 z-0 rounded-xl bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
							<span class="sr-only">{{ item.name }}</span>
						</ULink>
						<ULink :to="item.path" :target="item.target" class="relative flex items-center justify-center"
							active-class="text-primary-600 dark:text-primary-400">
							<span class="sr-only sm:not-sr-only sm:pr-2 group-hover:text-primary-500">{{ item.name
								}}</span>
						</ULink>
					</UTooltip>
				</li>
				<li class="flex-1" />
				<li>
					<AppColorPicker />
				</li>
				<li>
					<AppToggleTheme />
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup lang="ts">
import { useFixedHeader } from 'vue-use-fixed-header';

const headerRef = ref(null);
const { styles } = useFixedHeader(headerRef);
const appConfig = useAppConfig();

const items = [
	{
		name: 'Home',
		path: '/',
		icon: 'heroicons:home'
	},
	{
		name: 'Projects',
		path: '/projects',
		icon: 'heroicons:folder-plus',
	},
	{
		name: 'Articles',
		path: '/articles',
		icon: 'heroicons:newspaper',
	},
	{
		name: 'Talks',
		path: '/talks',
		icon: 'heroicons:microphone',
	},
	{
		name: 'Resume',
		target: '_blank',
		path: appConfig.resumeURL,
		icon: 'heroicons:document-text',
	},
];
</script>

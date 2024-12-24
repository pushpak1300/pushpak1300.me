<template>
	<div
		ref="headerRef"
		:style="styles"
		class="fixed top-0 z-50 w-full"
	>
		<nav class="mx-auto max-w-3xl px-2 sm:px-4">
			<ul
				class="my-4 flex items-center rounded-md bg-white/90 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20"
			>
				<li
					v-for="item in items"
					:key="item.path"
					class="group"
				>
					<UTooltip
						:text="item.name"
						:ui="{ popper: { strategy: 'absolute' } }"
					>
						<ULink
							:to="item.path"
							:target="item.external ? '_blank' : '_self'"
							class="group-hover:text-primary-500 dark:hover:text-primary-400 relative flex items-center justify-center p-4 transition"
							active-class="text-primary-600 dark:text-primary-400"
						>
							<Icon
								aria-hidden="true"
								:name="item.icon"
								class="z-10 size-6"
							/>

							<span
								v-if="$route.path === item.path"
								class="absolute left-1/2 top-1/2 z-0 size-10 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gray-100 dark:bg-white/10"
							/>
							<span class="sr-only">{{ item.name }}</span>
						</ULink>
					</UTooltip>
				</li>
				<li class="flex-1" />
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
		icon: 'heroicons:home',
	},
	{
		name: 'Projects',
		path: '/projects',
		icon: 'heroicons:archive-box',
	},
	{
		name: 'Blogs',
		path: '/blogs',
		icon: 'heroicons:newspaper',
	},
	{
		name: 'Talks',
		path: '/talks',
		icon: 'heroicons:microphone',
	},
	{
		name: 'Resume',
		external: true,
		path: appConfig.resumeURL,
		icon: 'heroicons:document-text',
	},
];
</script>

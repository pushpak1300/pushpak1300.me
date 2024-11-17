<template>
	<UPopover
		mode="hover"
		:popper="{ strategy: 'absolute' }"
		:ui="{ width: 'w-[156px]' }"
	>
		<template #default="{ open }">
			<UButton
				color="gray"
				variant="ghost"
				square
				:class="[open && 'bg-gray-50 dark:bg-gray-800']"
				aria-label="Color picker"
			>
				<UIcon
					name="i-heroicons-swatch-20-solid"
					class="text-primary-500 dark:text-primary-400 size-5"
				/>
			</UButton>
		</template>

		<template #panel>
			<div class="p-2">
				<div class="grid grid-cols-5 gap-px">
					<AppColorPickerPill
						v-for="color in primaryColors"
						:key="color.value"
						:color="color"
						:selected="primary"
						@select="primary = color"
					/>
				</div>

				<hr class="my-2 border-gray-200 dark:border-gray-800">

				<div class="grid grid-cols-5 gap-px">
					<AppColorPickerPill
						v-for="color in grayColors"
						:key="color.value"
						:color="color"
						:selected="gray"
						@select="gray = color"
					/>
				</div>
			</div>
		</template>
	</UPopover>
</template>

<script setup lang="ts">
import colors from '#tailwind-config/theme/colors';
import { useAppConfig, useColorMode } from '#imports';

const appConfig = useAppConfig();
const colorMode = useColorMode();

const primaryColors = computed(() => appConfig.ui.colors.filter(color => color !== 'primary').map(color => ({ value: color, text: color, hex: colors[color][colorMode.value === 'dark' ? 400 : 500] })));
const primary = computed({
	get() {
		return primaryColors.value.find(option => option.value === appConfig.ui.primary);
	},
	set(option) {
		appConfig.ui.primary = option.value;

		window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.primary);
	},
});

const grayColors = computed(() => ['slate', 'cool', 'zinc', 'neutral', 'stone'].map(color => ({ value: color, text: color, hex: colors[color][colorMode.value === 'dark' ? 400 : 500] })));
const gray = computed({
	get() {
		return grayColors.value.find(option => option.value === appConfig.ui.gray);
	},
	set(option) {
		appConfig.ui.gray = option.value;

		window.localStorage.setItem('nuxt-ui-gray', appConfig.ui.gray);
	},
});
</script>

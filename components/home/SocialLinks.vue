<template>
	<div>
		<h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">
			Socials
		</h2>
		<div class="flex space-x-4">
			<NuxtLink
				v-for="link in links"
				:key="link.icon"
				:to="link.url"
				target="_blank"
				external
				:aria-label="link.name + ' profile'"
				class="flex items-end gap-4 hover:text-primary-300 group"
			>
				<Icon
					:name="link.icon"
					class="w-8 h-8"
				/>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
const links = [
	{
		name: 'GitHub',
		url: 'https://github.com/pushpak1300',
		icon: 'mdi:github',
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/pushpak1300',
		icon: 'mdi:x',
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/pushpak-c-286b17b1/',
		icon: 'mdi:linkedin',
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/traveldiary.tech/',
		icon: 'mdi:instagram',
	},
	{
		name: 'Dev.To',
		url: 'https://www.instagram.com/traveldiary.tech/',
		icon: 'mdi:dev-to',
	},
	{
		name: 'Email',
		url: 'mailto:hey@pushpak1300.me',
		icon: 'mdi:email',
	},
];
</script>

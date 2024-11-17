<template>
	<div>
		<h2 class="mb-4 text-xs font-semibold uppercase text-gray-400">
			Socials
		</h2>
		<div
			class="flex space-x-4"
		>
			<NuxtLink
				v-for="(link, index) in links"
				:key="link.icon"
				v-motion-pop-visible
				:delay="index*50"
				:to="link.url"
				target="_blank"
				external
				:aria-label="link.name + ' profile'"
				class="hover:text-primary-300 group flex items-end gap-4"
			>
				<Icon
					:name="link.icon"
					class="size-8"
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
		icon: 'fa6-brands:square-x-twitter',
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
		name: 'Peerlist',
		url: 'https://peerlist.io/pushpak1300',
		icon: 'iconoir:peerlist',
	},
	{
		name: 'Email',
		url: 'mailto:hey@pushpak1300.me',
		icon: 'mdi:email',
	},
];
</script>

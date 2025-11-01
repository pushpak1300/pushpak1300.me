<template>
	<div
		v-motion-fade-visible
		class="space-y-6"
	>
		<NuxtImg
			src="/avtar.webp"
			alt="Pushpak Chhajed"
			class="size-12 rounded-full border border-neutral-300 bg-neutral-200 ring-2 ring-neutral-200 transition-all duration-300 hover:ring-4 dark:border-neutral-800 dark:bg-neutral-900 dark:ring-white/10 sm:size-24"
			placeholder
			width="45"
			format="webp"
			loading="lazy"
		/>
		<h1 class="text-xl font-bold text-neutral-800 drop-shadow-2xl dark:text-neutral-100">
			Hey. I'm {{ appConfig.name }}. 👋
		</h1>
		<p class="text-neutral-900 dark:text-neutral-400">
			I'm a tinkerer, hacker, and software engineer from India. <br><br>
			My coding journey started at 2012 when I began customizing Cydia themes for my iPad, which quickly fueled my
			obsession with computers and the
			internet. I started learning swift. I shifted to web tech-learning HTML, CSS, and JavaScript. Building
			websites sparked my passion for
			creating impactful products. While studying at Mumbai University, I gained hands-on experience at
			early-stage startups, learning to solve real customer problems and build end-to-end solutions. few of them
			are <AppExternalLink
				href="https://Taxvisors.com"
				title="taxvosior"
			>
				Taxvisor
			</AppExternalLink> and Behtaar.
			<br>
			<br>
			I dove deep into the Laravel ecosystem while working at <AppExternalLink
				href="https://www.easternenterprise.com/"
				title="Eastern Enterprise Website"
			>
				Eastern Enterprise
			</AppExternalLink>,a
			Netherlands-based service startup. Even in a service environment, I kept my hacker mindset tinkering
			with different technologies and tools.The pandemic coincided with my fourth year of university, allowing me
			to balance my academics with a
			full-time role at a UK-based fintech startup called <AppExternalLink
				href="https://clearglass.com"
				title="clearglass"
			>
				Clearglass Analytics
			</AppExternalLink>. Here, I honed my skills in product engineering,contributing to various teams and
			building features that improved workflows.
			<br>
			<br>
			Recently, I participated in a Laracon India hackathon that got my interest in large language models (LLMs).
			This
			led to my previous role (Senior Software Engineer) at
			<AppExternalLink
				href="https://biglysales.com"
				title="Bigly Sales"
			>
				Bigly Sales
			</AppExternalLink>, where I'm scaling our LLM
			and Laravel pipeline to automate customer
			communications, scaling to millions of calls and SMS daily.
			<br><br>
			This role has deepened my passion for the intersection of Laravel and AI, leading me to actively contribute to the <AppExternalLink
				href="https://prismphp.com/"
				title="Prism PHP"
			>
				Prism
			</AppExternalLink> package. My enthusiasm for this space also led me to share my insights as a speaker at <AppExternalLink
				href="https://laracon.in/"
				title="Laracon India"
			>
				Laracon India.
			</AppExternalLink>
			<br><br>
			After a very short stint as a Founding Software Engineer at <AppExternalLink
				href="https://zango.ai"
				title="Zango"
			>
				Zango
			</AppExternalLink>, I'm currently working at <AppExternalLink
				href="https://laravel.com"
				title="Laravel"
			>
				Laravel
			</AppExternalLink> in the Open Source team, where I'm maintaining the <AppExternalLink
				href="https://github.com/laravel/boost"
				title="Laravel Boost"
			>
				Boost
			</AppExternalLink>, <AppExternalLink
				href="https://github.com/laravel/mcp"
				title="Laravel MCP"
			>
				MCP
			</AppExternalLink>, and <AppExternalLink
				href="https://github.com/laravel/roster"
				title="Laravel Roster"
			>
				Roster
			</AppExternalLink> packages.
			<br><br>
			As of 2024, my current focus is on:
			<br>
			<b class="text-primary-700 dark:text-primary-100">Laravel, Inertia, Tailwind, Vue, TypeScript, PHP, Python and Nuxt.</b><br>
			<br>

			When I'm not coding, you can find me reading about the latest trends, or
			traveling. <br>
			I'm always up for a chat or collaboration. Hit me up on <AppExternalLink
				href="https://x.com/pushpak1300"
				title="X account of Pushpak Chhajed"
			>
				Twitter
			</AppExternalLink> or
			<AppExternalLink
				href="mailto:hello@pushpak1300.me"
				title="Email Address Of Pushpak Chhajed"
			>
				Email
			</AppExternalLink>!
		</p>
	</div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#imports';
import appConfig from '~/app.config';

useSeoMeta({
	title: 'Pushpak Chhajed',
	description:
		'I\'m a software engineer from India with more than three years of experience in developing applications, primarily using web technologies.',
});
</script>

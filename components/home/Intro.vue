<template>
	<div class="space-y-6">
		<NuxtImg src="/avtar.webp" alt="Pushpak Chhajed"
			class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-24 sm:w-24"
			placeholder width="45" format="webp" loading="lazy" />
		<h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
			Hello there! 👋
		</h1>
		<h2 class="h-2 font-semibold text-xl text-gray-800 dark:text-gray-100">
			<mark class="bg-primary-300">Pushpak Chhajed.</mark>
		</h2>
		<p class="text-gray-900 dark:text-gray-400">
			<br>

			Hey, I’m a tinkerer, hacker, and software engineer from India. <br><br>
			My coding journey started at 2012 when I began customizing Cydia themes for my iPad, which quickly fueled my
			obsession with computers and the
			internet. I started learning swift. I shifted to web tech-learning HTML, CSS, and JavaScript. Building
			websites sparked my passion for
			creating impactful products. While studying at Mumbai University, I gained hands-on experience at
			early-stage startups, learning to solve real customer problems and build end-to-end solutions. few of them
			are <AppExternalLink href="https://Taxvisors.com" title="taxvosior">
				Taxvisor
			</AppExternalLink> and Behtaar.
			<br>
			<br>
			I dove deep into the Laravel ecosystem while working at <AppExternalLink
				href="https://www.easternenterprise.com/" title="Eastern Enterprise Website">
				Eastern Enterprise
			</AppExternalLink>,a
			Netherlands-based service startup. Even in a service environment, I kept my hacker mindset tinkering
			with different technologies and tools.The pandemic coincided with my fourth year of university, allowing me
			to balance my academics with a
			full-time role at a UK-based fintech startup called <AppExternalLink href="https://clearglass.com"
				title="clearglass">
				Clearglass Analytics
			</AppExternalLink>. Here, I honed my skills in product engineering,contributing to various teams and
			building features that improved workflows.
			<br>
			<br>
			Recently, I participated in a Laracon India hackathon that got my interest in large language models (LLMs).
			This
			led to my current role (Senior Software Engineer) at <span
				class="text-primary-700 dark:text-primary-100 underline">Bigly Sales</span>, where I’m scaling our LLM
			and Laravel pipeline to automate customer
			communications, handling millions of calls and SMS daily.
			<br><br>
			As of 2024, my current focus is on:
			<br>
			<b>Programming</b>: TypeScript, PHP, Python, Laravel, and Vue.<br>
			<b>Hobbies</b>: Hackathons, open-source contributions and Travelling.<br>
			<br>

			When I’m not coding, you can find me exploring new technologies, reading about the latest trends, or
			traveling. <br>
			I’m always up for a chat or collaboration. Hit me up on <AppExternalLink href="https://x.com/pushpak1300"
				title="X account of Pushpak Chhajed">
				Twitter
			</AppExternalLink> or
			<AppExternalLink href="mailto:hello@pushpak1300.me" title="Email Address Of Pushpak Chhajed">
				Email!
			</AppExternalLink>
		</p>
	</div>
</template>

<script setup lang="ts">
import { useSeoMeta } from '#imports';

useSeoMeta({
	title: 'Pushpak Chhajed',
	description:
		'I\'m a software engineer from India with more than three years of experience in developing applications, primarily using web technologies.',
});
</script>

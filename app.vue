<template>
	<AppNavbar />
	<div class="h-32" />
	<UContainer>
		<NuxtPage />
	</UContainer>
	<div class="h-24" />
	<UContainer>
		<AppFooter />
	</UContainer>
</template>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.2s;
}

.page-leave-to {
	opacity: 0;
	transform: translateY(-5px);
}

.page-enter-from {
	opacity: 0;
	transform: translateY(5px);
}
</style>

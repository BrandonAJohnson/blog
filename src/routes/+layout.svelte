<script>
	import "../app.css";
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Transition from "./transition.svelte";
	export let data;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="layout h-100 max-w-screen-2xl grid mx-auto py-8 px-2">
	<Header/>
	<main class="mt-10 mb-4 lg:px-0">
		<Transition url={data.url}>
			<slot />
		</Transition>
	</main>
	<Footer/>
</div>

<style>
	.layout {
		grid-template-rows: auto 1fr auto;
	}
</style>
<script>
	import "../app.css";
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="layout h-100 max-w-screen-2xl grid mx-auto py-8 px-2">
	<Header/>
	<main class="mt-10 mb-4 lg:px-0">
		<slot />
	</main>
	<Footer/>
</div>

<style>
	.layout {
		grid-template-rows: auto 1fr auto;
	}
</style>
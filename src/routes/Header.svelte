<script>
	import * as config from '$lib/config.js';
	import Toggle from './Toggle.svelte';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<nav class="py-8 sm:flex sm:justify-between">
	<a href="/">
		<span class="font-bold text-2xl xl:text-3xl">{config.title}</span>
	</a>

	<!-- TODO: Add some info here
	<ul class="mx-7 sm:flex sm:gap-8 sm:m-0">
		<li>
			<a class="text-inherit no-underline sm:text-lg" href="/about">About</a>
		</li>
		<li>
			<a class="text-inherit no-underline sm:text-lg" href="/contact">Contact</a>
		</li>
	</ul> -->

	<Toggle />
</nav>

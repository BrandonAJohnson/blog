<script>
	import * as config from '$lib/config.js';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<nav class="py-8 sm:flex sm:justify-between">
	<a href="/">
		<span class="font-bold text-2xl xl:text-3xl">{config.title}</span>
	</a>

	<ul class="mx-7 sm:flex sm:gap-8 sm:m-0">
		<li>
			<a class="text-inherit no-underline sm:text-lg" href="/about">About</a>
		</li>
		<li>
			<a class="text-inherit no-underline sm:text-lg" href="/contact">Contact</a>
		</li>
		<li>
			<a class="text-inherit no-underline sm:text-lg" href="/rss.xml" target="_blank">RSS</a>
		</li>
	</ul>

	<button class="border p-2">Toggle</button>
</nav>

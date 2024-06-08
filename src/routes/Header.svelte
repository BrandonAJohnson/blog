<script>
	import * as config from '$lib/config.js';
</script>

<nav class="py-8 sm:flex sm:justify-between">
	<a href="/" class="text-2xl xl:text-3xl">
		<b>{config.title}</b>
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

	<button>Toggle</button>
</nav>

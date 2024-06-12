<script>
	export let data;
</script>

<section>
	<h1 class="text-3xl">Results for: <span class="dark:text-amber-400 text-blue-800 font-bold">{data.category}</span></h1>
	<ul>
		{#each data.posts as post}
			<li class="post p-5">
				<a href={`../${post.slug}?back=${data.category}`} class="dark:text-amber-400 text-blue-800 text-xl sm:text-2xl md:text-3xl">{post.metadata.title}</a>
				<p class="text-slate-400 text-xs">{post.metadata.date}</p>
				<p class="py-2">{post.metadata.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.post:not(:last-child) {
		border-bottom: 1px solid grey;
	}
</style>
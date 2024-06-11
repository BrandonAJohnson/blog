<script>
	export let data;
</script>

<section>
	<ul>
		{#each data.posts as post}
			<li class="post p-5">
				<a href={post.slug} class="text-amber-400 text-xl sm:text-2xl md:text-3xl">{post.title}</a>
				<p class="text-slate-400 text-xs">{post.date}</p>
				<p class="py-2">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.post:not(:last-child) {
		border-bottom: 1px solid grey;
	}
</style>
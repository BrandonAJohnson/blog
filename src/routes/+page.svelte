<script>
	export let data;
</script>

<section>
	<ul>
		{#each data.posts as post}
			<li class="post p-5">
				<a href={post.slug} class="dark:text-amber-400 text-blue-800 text-xl sm:text-2xl md:text-3xl">{post.title}</a>
				<p class="text-slate-400 text-xs">{post.date}</p>
				<div>
					{#each post.categories as category}
					<a href={`categories/${category}`} class="dark:text-slate-300 dark:bg-slate-900 text-slate-800 bg-slate-200 text-xs inline-flex gap-2 mx-1 p-1 rounded">&num;{category}</a>
					{/each}
				</div>
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
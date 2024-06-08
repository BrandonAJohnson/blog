<script>
	import * as config from '$lib/config';
</script>

<section>
	<ul class="posts">
		{#each config.blogPosts as post}
			<li class="p-5">
				<a href={post.slug} class="text-amber-400 text-xl sm:text-2xl md:text-3xl">{post.metadata.title}</a>
				<p class="text-slate-400 text-xs">{post.metadata.date}</p>
				<p class="py-2">{post.metadata.description}</p>
			</li>
		{/each}
	</ul>
</section>
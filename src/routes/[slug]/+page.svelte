<script>
	export let data;
</script>

<svelte:head>
	<title>{data?.metadata?.title}</title>
	<meta property="og:type" content="article"/>
	<meta property="og:title" content={data?.metadata?.title}/>
	<meta property="og:description" content={data?.metadata?.description}/>
</svelte:head>

{#if data.metadata}
	<article class="max-w-7xl mx-auto">
		<hgroup class="mb-8">
			<h1 class="text-4xl dark:text-amber-400 mb-1">{data.metadata.title}</h1>
			<p class="text-sm">{data.metadata.author} {data.metadata.date}</p>
			<div>
				<!-- TODO: Change tags to a dynamic link that will open a new tab to show all the blogs within a specific category -->
				{#each data.metadata.categories as category}
					<span class="dark:text-slate-300 dark:bg-slate-900 text-slate-800 bg-slate-200 text-xs inline-flex gap-2 mx-1">&num;{category}</span>
				{/each}
			</div>
		</hgroup>


		<div>
			<svelte:component this={data.content}></svelte:component>
		</div>
	</article>
{:else}
	<p>Hmmm... Thats not ideal...</p>
{/if}

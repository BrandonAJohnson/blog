<script>
	import { fade } from "svelte/transition";

	export let url = '';
</script>

{#key url}
	<div class="h-100" in:fade>
		<slot/>
	</div>
{/key}
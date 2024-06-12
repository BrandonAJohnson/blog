<script>
	import { theme, toggleTheme } from "$lib/theme";
	import { Moon, Sun } from "lucide-svelte";
	import { fly } from "svelte/transition";
</script>

<button on:click={toggleTheme} aria-label="Change Theme">
	{#if $theme === 'dark'}
		<div in:fly={{y:10}}>
			<Sun/>
		</div>
	{:else}
		<div in:fly={{y: -10}}>
			<Moon/>
		</div>
	{/if}
</button>
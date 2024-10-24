<script>
	import ATodoItem from '../atoms/ATodoItem.svelte';
	const { title = '', items } = $props();
</script>

<article class="flex flex-col content-center m-3">
	<h3 class="m-2 text-center block">{title}</h3>
	<div class="max-w-xs flex flex-col m-2">
		{#each items as item}
			<ATodoItem label={item.label} />
		{/each}
	</div>
</article>

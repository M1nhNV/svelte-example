<script lang="ts">
	import OTodoCol from '../organisms/OTodoCol.svelte';

	const { list }: { list: { label: string; value: string; items: [] } }[] = $props();
	let entries = Object.entries(list);
</script>

<article class="flex">
	{#each entries as [key, value]}
		<OTodoCol title={key} items={value.items} />
	{/each}
</article>

<script lang="ts">
	import OTodoCol from '../organisms/OTodoCol.svelte';

	const {
		list,
		callback
	}: { list: { label: string; value: string; items: [] }; callback: (data: any) => void } =
		$props();
	let entries = Object.entries(list);
</script>

<article class="flex border">
	{#each entries as [key, value]}
		<OTodoCol {key} title={value.label} items={value.items} {callback} />
	{/each}
</article>

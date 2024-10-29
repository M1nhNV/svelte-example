<script lang="ts">
  import MTodoItem from '$ui/molecules/MTodoItem.svelte';
  let { title = '', key, items, callback } = $props();
</script>

<article data-key={key} class="flex flex-col content-center w-1/4 border-l-2">
  <h3 class="m-2 text-center block border-b pb-2 font-bold">{title}</h3>
  <div class="max-w-xs flex flex-col m-2">
    {#each items as item}
      <MTodoItem {key} label={item.label} id={item.id} {callback} />
    {/each}
  </div>
</article>

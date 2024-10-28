<script lang="ts">
  import MTodoItem from '../molecules/MTodoItem.svelte';
  const { title = '', key, items, callback } = $props();

  const handleCallbackItem = (action) => {
    callback(action);
  };
</script>

<article data-key={key} class="flex flex-col content-center w-1/4 border-l-2">
  <h3 class="m-2 text-center block border-b pb-2 font-bold">{title}</h3>
  <div class="max-w-xs flex flex-col m-2">
    {#each items as item}
      <MTodoItem {key} label={item.label} id={item.id} callback={handleCallbackItem} />
    {/each}
  </div>
</article>

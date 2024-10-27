<script lang="ts">
  const { label, id, callback } = $props();

</script>

<p
  id={id}
  class="my-2 p-2 w-9/12 truncate md:text-clip inline-flex items-center gap-x-2 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:mt-0 light:bg-neutral-900 light:border-neutral-700 light:text-white"
  on:click={() => callback({ type: 'item_click' })}
  on:mouseover={() => callback({ type: 'item_hover' })}
  on:mouseleave={() => callback({ type: 'item_leave' })}
  on:dragstart={() => callback({ type: 'drag_start' })}
  draggable="true"
>
  {label}
</p>

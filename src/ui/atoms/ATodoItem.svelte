<script lang="ts">
  export let label = '';
  export let id = '';
  export let callback = () => {};
</script>

<p
  {id}
  tabindex="-2"
  class="my-2 p-2 w-9/12 truncate md:text-clip inline-flex items-center gap-x-2 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:mt-0 light:bg-neutral-900 light:border-neutral-700 light:text-white"
  on:mouseover={() => callback({ type: 'item_hover' })}
  on:mouseleave={() => callback({ type: 'item_leave' })}
  on:dragstart={() => callback({ type: 'drag_start' })}
  on:click={() => callback({ type: 'item_click' })}
  on:keydown={(e) => e.key === 'Enter' && callback({ type: 'item_click' })}
>
  {label}
</p>

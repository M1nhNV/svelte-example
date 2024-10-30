<script lang="ts">
  export let label = '';
  export let id = '';
  export let callback = () => {};
</script>

<input
  {id}
  value={label}
  tabindex="-2"
  readonly
  class="my-2 p-2 w-9/12 truncate md:text-clip inline-flex items-center gap-x-2 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:mt-0 light:bg-neutral-900 light:border-neutral-700 light:text-white"
  onmouseover={() => callback({ type: 'item_hover' })}
  onfocus={() => callback({ type: 'item_focus' })}
  onmouseleave={() => callback({ type: 'item_leave' })}
  ondragstart={() => callback({ type: 'drag_start' })}
  onclick={() => callback({ type: 'item_click' })}
  onkeydown={() => callback({ type: 'item_keydown' })}
/>

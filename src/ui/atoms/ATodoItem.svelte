<script lang="ts">
  const { label, id, callback } = $props();

  const onclick = () => {
    console.log('onclick')
  }
  const onmouseover = () => {
    callback({ type: 'item_hover' })
  }
  const onmouseleave = () => {
    callback({ type: 'item_leave' })
  }
  // on:mouseover={() => callback({ type: 'item_hover' })}
  // on:mouseleave={() => callback({ type: 'item_leave' })}
  // on:dragstart={() => callback({ type: 'drag_start' })}
  // on:keydown={(e) => e.key === 'Enter' && callback({ type: 'item_click' })}
</script>

<p
  {id}
  tabindex="-2"
  class="my-2 p-2 w-9/12 truncate md:text-clip inline-flex items-center gap-x-2 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:mt-0 light:bg-neutral-900 light:border-neutral-700 light:text-white"
  {onclick}
  {onmouseover}
  {onmouseleave}
>
  {label}
</p>

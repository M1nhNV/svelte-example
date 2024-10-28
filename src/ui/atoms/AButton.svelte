<script>
  const { text, callback, cssClass = '' } = $props()
</script>

<button
  on:click={callback}
  class={cssClass + ' p-1 text-magnum-700 border-magnum-700 border-2 rounded-md'}
  type="button"
>
  { text }
</button>

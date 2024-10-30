<script>
  export let text = '';
  export let callback = () => {};
  export let cssClass = '';
</script>

<button
  onclick={callback}
  class={cssClass + ' p-1 text-magnum-700 border-magnum-700 border-2 rounded-md'}
  type="button"
>
  {text}
</button>

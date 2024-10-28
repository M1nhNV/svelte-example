<script lang="ts">
  let { value, callback } = $props();

  const handleOnBlurEvent = (e: MouseEvent) => {
    callback({ type: 'blur', value: e.target.value });
  };

  const handleOnInputEvent = (e: MouseEvent) => {
    console.log('handleOnInputEvent: ', e)
    callback({ type: 'input', value: e.target.value });
  };

  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      callback({ type: 'Enter', value: e.target.value });
    }
  };
</script>

<input
  bind:value
  on:input={handleOnInputEvent}
  on:blur={handleOnBlurEvent}
  on:keydown={handleOnKeyDown}
  type="text"
  class="h-10 w-[320px] rounded-md bg-white px-3 py-2 text-magnum-700 border-magnum-700 border-2"
/>

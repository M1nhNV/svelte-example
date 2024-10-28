<script lang="ts">
  let { value, callback } = $props();

  const handleOnBlurEvent = (e: any) => {
    callback({ type: 'blur', value: e.target.value });
  };

  const handleOnInputEvent = (e: any) => {
    callback({ type: 'input', value: e.target.value });
  };

  const handleOnKeyDown = (e: any) => {
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
  class="py-2 w-full px-3 pe-11 block mr-2 border border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none light:bg-neutral-900 light:border-neutral-700 light:text-neutral-400 light:placeholder-neutral-500 light:focus:ring-neutral-600"
/>

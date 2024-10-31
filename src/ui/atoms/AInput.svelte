<script lang="ts">
  export let value = '';
  export let callback = () => {};

  export let placeholder = 'input';

  const handleOnBlurEvent = (e: Event) => {
    callback({ type: 'blur', value: e.target.value });
  };

  const handleOnInputEvent = (e: Event) => {
    callback({ type: 'input', value: e.target.value });
  };
</script>

<input
  bind:value
  on:input={handleOnInputEvent}
  on:blur={handleOnBlurEvent}
  type="text"
  {placeholder}
  class="h-10 w-[320px] rounded-md bg-white px-3 py-2 text-magnum-700 border-magnum-700 border-2"
/>

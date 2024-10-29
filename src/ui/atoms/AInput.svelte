<script lang="ts">
  import type { eventTarget } from '$lib/inteface';

  let { value, callback } = $props();

  const handleOnBlurEvent = (e: eventTarget) => {
    callback({ type: 'blur', value: e.target.value });
  };

  const handleOnInputEvent = (e: eventTarget) => {
    callback({ type: 'input', value: e.target.value });
  };
</script>

<input
  bind:value
  on:input={handleOnInputEvent}
  on:blur={handleOnBlurEvent}
  type="text"
  class="h-10 w-[320px] rounded-md bg-white px-3 py-2 text-magnum-700 border-magnum-700 border-2"
/>

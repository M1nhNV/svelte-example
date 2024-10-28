<script lang="ts">
  export let onClickButton;

  const addEvent = () => {
    onClickButton();
  };
</script>

<button
  on:click={addEvent}
  on:keydown={addEvent}
  type="button"
  class="p-1 text-magnum-700 border-magnum-700 border-2 rounded-md"
>
  Add
</button>

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
  class="p-2 text-white bg-blue-800 hover:border-blue-800 hover:bg-white hover:text-blue-800"
>
  Add
</button>

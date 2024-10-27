<script lang="ts">
  const { id, label, callback, key } = $props();
  import ATodoItem from '../atoms/ATodoItem.svelte';
  import AInput from '../atoms/AInput.svelte';

  let timeOut;
  let isEdit = $state(false);
  let isShowButtonDelete = $state(false);
  let valueInput = $state('');

  const removeItem = () => {
    return callback({ type: 'remove_item', item_id: id, key: key });
  };

  const handleCallbackItem = (action) => {
    if (action.type === 'item_click') {
      isEdit = true;
      valueInput = label;
    }

    if (action.type === 'item_hover') {
      isShowButtonDelete = true;
    }

    if (action.type === 'item_leave') {
      timeOut = setTimeout(() => {
        isShowButtonDelete = false;
      }, 200)
    }

    if (action.type === 'drag_start') {
      callback(action)
    }
  };

  const handleMouseover = () => {
    clearTimeout(timeOut)
    isShowButtonDelete = true;
  }
  const handleMouseleave = () => {
    isShowButtonDelete = false;
  }
  const onInputEvent = (data) => {
    valueInput = data.value;
  };

  const updateItem = () => {
    callback({ type: 'update_item', item_id: id, key: key, value: valueInput });
    isEdit = false;
  };

</script>

<div
  id={id}
  class="block m-3 w-20 h-20"
  on:dragstart={(e) => callback({ type: 'drag_start', el: e})}
  draggable="true"
>
  {#if isEdit}
    <div class="flex">
      <AInput value={valueInput} callback={onInputEvent} />
      <button class="w-2/12 border p-1 text-green-600" on:click={updateItem}>U</button>
    </div>
  {:else}
    <ATodoItem {label} {id} callback={handleCallbackItem} />
    {#if isShowButtonDelete}
      <button
        on:mouseover={handleMouseover}
        on:mouseleave={handleMouseleave}
        on:click={removeItem}
        class="w-2/12 border p-1 text-red-600" >X</button>
    {/if}
  {/if}
</div>

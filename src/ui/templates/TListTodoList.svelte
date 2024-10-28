<script lang="ts">
  import OTodoCol from '../organisms/OTodoCol.svelte';

  const {
    list,
    callback
  }: { list: { label: string; value: string; items: [] }; callback: (data: any) => void } =
    $props();
  let entries = Object.entries(list);

  const handleCallback = (action) => {
    if (action.type === 'drag_start') {
      drag(action);
      return;
    }

    callback(action);
  };
  const allowDrop = (e) => {
    e.preventDefault();
  };

  const drag = (data) => {
    data.el.dataTransfer.setData('id', data.el.target.id);
    data.el.dataTransfer.setData('item_key', data.key);
    data.el.dataTransfer.setData('item_value', data.value);
  };

  const drop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    const key = e.dataTransfer.getData('item_key');
    const value = e.dataTransfer.getData('item_value');
    const move_key = e.target.getAttribute('data-key');

    callback({ type: 'move_item', item_id: id, key: key, move_key: move_key, value: value });
  };
</script>

<div
  class="flex border h-screen bg-gray-300"
  on:drop={(e) => drop(e)}
  on:dragover={(e) => allowDrop(e)}
  role='presentation'
>
  {#each entries as [key, value]}
    <OTodoCol {key} title={value.label} items={value.items} callback={handleCallback} />
  {/each}
</div>

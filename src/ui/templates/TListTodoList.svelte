<script lang="ts">
  import OTodoCol from '$ui/organisms/OTodoCol.svelte';
  import type { dataDragDrop, elDragDrop, todoCategory } from '$lib/inteface.ts';

  let {
    list,
    callback
  }: {
    list: todoCategory;
    callback: (data: {
      item_id: string;
      move_key: string;
      type: string;
      value: string;
      key: string;
    }) => void;
  } = $props();
  let entries = Object.entries(list);

  const handleCallback = (action: dataDragDrop) => {
    if (action.type === 'drag_start') {
      drag(action);
      return;
    }

    callback(action);
  };
  const allowDrop = (e: DragEvent) => {
    e.preventDefault();
  };

  const drag = (data: dataDragDrop) => {
    data.el.dataTransfer.setData('id', data.el.target.id);
    data.el.dataTransfer.setData('item_key', data.key);
    data.el.dataTransfer.setData('item_value', data.value);
  };

  const drop = (e: elDragDrop) => {
    e.preventDefault();

    if (e.target.getAttribute('data-key')) {
      callback({
        type: 'move_item',
        item_id: e.dataTransfer.getData('id'),
        key: e.dataTransfer.getData('item_key'),
        move_key: e.target.getAttribute('data-key'),
        value: e.dataTransfer.getData('item_value')
      });
    }
  };
</script>

<div class="flex space-x-1 w-1/2 m-3">
  {#each entries as [key, value]}
    <span class="block w-32" data-key={key}>{value.label}: {value.items.length}</span>
  {/each}
</div>

<div
  class="flex border h-screen bg-amber-50"
  ondrop={drop}
  ondragover={allowDrop}
  role="presentation"
>
  {#each entries as [key, value]}
    <OTodoCol {key} title={value.label} items={value.items} callback={handleCallback} />
  {/each}
</div>

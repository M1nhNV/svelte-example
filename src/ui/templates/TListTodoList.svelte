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
      console.log('drag_start 2', action.el)
      drag(action.el)
      return
    }

    callback(action)
  }
  const allowDrop = (e) => {
    e.preventDefault()
  }

  const drag = (e) => {
    console.log('drag2: ', e.target.id)
    e.dataTransfer.setData("text", e.target.id);
  }

  const drop = (e) => {
   // console.log('drop1: ', e)
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    //console.log('data: ', data)
    //console.log('e.target.childNodes[2]: ', e.target.childNodes[2])
    //e.target.childNodes[2].appendChild(document.getElementById(data));
  }

</script>

<div
  class="flex border h-screen bg-gray-300"
  on:drop={(e) => drop(e)}
  on:dragover={(e) => allowDrop(e)}
>
  {#each entries as [key, value]}
    <OTodoCol {key} title={value.label} items={value.items} callback={handleCallback} />
  {/each}
</div>

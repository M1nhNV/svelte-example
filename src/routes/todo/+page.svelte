<script lang="ts">
  import TListTodoList from '../../ui/templates/TListTodoList.svelte';
  import MInputGroup from '../../ui/molecules/MInputGroup.svelte';

  let todoList = $state({
    todo: {
      label: 'To do',
      id: 0,
      items: []
    },
    in_progress: {
      label: 'In Progress',
      id: 1,
      items: []
    },
    tested: {
      label: 'Tested',
      id: 2,
      items: []
    },
    done: {
      label: 'Done',
      id: 3,
      items: []
    }
  });

  let entries = Object.entries(todoList);
  const handleCreateTodoList = (value: any) => {
    todoList['todo'].items.push({ id: String(Date.now()), label: value });
  };

  const resetTodoList = () => {
    todoList['todo'].items = [];
    todoList['in_progress'].items = [];
    todoList['tested'].items = [];
    todoList['done'].items = [];
  };

  const handleCallback = (data: any) => {
    if (data.type === 'remove_item') {
      todoList[data.key].items = todoList[data.key].items.filter(
        (item) => item.id !== data.item_id
      );
    }

    let newList = todoList[data.key].items;

    if (data.type === 'update_item') {
      for (let item of newList) {
        if (String(item.id) === String(data.item_id)) {
          item.label = data.value;
          break;
        }
      }

      todoList[data.key].items = newList;
    }

    if (data.type === 'move_item') {
      todoList[data.key].items = todoList[data.key].items.filter(
        (item) => item.id !== data.item_id
      );

      todoList[data.move_key].items.push({ id: data.item_id, label: data.value });
    }
  };
</script>

<main class="mx-auto max-w-7xl lg:px-8 min-h-screen">
  <article class="px-4 sm:px-0 mb-4">
    <h3 class="text-base font-semibold leading-7 text-gray-900">Todo page</h3>
  </article>

  <MInputGroup onValueEvent={handleCreateTodoList} />
  <hr />
  <div class="flex space-x-1 w-1/2 m-3">
    {#each entries as [key, value]}
      <span class="w-32" data-key={key}>{value.label}: {value.items.length}</span>
    {/each}
  </div>
  <hr />

  <button
    on:click={resetTodoList}
    class="border-2 mt-4 mb-4 p-2 border-orange-800 text-orange-800 hover:bg-orange-800 hover:text-white"
    type="reset">Reset todo list</button
  >

  <TListTodoList list={todoList} callback={handleCallback} />
</main>

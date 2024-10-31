<script lang="ts">
  import TListTodoList from '$ui/templates/TListTodoList.svelte';
  import MInputGroup from '$ui/molecules/MInputGroup.svelte';
  import AButton from '$ui/atoms/AButton.svelte';
  import type { dataUpdate, todolistType, todoItem } from '$lib/inteface';
  import type { PageData } from './$types';

  const baseTodo = {
    todo: {
      label: 'To do',
      id: '0',
      items: []
    },
    in_progress: {
      label: 'In Progress',
      id: '1',
      items: []
    },
    tested: {
      label: 'Tested',
      id: '2',
      items: []
    },
    done: {
      label: 'Done',
      id: '3',
      items: []
    }
  };

  let { data }: { data: PageData } = $props();

  let users = $state([]);
  let activeAccount = $state('');
  let objTodo = $state({});
  let todoList: todolistType = $state(baseTodo);

  let entries = Object.entries(todoList);

  const handleCreateTodoList = async (value: string) => {
    todoList['todo'].items.push({ id: String(Date.now()), label: value });
    await updateTodoList({ id: activeAccount, content: JSON.stringify(todoList) });
  };

  const handleCreateNewUser = async (userName: string) => {
    const response = await createUser(userName);
    if (response.statusText === 'OK') {
      const dataParse = await response.json();
      const id = dataParse.content.id;
      const user = dataParse.content.user;
      const content = dataParse.content.content;

      objTodo[id] = parseContent(content);
      users.push({ id, user });
      activeAccount = id;
    }
  };

  const resetTodoList = () => {
    todoList['todo'].items = [];
    todoList['in_progress'].items = [];
    todoList['tested'].items = [];
    todoList['done'].items = [];
  };

  const handleCallback = async (data: dataUpdate) => {
    if (data.type === 'remove_item') {
      todoList[data.key].items = todoList[data.key].items.filter(
        (item: todoItem) => item.id !== data.item_id
      );
    }

    let newList = todoList[data.key].items;

    if (data.type === 'update_item') {
      for (let item of newList) {
        if (item.id === data.item_id) {
          item.label = String(data.value);
          break;
        }
      }

      todoList[data.key].items = newList;
    }

    if (data.type === 'move_item') {
      todoList[data.key].items = todoList[data.key].items.filter(
        (item: todoItem) => item.id !== data.item_id
      );

      if (data.move_key !== undefined) {
        todoList[data.move_key].items.push({ id: data.item_id, label: String(data.value) });
      }
    }

    await updateTodoList({ id: activeAccount, content: JSON.stringify(todoList) });
  };

  const createUser = async (user: string) => {
    return await fetch('/todo', {
      method: 'POST',
      body: JSON.stringify({
        user: user,
        content: JSON.stringify(baseTodo)
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  const updateTodoList = async (params: { id: string; content: string }) => {
    return await fetch('/todo', {
      method: 'PUT',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  const handleLoadTodoOfUser = async (userId: string) => {
    console.log('handleLoadTodoOfUser');
    await updateTodoList({ id: activeAccount, content: JSON.stringify(todoList) });
    activeAccount = userId;
    todoList = objTodo[userId];
  };

  const parseContent = (content: string) => {
    try {
      return JSON.parse(content);
    } catch {
      return baseTodo;
    }
  };

  data.todoList.map((item) => {
    objTodo[item.id] = parseContent(item.content);
    users.push({ id: item.id, user: item.user });
  });

  activeAccount = users[0].id;
</script>

<main class="mx-auto max-w-7xl lg:px-8 min-h-screen">
  <article class="px-4 sm:px-0 mb-4">
    <h3 class="text-base leading-7 text-gray-900 text-2xl">Todo page</h3>
  </article>
  <article class="grid grid-cols-2">
    <MInputGroup placeholder="new item" buttonText="Add item" onValueEvent={handleCreateTodoList} />
    <MInputGroup placeholder="new user" buttonText="Add user" onValueEvent={handleCreateNewUser} />
  </article>
  <hr />
  <div class="flex items-center flex-wrap space-x-3.5 m-3">
    <p>Accounts:</p>
    {#each users as user}
      <a
        href="#"
        onclick={() => handleLoadTodoOfUser(user.id, user.user)}
        class={`border p-1 m-2 rounded inline-block ${user.id === activeAccount ? 'float font-bold text-white bg-magnum-700 ' : ''}}`}
      >
        {user.id} -
        {user.user}</a
      >
    {/each}
  </div>

  <hr />
  {#key activeAccount}
    <div class="flex space-x-1 w-1/2 m-3">
      {#each entries as [key, value]}
        <span class="block w-32" data-key={key}>{value.label}: {value.items.length}</span>
      {/each}
    </div>
  {/key}
  <hr />
  <AButton
    text="Reset todo list"
    callback={() => resetTodoList()}
    cssClass="border-2 mt-4 mb-4 p-2 border-magnum-700 text-magnum-700 hover:bg-magnum-700 hover:text-white rounded-md"
  />

  {#key activeAccount}
    <TListTodoList list={todoList} callback={handleCallback} />
  {/key}
</main>

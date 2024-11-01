<script lang="ts">
  import TListTodoList from '$ui/templates/TListTodoList.svelte';
  import MInputGroup from '$ui/molecules/MInputGroup.svelte';
  import OTodoAccount from '$ui/organisms/OTodoAccount.svelte';
  import AButton from '$ui/atoms/AButton.svelte';
  import type { dataUpdate, todolistType, todoItem } from '$lib/inteface';
  import type { PageData } from './$types';
  import { customRequest } from '$lib/request';
  import MHeaderPage from '$ui/molecules/MHeaderPage.svelte';
  import { addToast } from '$ui/molecules/MToast.svelte';

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

  const handleCreateTodoList = async (value: string) => {
    todoList['todo'].items.push({ id: String(Date.now()), label: value });
    await updateTodoList({ id: activeAccount, content: JSON.stringify(todoList) });
  };

  const handleCreateNewUser = async (userName: string) => {
    const response = await createUser(userName);

    if (response.status) {
      const id = response.content.id;

      const user = response.content.user;
      const content = response.content.content;

      objTodo[id] = parseContent(content);
      todoList = baseTodo;
      users.push({ id, user });
      activeAccount = id;

      addToast({
        data: {
          title: 'Success',
          description: `User: ${user} was created!`,
          color: 'green'
        }
      });
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
    return await customRequest('todo', 'POST', {
      user: user,
      content: JSON.stringify(baseTodo)
    });
  };

  const updateTodoList = async (params: { id: string; content: string }) => {
    return await customRequest('todo', 'PUT', params);
  };

  const handleCallBackAccount = async (params: { type: string; id: string; user: string }) => {
    switch (params.type) {
      case 'load':
        await handleLoadTodoOfUser(params.id);
        break;
      case 'delete':
        await handleDeleteUser(params.id, params.user);
        break;
      default:
        break;
    }
  };

  const handleLoadTodoOfUser = async (userId: string) => {
    await updateTodoList({ id: activeAccount, content: JSON.stringify(todoList) });
    activeAccount = userId;
    todoList = objTodo[userId];
  };
  const handleDeleteUser = async (userId: string, userName: string) => {
    const response = await customRequest('todo', 'DELETE', { id: userId });

    if (response.status) {
      const newList = [];
      let indexOfBeforeUser = 0;
      let beforeUser = {};
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
          indexOfBeforeUser = i > 0 ? i - 1 : 0;
          beforeUser = users[indexOfBeforeUser];
        } else {
          newList.push(users[i]);
        }
      }

      activeAccount = beforeUser.id;
      todoList = objTodo[activeAccount];
      users = newList;

      addToast({
        data: {
          title: 'Success',
          description: `Deleted user: ${userName}!`,
          color: 'green'
        }
      });
    }
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
  <MHeaderPage headerPage="Todo page" />
  <article class="grid grid-cols-2">
    <MInputGroup placeholder="new item" buttonText="Add item" onValueEvent={handleCreateTodoList} />
    <MInputGroup placeholder="new user" buttonText="Add user" onValueEvent={handleCreateNewUser} />
  </article>

  <hr />
  <OTodoAccount {users} {activeAccount} callback={handleCallBackAccount} />
  <AButton
    text="Reset todo list"
    callback={() => resetTodoList()}
    cssClass="border-2 mt-4 mb-4 p-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white rounded-md"
  />

  {#key activeAccount}
    <TListTodoList list={todoList} callback={handleCallback} />
  {/key}
</main>

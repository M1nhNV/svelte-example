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

	const handleCreateTodoList = (value: any) => {
		todoList['todo'].items.push({ id: Date.now(), label: value });
		console.log($state.snapshot(todoList));
	};
</script>

<main class="mx-auto max-w-7xl lg:px-8">
	<article class="px-4 sm:px-0">
		<h3 class="text-base font-semibold leading-7 text-gray-900">Todo page</h3>
	</article>
	<MInputGroup onValueEvent={handleCreateTodoList} />
	<hr />
	<TListTodoList list={todoList} />
</main>

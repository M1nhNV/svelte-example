<script lang="ts">
	const { id, label, callback, key } = $props();
	import ATodoItem from '../atoms/ATodoItem.svelte';
	import AInput from '../atoms/AInput.svelte';

	let isEdit = $state(false);
	let isShowButtonDelete = $state(false);
	let valueInput = $state('');

	const removeItem = () => {
		return callback({ type: 'remove_item', item_id: id, key: key });
	};

	const handleCallbackItem = (action) => {
		console.log('handleCallbackItem: ', action);
		if (action.type === 'item_click') {
			isEdit = true;
			valueInput = label;
		}

		if (action.type === 'item_hover') {
			isShowButtonDelete = true;
		}

		if (action.type === 'item_leave') {
			isShowButtonDelete = false;
		}
	};

	const onInputEvent = (data) => {
		valueInput = data.value;
	};

	const updateItem = () => {
		callback({ type: 'update_item', item_id: id, key: key, value: valueInput });
		isEdit = false;
	};
</script>

<div class="block m-3">
	{#if isEdit}
		<div class="flex">
			<AInput value={valueInput} callback={onInputEvent} />
			<button class="w-2/12 border p-1 text-green-600" on:click={updateItem}>U</button>
		</div>
	{:else}
		<ATodoItem {label} callback={handleCallbackItem} />
		{#if isShowButtonDelete}
			<button class="w-2/12 border p-1 text-red-600" on:click={removeItem}>X</button>
		{/if}
	{/if}
</div>

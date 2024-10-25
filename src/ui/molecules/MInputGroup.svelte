<script lang="ts">
	import AInput from '../atoms/AInput.svelte';
	import AButton from '../atoms/AButton.svelte';

	let valueInput = $state('');
	let { onValueEvent } = $props();

	const onClickButton = () => {
		if (valueInput !== '') {
			onValueEvent(valueInput);
			valueInput = '';
		}
	};

	const onInputEvent = (data: { type: string; value: string }) => {
		if (data.type === 'input') {
			valueInput = data.value;
		}

		if (data.type === 'Enter' && data.value !== '') {
			onValueEvent(data.value);
			valueInput = '';
		}
	};
</script>

<div class="p-1 border mb-3 mt-2">
	<div class="flex shadow-sm border">
		<AInput value={valueInput} callback={onInputEvent} />
		<AButton {onClickButton} />
	</div>
</div>

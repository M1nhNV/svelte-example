<script>
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

	const onInputEvent = (value) => {
		valueInput = value;
	};
</script>

<div class="p-1 m-1">
	<div class="flex rounded-lg shadow-sm">
		<AInput value={valueInput} callback={onInputEvent} />
		<AButton {onClickButton} />
	</div>
</div>

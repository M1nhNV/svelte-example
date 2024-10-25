<script lang="ts">
	export let onClickButton;

	const addEvent = () => {
		onClickButton();
	};
</script>

<button type="button" class="border-2 p-2 text-green-600" on:click={addEvent} on:keydown={addEvent}>
	Add
</button>

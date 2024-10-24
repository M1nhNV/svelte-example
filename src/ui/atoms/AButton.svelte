<script lang="ts">
	export let onClickButton;

	const addEvent = () => {
		onClickButton();
	};
</script>

<button class="border-2 p-2" on:click={addEvent}> Add </button>

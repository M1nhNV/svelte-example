<script lang="ts">
  import AInput from '../atoms/AInput.svelte';
  import AButton from '../atoms/AButton.svelte';

  let valueInput = $state('');
  let { onValueEvent, placeholder, buttonText } = $props();

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

<div class="p-1 mb-3 mt-2">
  <div class="flex space-x-1" data-testid="input-group">
    <AInput {placeholder} value={valueInput} callback={onInputEvent} />
    <AButton text={buttonText} callback={onClickButton}></AButton>
  </div>
</div>

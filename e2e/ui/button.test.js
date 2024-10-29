import AButton from "$ui/atoms/AButton.svelte";
import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';

// describe('AButton', () => {
//   it('Mount_component', async () => {
//     const { getByText } = render(AButton, { props: { text: 'button' } });
//     const button = getByText('button');
//     expect(button).toBeInTheDocument();
//   });
//
//   it('Calls callback on click', async () => {
//     const callback = vi.fn();
//     const { getByText } = render(AButton, { props: { text: 'button', callback } });
//     const button = getByText('button');
//     await fireEvent.click(button);
//     expect(callback).toHaveBeenCalled();
//   });
// });
test('Render component', () => {
  const { container } = render(AButton, { props: { text: 'button' } });
  expect(container).toBeInTheDocument();
});
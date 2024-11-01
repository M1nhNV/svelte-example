<script lang="ts" context="module">
  import { createDialog, melt } from '@melt-ui/svelte';
  import { fade } from 'svelte/transition';

  const {
    elements: { overlay, content, title, close, portalled },
    states: { open }
  } = createDialog({
    forceVisible: true
  });

  let cancel = () => {
    open.set(false);
  };

  let ok = () => {
    open.set(false);
  };
</script>

{#if $open}
  <div class="" use:melt={$portalled}>
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-black/50"
      transition:fade={{ duration: 150 }}
    />
    <div
      class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw]
            max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white
            p-6 shadow-lg"
      transition:fade={{
        duration: 150,
        y: 8,
        start: 0.96
      }}
      use:melt={$content}
    >
      <h2 use:melt={$title} class="m-0 text-lg font-medium text-black">Are you sure?</h2>
      <div class="mt-6 flex justify-end gap-4">
        <button
          onclick={() => cancel()}
          class="inline-flex h-8 items-center justify-center rounded-sm
                    bg-zinc-100 px-4 font-medium leading-none text-zinc-600"
        >
          Cancel
        </button>
        <button
          onclick={() => ok()}
          class="inline-flex h-8 items-center justify-center rounded-sm
                    bg-magnum-100 px-4 font-medium leading-none text-magnum-900"
        >
          Ok
        </button>
      </div>
      <button
        use:melt={$close}
        aria-label="close"
        class="absolute right-4 top-4 inline-flex h-6 w-6 appearance-none
                items-center justify-center rounded-full p-1 text-magnum-800
                hover:bg-magnum-100 focus:shadow-magnum-400"
      >
        X
      </button>
    </div>
  </div>
{/if}

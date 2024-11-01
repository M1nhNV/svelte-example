<script lang="ts">
  let { users, callback, activeAccount } = $props();
  let accountCurrentHover = $state('');

  const handleClickUser = async (e: MouseEvent, userId: string, user: string) => {
    callback({ type: e.target.getAttribute('data-type'), id: userId, user });
  };
</script>

<div class="flex items-center flex-wrap space-x-3.5 m-3">
  <p>Accounts:</p>
  <ul>
    {#each users as user}
      <li
        data-type="load"
        onclick={(e) => handleClickUser(e, user.id, user.user)}
        onmouseover={() => (accountCurrentHover = user.id)}
        onmouseleave={() => (accountCurrentHover = '')}
        tabindex={user.id}
        class={`hover:border-magnum-700 border p-1 m-2 rounded inline-block relative cursor-pointer ${user.id === activeAccount ? 'float font-bold text-white bg-magnum-700 ' : ''}}`}
      >
        {user.id} -
        {user.user}
        {#if user.id === accountCurrentHover}
          <span
            data-type="delete"
            class="absolute bg-red-600 border border-red-600 p-1 w-8 h-8 -top-5 -right-2 content-center text-center text-white rounded cursor-pointer hover:bg-white hover:text-red-600"
            >x</span
          >
        {/if}
      </li>
    {/each}
  </ul>
</div>

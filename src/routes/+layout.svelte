<script>
	import '../app.css';
	const srcLogo = '/favicon.png';
</script>

<main>
	<header class="bg-white">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">My Company</span>
					<img class="h-8 w-auto" src={srcLogo} alt="logo" />
				</a>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<a href="/todo" class="text-sm font-semibold leading-6 text-gray-900">Todo List</a>
				<a href="/about" class="text-sm font-semibold leading-6 text-gray-900">About me</a>
			</div>
		</nav>
	</header>
	<slot />
</main>

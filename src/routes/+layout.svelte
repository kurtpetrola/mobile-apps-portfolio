<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
    import BottomNav from '$lib/components/layout/BottomNav.svelte';
    import ScrollToTop from '$lib/components/layout/ScrollToTop.svelte';
    import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<ModeWatcher />
<div class="antialiased min-h-screen flex flex-col">
    <main class="flex-1">
        {@render children()}
    </main>
    <BottomNav />
    <ScrollToTop />
</div>


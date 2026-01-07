<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '$lib/types';
    import { fade, fly } from 'svelte/transition';
    import { flip } from 'svelte/animate';

	let { projects } = $props<{ projects: Project[] }>();

	let activeCategory = $state('All');
    
	// Derived state for categories available in data
    let categories: string[] = $derived(['All', ...Array.from(new Set<string>(projects.map((p: Project) => p.category)))]);

	// Derived filtered list
	let filteredProjects = $derived(
		activeCategory === 'All' 
			? projects 
			: projects.filter((p: Project) => p.category === activeCategory)
	);
</script>

<div class="space-y-8">
    <!-- Filter Tabs -->
	<div class="flex flex-wrap justify-center gap-4">
		{#each categories as category}
			<button
				onclick={() => (activeCategory = category)}
				class="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                {activeCategory === category
					? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,255,157,0.3)]'
					: 'bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-transparent hover:border-primary/20'}"
			>
				{category}
			</button>
		{/each}
	</div>

    <!-- Gallery Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
		{#each filteredProjects as project (project.slug)}
            <div animate:flip={{ duration: 300 }} in:fly={{ y: 20, duration: 300 }} out:fade={{ duration: 200 }}>
			    <ProjectCard {project} />
            </div>
		{/each}
	</div>
</div>

<script lang="ts">
	import type { Project } from '$lib/types';
	import DeviceMockup from './DeviceMockup.svelte';
    import { onMount } from 'svelte';

	let { project } = $props<{ project: Project }>();
    
    let visible = $state(false);
    let cardElement: HTMLElement;

    onMount(() => {
        // Only enable auto-hover on touch devices (where hover is not supported)
        if (window.matchMedia('(hover: hover)').matches) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If 50% of the element is visible, trigger the effect
                if (entry.isIntersecting) {
                    visible = true;
                } else {
                    visible = false;
                }
            });
        }, {
            threshold: 0.5
        });

        if (cardElement) {
            observer.observe(cardElement);
        }

        return () => observer.disconnect();
    });
</script>

<a bind:this={cardElement} href="/projects/{project.slug}" class="group block relative rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 {visible ? 'border-primary/50 shadow-2xl shadow-primary/10' : ''}">
	<div class="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 {visible ? 'opacity-100' : ''} transition-opacity duration-500 rounded-3xl overflow-hidden"></div>
	
	<div class="px-8 pt-8 pb-8 flex flex-col items-center">
		<div class="relative w-full h-[350px] flex justify-center items-end mt-4 mb-4 group-hover:scale-105 {visible ? 'scale-105' : ''} transition-all duration-500">
			<!-- Left Phone (Behind) -->
			<div class="absolute inset-x-0 mx-auto bottom-0 z-0 w-[300px] origin-bottom-right transition-all duration-500 -translate-x-36 scale-[0.55] brightness-90 group-hover:-translate-x-40 group-hover:-rotate-6 group-hover:brightness-100 {visible ? '-translate-x-40 -rotate-6 brightness-100' : ''}">
				<DeviceMockup src={project.images?.[1] || project.heroImage} alt={project.title} class="border-4 rounded-[2.5rem]" type={project.deviceType || 'iphone'} />
			</div>

			<!-- Right Phone (Behind) -->
			<div class="absolute inset-x-0 mx-auto bottom-0 z-0 w-[300px] origin-bottom-left transition-all duration-500 translate-x-36 scale-[0.55] brightness-90 group-hover:translate-x-40 group-hover:rotate-6 group-hover:brightness-100 {visible ? 'translate-x-40 rotate-6 brightness-100' : ''}">
				<DeviceMockup src={project.images?.[2] || project.heroImage} alt={project.title} class="border-4 rounded-[2.5rem]" type={project.deviceType || 'iphone'} />
			</div>

			<!-- Center Phone (Front) -->
			<div class="relative z-10 bottom-0 origin-bottom transition-all duration-500 scale-[0.55] shadow-2xl shadow-black/50">
				<DeviceMockup src={project.images?.[0] || project.heroImage} alt={project.title} class="border-4 rounded-[2.5rem]" type={project.deviceType || 'iphone'} />
			</div>
		</div>

		<div class="mt-8 text-center relative z-10">
			<h3 class="text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-primary {visible ? 'text-primary' : ''} transition-colors">{project.title}</h3>
			<div class="flex flex-wrap justify-center gap-2 mt-4">
				{#each project.tags as tag}
					<span class="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-transparent group-hover:border-primary/30 {visible ? 'border-primary/30' : ''} transition-colors">
						{tag}
					</span>
				{/each}
			</div>
		</div>
	</div>
</a>

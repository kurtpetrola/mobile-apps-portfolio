<script lang="ts">
	import DeviceMockup from '$lib/components/projects/DeviceMockup.svelte';
	import { fade, fly } from 'svelte/transition';
    import { ExternalLink, Download } from 'lucide-svelte';
    import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<svelte:head>
	<title>{data.project.title} | Mobile Portfolio</title>
</svelte:head>

<div class="min-h-screen pb-24" in:fade={{ duration: 300 }}>
    <!-- Header / Hero -->
	<header class="pt-32 pb-16 px-4 container mx-auto text-center space-y-8">
		<h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-4" in:fly={{ y: 20, duration: 500, delay: 100 }}>
			{data.project.title}
		</h1>
		<div class="flex flex-wrap justify-center gap-2" in:fly={{ y: 20, duration: 500, delay: 200 }}>
			{#each data.project.tags as tag}
				<span class="px-4 py-1.5 rounded-full bg-secondary text-sm font-medium border border-border/50">
					{tag}
				</span>
			{/each}
		</div>
	</header>

    <!-- Main Content Grid -->
	<div class="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
        <!-- Mockup Column -->
		<div class="flex justify-center lg:sticky lg:top-24 h-[600px] items-center" in:fly={{ x: -50, duration: 500, delay: 300 }}>
            <!-- 3-Phone Cluster (Hero Version) -->
            <div class="relative w-[300px] h-[600px] flex justify-center items-center">
                <!-- Left Phone (Behind) -->
                <div class="absolute inset-x-0 mx-auto z-0 w-[300px] transition-all duration-1000 ease-out delay-500 -translate-x-48 scale-[0.8] brightness-[0.85]">
                    <DeviceMockup
                        src={data.project.images?.[1] || data.project.heroImage}
                        alt="{data.project.title} Screenshot 2"
                        class="border-4 rounded-[2.5rem]"
                        type={data.project.deviceType || 'iphone'}
                    />
                </div>

                <!-- Right Phone (Behind) -->
                <div class="absolute inset-x-0 mx-auto z-0 w-[300px] transition-all duration-1000 ease-out delay-500 translate-x-48 scale-[0.8] brightness-[0.85]">
                    <DeviceMockup
                        src={data.project.images?.[2] || data.project.heroImage}
                        alt="{data.project.title} Screenshot 3"
                        class="border-4 rounded-[2.5rem]"
                        type={data.project.deviceType || 'iphone'}
                    />
                </div>

                <!-- Center Phone (Front) -->
                <div class="relative z-10 w-[300px] shadow-2xl shadow-black/50 rounded-[2.5rem]">
                    <DeviceMockup
                        src={data.project.images?.[0] || data.project.heroImage}
                        alt="{data.project.title} Main Screenshot"
                        class="border-4 rounded-[2.5rem]"
                        type={data.project.deviceType || 'iphone'}
                    />
                </div>
            </div>
		</div>

        <!-- Details Column -->
		<div class="space-y-12" in:fly={{ x: 50, duration: 500, delay: 300 }}>
			<div class="prose dark:prose-invert prose-lg max-w-none">
				<h3 class="text-2xl font-semibold text-primary mb-4">Overview</h3>
				<p class="text-xl leading-relaxed text-muted-foreground">
					{data.project.description}
				</p>
                
                {#if data.project.demoUrl}
                    <div class="pt-6">
                        <a href={data.project.demoUrl} target="_blank" rel="noopener noreferrer" 
                           class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-primary/25">
                            <Download size={20} />
                            <span>Download / Demo</span>
                            <ExternalLink size={16} class="opacity-70" />
                        </a>
                    </div>
                {/if}
			</div>

			{#if data.project.content}
				<div class="prose dark:prose-invert max-w-none">
					<h3 class="text-2xl font-semibold text-primary mb-4">About the Project</h3>
					<p>{data.project.content}</p>
				</div>
			{/if}

            <!-- Tech Specs -->
			<div class="bg-card border border-border p-8 rounded-3xl space-y-6">
				<h3 class="text-lg font-semibold flex items-center gap-2">
					<span class="w-2 h-8 bg-primary rounded-full"></span>
					Tech Stack
				</h3>
				<div class="grid grid-cols-2 gap-4">
                    <!-- Example dynamic specs based on tags or other fields -->
                    {#each data.project.tags as tag}
					<div class="flex flex-col">
						<span class="text-xs text-muted-foreground uppercase tracking-wider">Technology</span>
						<span class="font-medium">{tag}</span>
					</div>
                    {/each}
				</div>
			</div>
		</div>
	</div>
</div>

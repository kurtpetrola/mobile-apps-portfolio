<script lang="ts">
	interface Props {
		type?: 'iphone' | 'android';
		src: string;
		alt: string;
		isVideo?: boolean;
		class?: string;
	}

	let { type = 'iphone', src, alt, isVideo = false, class: className = '' } = $props();
</script>

<div class="relative mx-auto border-gray-800 bg-gray-800 border-14 rounded-4xl h-[600px] w-[300px] shadow-xl {className}">
	<div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
	<div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
	<div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
	<div class="rounded-4xl overflow-hidden w-[272px] h-[572px] bg-gray-900 dark:bg-gray-800">
		{#if isVideo}
			<video {src} class="w-full h-full object-cover" autoplay loop muted playsinline aria-label={alt}></video>
		{:else}
			<img {src} {alt} class="w-full h-full object-cover" />
		{/if}
	</div>
</div>

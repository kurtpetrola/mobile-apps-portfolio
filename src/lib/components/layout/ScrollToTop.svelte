<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { ArrowUp } from 'lucide-svelte';

    let scrollY = 0;
    let visible = false;

    // Show button when scrolled down more than 500px
    $: visible = scrollY > 500;

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>

<svelte:window bind:scrollY />

{#if visible}
    <button
        onclick={scrollToTop}
        in:fly={{ y: 20, duration: 300 }}
        out:fade={{ duration: 200 }}
        aria-label="Scroll to top"
        class="fixed z-40 p-3 rounded-full shadow-lg bg-primary text-primary-foreground 
               right-4 bottom-20 md:bottom-8 hover:brightness-110 active:scale-95 transition-all"
    >
        <ArrowUp size={24} strokeWidth={2.5} />
    </button>
{/if}

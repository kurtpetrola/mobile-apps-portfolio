<script lang="ts">
	import MockupGallery from '$lib/components/projects/MockupGallery.svelte';
	import { projects } from '$lib/data/projects';
    import { onMount } from 'svelte';
    import { activeSection } from '$lib/stores';

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.id === 'home-hero') {
                         activeSection.set('home');
                    } else {
                        activeSection.set(entry.target.id);
                    }
                }
            });
        }, {
            rootMargin: '-50% 0px -50% 0px' // Trigger when element is in middle of viewport
        });

        const sections = document.querySelectorAll('section, #work, #home-hero');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    });
</script>

<svelte:head>
	<title>Kurt Petrola | Mobile Portfolio</title>
	<meta name="description" content="Showcase of premium mobile applications." />
</svelte:head>

<section class="min-h-screen pb-24 pt-16 md:pt-24 space-y-16 container mx-auto px-4">
    <!-- Hero Section -->
	<section id="home-hero" class="text-center space-y-6 max-w-2xl mx-auto min-h-[35vh] flex flex-col justify-center">
		<h1 class="text-5xl md:text-7xl font-bold tracking-tighter bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent">
			Mobile Crafted.
		</h1>
		<p class="text-xl text-muted-foreground leading-relaxed">
			A showcase of high-performance mobile experiences built with precision and passion.
		</p>
	</section>

    <!-- Gallery -->
    <div id="work" class="scroll-mt-24 mb-32">
	    <MockupGallery {projects} />
    </div>

    <!-- About Section -->
    <section id="about" class="scroll-mt-24 mb-32 max-w-2xl mx-auto text-center space-y-8">
        <h2 class="text-3xl md:text-5xl font-bold">About Me</h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
            I specialize in building high-performance, cross-platform mobile applications using 
            <span class="text-primary font-medium">Flutter</span>. 
            I leverage the power of Dart to craft pixel-perfect, natively compiled experiences that run beautifully on both Android and iOS. 
            My focus is on robust architecture, smooth animations, and delivering premium user interfaces.
        </p>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="scroll-mt-24 mb-32 max-w-2xl mx-auto text-center space-y-8">
        <h2 class="text-3xl md:text-5xl font-bold">Get In Touch</h2>
        <p class="text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
        </p>
        <a href="mailto:kurtguenpetrola@outlook.com" class="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Say Hello
        </a>
    </section>
</section>

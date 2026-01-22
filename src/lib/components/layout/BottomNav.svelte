<script lang="ts">
    import { page } from '$app/stores';
    // Using simple SVGs for icons to avoid dependency issues if lucide not fully setup
    // But we installed lucide-svelte.
    import { Home, Folder, User, Mail } from 'lucide-svelte';

    // Derived rune equivalent for page store?
    // In Svelte 5 with Kit, $page is still a store.
    // easier to use: $page.url.pathname
    
    import { activeSection } from '$lib/stores';
</script>

<nav class="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-white/10 pb-safe md:hidden">
    <div class="flex justify-around items-center h-16">
        <a 
            href="/" 
            onclick={(e) => {
                if ($page.url.pathname === '/') {
                    e.preventDefault();
                    activeSection.set('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    history.replaceState(null, '', '/');
                }
            }}
            class="flex flex-col items-center gap-1 p-2 text-xs font-medium transition-colors {$activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}"
        >
            <Home size={20} />
            <span>Home</span>
        </a>
        <a href="/#work" class="flex flex-col items-center gap-1 p-2 text-xs font-medium transition-colors {$activeSection === 'work' ? 'text-primary' : 'text-muted-foreground'}">
            <Folder size={20} />
            <span>Work</span>
        </a>
        <a href="/#about" class="flex flex-col items-center gap-1 p-2 text-xs font-medium transition-colors {$activeSection === 'about' ? 'text-primary' : 'text-muted-foreground'}">
            <User size={20} />
            <span>About</span>
        </a>
        <a href="/#contact" class="flex flex-col items-center gap-1 p-2 text-xs font-medium transition-colors {$activeSection === 'contact' ? 'text-primary' : 'text-muted-foreground'}">
            <Mail size={20} />
            <span>Contact</span>
        </a>
    </div>
</nav>

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getTagCategory(tag: string): string {
    const categories: Record<string, string> = {
        'Flutter': 'Framework',
        'SwiftUI': 'Framework',
        'React Native': 'Framework',
        'SvelteKit': 'Framework',
        'Android': 'Platform',
        'iOS': 'Platform',
        'Web': 'Platform',
        'Shopify': 'Platform',
        'Kotlin': 'Language',
        'Swift': 'Language',
        'Dart': 'Language',
        'TypeScript': 'Language',
        'JavaScript': 'Language',
        'HTML': 'Language',
        'CSS': 'Language',
        'XML': 'Language',
        'SQLite': 'Database',
        'Firebase': 'Backend',
        'Supabase': 'Backend',
        'Redux': 'Library',
        'FaceID': 'API',
        'Web3': 'Technology'
    };
    return categories[tag] || 'Technology';
}

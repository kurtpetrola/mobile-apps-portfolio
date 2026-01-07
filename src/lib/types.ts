export interface Project {
	slug: string;
	title: string;
	category: 'SwiftUI' | 'Flutter' | 'React Native' | 'Kotlin' | 'SvelteKit';
	tags: string[];
	heroImage: string;
	description: string;
	content?: string;
	images?: string[];
	deviceType?: 'iphone' | 'android';
	demoUrl?: string;
}

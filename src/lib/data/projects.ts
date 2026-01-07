import type { Project } from '$lib/types';

export const projects: Project[] = [
	/*
	{
		slug: 'crypto-wallet',
		title: 'Defi Wallet Pro',
		category: 'SwiftUI',
		tags: ['SwiftUI', 'FaceID', 'Web3'],
		heroImage: '/images/crypto-mockup.svg', // Placeholder
		description: 'A non-custodial wallet with biometric security.',
		content: 'Full case study showing the integration of Web3 libraries...'
	},
	*/
	{
		slug: 'location-based',
		title: 'Find My Dorm',
		category: 'Flutter',
		tags: ['Flutter', 'Android', 'SQLite'],
		heroImage: '/images/fmd/fmd_screenshot1.png',
        images: [
            '/images/fmd/fmd_screenshot1.png',
            '/images/fmd/fmd_screenshot2.png',
            '/images/fmd/fmd_screenshot3.png'
        ],
		description: 'A location-intelligent platform connecting students with safe, verified dormitory accommodations.',
		content: 'Finding reliable student housing is often a fragmented and stressful experience. Find My Dorm solves this by aggregating dormitory listings into a single, intuitive mobile interface. Built with Flutter for a seamless cross-platform experience, it features location-based filtering, detailed amenity listings, and direct communication channels, empowering students to make informed housing decisions with confidence.',
		deviceType: 'android',
        demoUrl: 'https://github.com/kurtpetrola/fmd/releases/'
	},
	{
		slug: 'academic-portal',
		title: 'Academia Classroom Explorer',
		category: 'Flutter',
		tags: ['Flutter', 'Android', 'Firebase'],
		heroImage: '/images/ace/ace_screenshot1.png',
        images: [
            '/images/ace/ace_screenshot1.png',
            '/images/ace/ace_screenshot2.png',
            '/images/ace/ace_screenshot3.png'
        ],
		description: 'A streamlined academic management tool helping students track classes, grades, and school announcements.',
		content: 'Managing academic life involves juggling schedules, assignments, and administrative updates. Academia serves as a centralized digital companion for students, integrating class schedules, grade tracking, and real-time institutional notifications. It transforms the chaotic flow of academic information into an organized, accessible mobile dashboard.',
		deviceType: 'android',
        demoUrl: 'https://github.com/kurtpetrola/ace/releases/'
	},
	{
		slug: 'swift-reviewer',
		title: 'Swifty',
		category: 'Kotlin',
		tags: ['Kotlin', 'Android', 'XML'],
		heroImage: '/images/swifty/swifty_screenshot1.png',
        images: [
            '/images/swifty/swifty_screenshot1.png',
            '/images/swifty/swifty_screenshot2.png',
            '/images/swifty/swifty_screenshot3.png'
        ],
		description: 'An interactive mobile companion designed to accelerate learning the Swift programming language.',
		content: 'Learning a new programming language requires consistent practice and accessible references. Swifty acts as a pocket-sized documentation and review tool, breaking down complex Swift concepts into digestible modules. It provides a structured learning path for beginners and serves as a quick syntax reference for developers on the go.',
		deviceType: 'android',
        demoUrl: 'https://github.com/kurtpetrola/Swifty/releases/'
	},
    /*
    {
		slug: 'react-native-store',
		title: 'ShopStream',
		category: 'React Native',
		tags: ['React Native', 'Shopify', 'Redux'],
		heroImage: '/images/shop-mockup.svg',
		description: 'Live commerce platform for influencers.',
		content: 'Building a seamless bridge between video and checkout...'
	}
    */
];

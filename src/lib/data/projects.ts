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
		description: 'A location-intelligent platform designed to help students discover and secure safe, verified dormitory accommodations.',
		content: 'Finding reliable student housing is often a fragmented and stressful experience. Find My Dorm (FMD) bridges this gap by aggregating verified dormitory listings into a single, intuitive mobile interface. Developed with Flutter for a fluid cross-platform experience, it features powerful location-based searches, detailed amenity insights, and seamless communication with property owners, empowering students to find their next home with confidence.',
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
		description: 'A comprehensive academic companion designed to help students manage classes, track grades, and stay updated with school announcements.',
		content: 'Academia Classroom Explorer (ACE) is a centralized digital hub for modern students. It transforms the often-chaotic academic experience by integrating class schedules, real-time grade monitoring, and institutional notifications into a single, streamlined dashboard. ACE ensures students stay organized and informed, allowing them to focus more on learning and less on administrative overhead.',
		deviceType: 'android',
        demoUrl: 'https://github.com/kurtpetrola/ace/releases/'
	},
	{
		slug: 'electricity-outage-monitoring',
		title: 'Kuryente Check',
		category: 'Flutter',
		tags: ['Flutter', 'Android', 'Firebase'],
		heroImage: '/images/kuryentecheck/kyc_screenshot1.png',
        images: [
            '/images/kuryentecheck/kyc_screenshot1.png',
            '/images/kuryentecheck/kyc_screenshot2.png',
            '/images/kuryentecheck/kyc_screenshot3.png'
        ],
		description: 'A crowd-sourced mobile platform for real-time monitoring of electricity outages and voltage fluctuations.',
		content: 'Kuryente Check empowers communities by providing a transparent, real-time reporting system for power issues. Designed specifically for Mangaldan, Pangasinan, the app enables users to report outages and voltage instability immediately, creating a data-driven map of the local power grid state. By crowdsourcing this information, KuryenteCheck facilitates faster responses and keeps the public informed about utility performance.',
		deviceType: 'android',
        demoUrl: 'https://github.com/kurtpetrola/kuryente-check/releases/'
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
		description: 'A simple and interactive Swift programming language reviewer app for developers on the go.',
		content: 'Swifty is a lightweight mobile companion designed to help developers master the Swift programming language. Whether you are a beginner looking to understand basic syntax or an experienced developer needing a quick refresher, Swifty provides structured modules and interactive reviews. Built with Kotlin, it offers a fast and responsive way to study Swift concepts anytime, anywhere.',
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

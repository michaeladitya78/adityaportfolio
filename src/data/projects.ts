export interface Project {
    id: number;
    slug: string;
    title: string;
    subtitle: string;
    category: 'fullstack' | 'ai' | 'systems' | 'web';
    description: string;
    excerpt: string;
    accentColor: string;
    initials: string;
    tech: string[];
    year: number;
    featured: boolean;
    client?: string;
    timeline?: string;
    role?: string;
    challenge?: string;
    solution?: string;
    highlights?: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: 'scan-verify-swift',
        title: 'ScanVerify',
        subtitle: 'Customs Verification App',
        category: 'ai',
        description: 'A full-stack customs document verification platform built as an MVP preview for a client in the import/export sector. Leverages Firebase for real-time data, cloud storage for document handling, and Google GenKit AI for intelligent document parsing and validation — cutting manual verification time significantly.',
        excerpt: 'AI-powered customs document verification platform with GenKit AI and Firebase.',
        accentColor: '#6366f1',
        initials: 'SV',
        tech: ['React', 'TypeScript', 'Firebase', 'GenKit AI', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
        year: 2025,
        featured: true,
        client: 'Import/Export Sector Client',
        timeline: '3 weeks (MVP)',
        role: 'Full-Stack Developer',
        challenge: 'The client needed a fast, reliable way to validate customs documents at scale, replacing a slow and error-prone manual process.',
        solution: 'Built a Firebase-backed platform where documents are uploaded, parsed by Google GenKit AI, and flagged for issues in real time. Auth, Firestore, and Storage were integrated for a complete end-to-end solution.',
        highlights: [
            'Google GenKit AI integration for intelligent document parsing',
            'Firebase Auth, Firestore, and Storage fully integrated',
            'Real-time verification status updates',
            'Clean shadcn/ui interface optimized for operations teams',
        ],
        liveUrl: 'https://scan-verify-swift.vercel.app',
        githubUrl: 'https://github.com/michaeladitya78/scan-verify-swift',
    },
    {
        id: 2,
        slug: 'netmap-canvas-46',
        title: 'NetHub MVP',
        subtitle: 'Network Infrastructure Platform',
        category: 'fullstack',
        description: 'A professional network infrastructure discovery and management platform built as a client MVP for an IT operations team. Features real-time 3D network topology visualization using Three.js, automated device discovery, IP/VLAN management, and a full dashboard with live health metrics and REST API documentation.',
        excerpt: 'Interactive 3D network topology management platform with Three.js visualization.',
        accentColor: '#06b6d4',
        initials: 'NH',
        tech: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Vite', 'shadcn/ui', 'Tailwind CSS'],
        year: 2025,
        featured: true,
        client: 'IT Operations Team',
        timeline: '4 weeks (MVP)',
        role: 'Full-Stack Developer',
        challenge: 'Network operations teams lacked a visual, real-time tool to understand their infrastructure topology, making troubleshooting and capacity planning slow and manual.',
        solution: 'Created an interactive 3D network graph with Three.js, backed by localStorage for zero-backend MVP speed. Includes automated device scanning simulation, CRUD inventory, subnet/VLAN tracking, and a live analytics dashboard.',
        highlights: [
            '3D interactive network topology built with Three.js + React Three Fiber',
            'Automated device discovery engine with auto-detection',
            'Full IP management with subnet and VLAN tracking',
            'Real-time health metrics dashboard',
            'REST API documentation with mock endpoints',
        ],
        liveUrl: 'https://netmap-canvas-46.vercel.app',
        githubUrl: 'https://github.com/michaeladitya78/netmap-canvas-46',
    },
    {
        id: 3,
        slug: 'spares-copilot-ai',
        title: 'Spares Copilot AI',
        subtitle: 'AI-Powered Auto Parts Assistant',
        category: 'ai',
        description: 'An intelligent auto parts recommendation and lookup assistant built as an MVP for a client in the automotive aftermarket industry. Designed to help mechanics and service advisors quickly identify compatible spare parts, reducing downtime and lookup friction through an AI-driven conversational interface.',
        excerpt: 'AI assistant for automotive spare parts lookup and compatibility recommendations.',
        accentColor: '#f59e0b',
        initials: 'SC',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI/ML Integration'],
        year: 2025,
        featured: false,
        client: 'Automotive Aftermarket Client',
        timeline: '3 weeks (MVP)',
        role: 'Full-Stack Developer & AI Integrator',
        challenge: 'Mechanics spent excessive time searching compatibility charts and supplier catalogs — a process ripe for AI-driven automation.',
        solution: 'Built a copilot-style interface where users describe their vehicle and issue, and the AI suggests compatible parts with supplier context, cutting lookup time dramatically.',
        highlights: [
            'AI-driven parts recommendation engine',
            'Conversational copilot interface',
            'Fast Vite + TypeScript architecture for snappy UX',
            'Designed for mechanics and service advisors',
        ],
        liveUrl: 'https://spares-copilot-ai.vercel.app',
        githubUrl: 'https://github.com/michaeladitya78/spares-copilot-ai',
    },
    {
        id: 4,
        slug: 'bihar-heirloom-elegance',
        title: 'Bihar Heirloom Elegance',
        subtitle: 'Heritage E-Commerce Platform',
        category: 'web',
        description: 'A heritage e-commerce platform built as a client MVP to showcase and sell traditional Bihar crafts and heirloom products to a global audience. Focused on cultural storytelling, premium UI, and a smooth shopping experience — designed to elevate the perceived value of artisan goods.',
        excerpt: 'Premium heritage e-commerce platform celebrating traditional Bihar crafts.',
        accentColor: '#ec4899',
        initials: 'BH',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
        year: 2025,
        featured: false,
        client: 'Bihar Artisan Brand',
        timeline: '3 weeks (MVP)',
        role: 'Full-Stack Developer & UI Designer',
        challenge: 'Traditional artisan brands struggle to translate cultural richness into compelling digital storefronts that convert global buyers.',
        solution: 'Designed a premium, storytelling-first shopping experience with elegant typography, rich product imagery sections, and a smooth purchasing flow — making every product feel like an heirloom.',
        highlights: [
            'Heritage-focused brand storytelling UI',
            'Premium product showcase layouts',
            'Smooth shopping and browsing experience',
            'Optimized for global audience reach',
        ],
        liveUrl: 'https://bihar-heirloom-elegance.vercel.app',
        githubUrl: 'https://github.com/michaeladitya78/bihar-heirloom-elegance',
    },
    {
        id: 5,
        slug: 'verlet-integration-sdl',
        title: 'Verlet Integration Visualizer',
        subtitle: 'Physics Simulation Engine',
        category: 'systems',
        description: 'A real-time physics simulator built in C++ with SDL2, implementing Verlet integration algorithms for accurate simulation of physical principles. Features interactive controls that let users manipulate objects in the simulated environment in real time — a deep dive into low-level systems programming and computational physics.',
        excerpt: 'Real-time physics simulator in C++ using Verlet integration and SDL2.',
        accentColor: '#10b981',
        initials: 'VI',
        tech: ['C++', 'SDL2', 'Physics', 'Verlet Integration', 'Systems Programming'],
        year: 2024,
        featured: false,
        client: 'Personal / Open Source',
        timeline: '2 weeks',
        role: 'Systems Developer',
        challenge: 'Accurately simulating physical systems with stable numerical integration without instability or energy drift over time.',
        solution: 'Implemented Verlet integration (known for its stability over Euler methods) in C++ with SDL2 for hardware-accelerated rendering and real-time user interaction.',
        highlights: [
            'Verlet integration for stable, accurate physics simulation',
            'Real-time interactive controls via SDL2',
            'C++ systems-level performance optimization',
            'Educational tool for visualizing physical principles',
        ],
        githubUrl: 'https://github.com/michaeladitya78/verlet-integration-sdl',
    },
    {
        id: 6,
        slug: 'reddit-discord-bot',
        title: 'Reddit × Discord Bot',
        subtitle: 'Social Media Automation',
        category: 'fullstack',
        description: 'A dynamic Discord bot built with Node.js and discord.js that fetches and displays top Reddit posts from any subreddit based on user commands. Integrates Reddit\'s public API for real-time content retrieval and delivers it directly into Discord servers with a clean command interface.',
        excerpt: 'Discord bot that fetches top Reddit posts via commands using the Reddit API.',
        accentColor: '#f97316',
        initials: 'RD',
        tech: ['Node.js', 'JavaScript', 'discord.js', 'Reddit API', 'REST APIs'],
        year: 2024,
        featured: false,
        client: 'Personal / Open Source',
        timeline: '1 week',
        role: 'Backend Developer',
        challenge: 'Discord communities wanted Reddit content surfaced in their servers without constant manual sharing.',
        solution: 'Built an intuitive bot using discord.js with commands like `!top <subreddit>` that hit the Reddit API, format the top posts, and post them as rich Discord embeds.',
        highlights: [
            'Reddit API integration for real-time post retrieval',
            'Custom command system for user interaction',
            'Discord embed formatting for clean presentation',
            'Open source and easily self-hostable',
        ],
        githubUrl: 'https://github.com/michaeladitya78/reddit_discord',
    },
];

export const categories = ['All', 'Full-Stack', 'AI', 'Systems', 'Web'] as const;

export type Category = typeof categories[number];

export const categoryMap: Record<Category, string | null> = {
    'All': null,
    'Full-Stack': 'fullstack',
    'AI': 'ai',
    'Systems': 'systems',
    'Web': 'web',
};

// Auto-derive unique tech stacks from projects
export const techStacks = Array.from(new Set(projects.flatMap((p) => p.tech))).sort();

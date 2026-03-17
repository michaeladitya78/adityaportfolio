export interface Project {
    id: number;
    slug: string;
    title: string;
    category: 'web' | 'mobile' | 'design' | 'other';
    description: string;
    excerpt: string;
    image: string;
    images: string[];
    tech: string[];
    year: number;
    featured: boolean;
    client?: string;
    timeline?: string;
    role?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        category: 'web',
        description: 'A full-featured e-commerce platform with modern UI/UX and robust backend architecture.',
        excerpt: 'Modern e-commerce solution with advanced filtering, cart management, and payment integration.',
        image: '/projects/ecommerce-hero.jpg',
        images: [
            '/projects/ecommerce-1.jpg',
            '/projects/ecommerce-2.jpg',
            '/projects/ecommerce-3.jpg',
        ],
        tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe'],
        year: 2024,
        featured: true,
        client: 'Tech Startup Inc.',
        timeline: '3 months',
        role: 'Full-Stack Developer & UI Designer',
        challenge: 'Building a scalable e-commerce platform that handles high traffic while maintaining excellent performance and user experience.',
        solution: 'Implemented server-side rendering with Next.js, optimized database queries, and created a component-based architecture for maintainability.',
        results: [
            '40% increase in conversion rate',
            'Page load time reduced to under 2 seconds',
            '99.9% uptime achieved',
            'Successfully handles 10k+ daily users'
        ],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/project',
    },
    {
        id: 2,
        slug: 'portfolio-redesign',
        title: 'Portfolio Redesign',
        category: 'design',
        description: 'Complete redesign of a creative professional\'s portfolio with focus on visual storytelling.',
        excerpt: 'Modern portfolio with smooth animations and interactive elements.',
        image: '/projects/portfolio-hero.jpg',
        images: [
            '/projects/portfolio-1.jpg',
            '/projects/portfolio-2.jpg',
        ],
        tech: ['Figma', 'React', 'Framer Motion', 'Tailwind CSS'],
        year: 2024,
        featured: true,
        timeline: '6 weeks',
        role: 'UI/UX Designer & Developer',
        challenge: 'Creating a unique visual identity that stands out while maintaining excellent usability.',
        solution: 'Designed a custom component library with distinctive animations and implemented using modern web technologies.',
        results: [
            '300% increase in portfolio views',
            'Featured on design showcase platforms',
            '85% increase in client inquiries'
        ],
        liveUrl: 'https://example-portfolio.com',
    },
    {
        id: 3,
        slug: 'task-management-app',
        title: 'Task Management App',
        category: 'web',
        description: 'Collaborative task management application with real-time updates and team features.',
        excerpt: 'Real-time task management with team collaboration features.',
        image: '/projects/taskapp-hero.jpg',
        images: [
            '/projects/taskapp-1.jpg',
            '/projects/taskapp-2.jpg',
            '/projects/taskapp-3.jpg',
        ],
        tech: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Real-time DB'],
        year: 2023,
        featured: true,
        timeline: '4 months',
        role: 'Lead Frontend Developer',
        challenge: 'Building real-time collaboration features that work seamlessly across devices.',
        solution: 'Leveraged Firebase for real-time data synchronization and implemented optimistic UI updates.',
        results: [
            '5000+ active users',
            'Average session time of 25 minutes',
            '4.8/5 rating on app stores'
        ],
        liveUrl: 'https://taskapp.example.com',
        githubUrl: 'https://github.com/example/taskapp',
    },
    {
        id: 4,
        slug: 'mobile-banking-app',
        title: 'Mobile Banking App',
        category: 'mobile',
        description: 'Secure mobile banking application with biometric authentication and modern UX.',
        excerpt: 'Secure and intuitive mobile banking experience.',
        image: '/projects/banking-hero.jpg',
        images: [
            '/projects/banking-1.jpg',
            '/projects/banking-2.jpg',
        ],
        tech: ['React Native', 'TypeScript', 'Redux', 'Node.js', 'PostgreSQL'],
        year: 2023,
        featured: false,
        client: 'FinTech Solutions',
        timeline: '6 months',
        role: 'Mobile Developer',
        challenge: 'Ensuring bank-level security while maintaining smooth user experience.',
        solution: 'Implemented biometric authentication, end-to-end encryption, and comprehensive testing.',
        results: [
            'Successfully passed security audit',
            '20,000+ downloads in first month',
            '4.7/5 user rating'
        ],
    },
    {
        id: 5,
        slug: 'ai-content-generator',
        title: 'AI Content Generator',
        category: 'web',
        description: 'AI-powered content generation tool with customizable templates and export features.',
        excerpt: 'Smart content creation with AI assistance.',
        image: '/projects/ai-tool-hero.jpg',
        images: [
            '/projects/ai-tool-1.jpg',
            '/projects/ai-tool-2.jpg',
        ],
        tech: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS', 'Prisma'],
        year: 2024,
        featured: false,
        timeline: '2 months',
        role: 'Full-Stack Developer',
        challenge: 'Creating an intuitive interface for complex AI interactions.',
        solution: 'Built a template-based system with real-time preview and iterative refinement.',
        results: [
            '1000+ pieces of content generated daily',
            '60% time savings for content creators',
            'Featured in ProductHunt top 10'
        ],
        liveUrl: 'https://ai-content.example.com',
    },
    {
        id: 6,
        slug: 'social-media-dashboard',
        title: 'Social Media Dashboard',
        category: 'web',
        description: 'Analytics dashboard for managing multiple social media accounts with advanced insights.',
        excerpt: 'Unified dashboard for social media analytics and management.',
        image: '/projects/dashboard-hero.jpg',
        images: [
            '/projects/dashboard-1.jpg',
            '/projects/dashboard-2.jpg',
        ],
        tech: ['React', 'TypeScript', 'Chart.js', 'Node.js', 'Express', 'MongoDB'],
        year: 2023,
        featured: false,
        timeline: '3 months',
        role: 'Frontend Developer',
        challenge: 'Visualizing complex data in an accessible and actionable way.',
        solution: 'Created custom chart components and implemented smart data aggregation.',
        results: [
            '500+ business users',
            '30% increase in social media engagement for clients',
            'Positive feedback on UX design'
        ],
    },
];

export const categories = ['All', 'Web', 'Mobile', 'Design', 'Other'] as const;

export const techStacks = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Figma',
    'React Native',
    'Firebase',
    'MongoDB',
    'PostgreSQL',
] as const;


// Experience data with types
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  duties: string[];
  technologies: string[];
  companyLink?: string;
  hideLearnMore?: boolean;
  impact?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp1",
    role: "Product Manager",
    company: "Singh Movers and Packers",
    location: "Blacktown, NSW, Australia",
    type: "Remote",
    period: "Aug 2025 - Dec 2025",
    duties: [
      "Led end-to-end product strategy and operations for logistics technology platform serving Australian market",
      "Managed cross-functional teams across sales, operations, and engineering to deliver product roadmap initiatives",
      "Implemented data-driven decision making processes, improving operational efficiency and customer satisfaction",
      "Spearheaded international sales operations and team management across remote distributed teams"
    ],
    technologies: ["Product Management", "Sales Operations", "International Sales", "Team Leadership", "Public Relations"],
    impact: "Successfully launched product features supporting logistics operations, coordinating across multiple time zones and stakeholder groups"
  },
  {
    id: "exp2",
    role: "Product Manager",
    company: "Mangiee",
    location: "Patna, Bihar, India",
    type: "Hybrid",
    period: "April 2025 - Aug 2025",
    duties: [
      "Owned product operations and software product management for food-tech platform",
      "Created detailed wireframes and product specifications for mobile and web applications",
      "Collaborated with engineering teams to prioritize features and manage product backlog",
      "Conducted user research and competitive analysis to inform product decisions",
      "Managed Oracle Database integration and optimization for product features"
    ],
    technologies: ["Product Operations", "Software Product Management", "Wireframing", "Oracle Database", "Agile Methodologies"],
    impact: "Delivered user-centric product features that enhanced platform usability and user engagement"
  },
  {
    id: "exp3",
    role: "Product Manager",
    company: "ZenDen",
    location: "Patna, Bihar, India",
    type: "Remote",
    period: "Feb 2024 - Nov 2024",
    duties: [
      "Drove product vision and strategy for wellness/lifestyle technology platform",
      "Led full product lifecycle from ideation to launch, including requirements gathering and feature prioritization",
      "Coordinated with design, engineering, and marketing teams to ensure successful product delivery",
      "Analyzed user feedback and metrics to iterate on product features and improve user experience",
      "Managed stakeholder communications and product roadmap presentations"
    ],
    technologies: ["Product Strategy", "Roadmap Planning", "Cross-functional Collaboration", "User Research", "Data Analytics"],
    impact: "Successfully launched multiple product iterations based on user feedback and market research"
  },
  {
    id: "exp4",
    role: "Content Creator",
    company: "Kalvium",
    location: "Bengaluru, Karnataka, India",
    type: "Remote",
    period: "May 2024 - Aug 2024",
    duties: [
      "Created SEO-optimized technical content and blog posts for ed-tech platform",
      "Utilized WordPress and Google Docs for content management and collaboration",
      "Designed engaging educational content focused on programming and technology topics",
      "Implemented SEO best practices to improve content discoverability and organic reach"
    ],
    technologies: ["SEO", "Content Creation", "WordPress", "Technical Writing", "Content Design", "Google Docs"],
    companyLink: "https://www.linkedin.com/school/kalvium/posts/?feedView=all",
    impact: "Produced high-quality educational content that increased platform engagement and organic traffic"
  },
  {
    id: "exp5",
    role: "Social Media Manager",
    company: "Memeology",
    location: "Remote",
    type: "Remote",
    period: "Sep 2022 - Dec 2023",
    duties: [
      "Developed and executed comprehensive social media strategy for digital content brand",
      "Managed content marketing campaigns and advertising initiatives across multiple platforms",
      "Produced and edited video content for social media distribution",
      "Built and maintained online community through consistent content creation and engagement"
    ],
    technologies: ["Social Media Strategy", "Content Marketing", "Video Editing", "Public Relations", "Advertising"],
    companyLink: "https://www.linkedin.com/company/memeology-india/",
    impact: "Significantly increased brand visibility and engagement through strategic content planning",
    hideLearnMore: true
  },
  {
    id: "exp6",
    role: "Content Writer",
    company: "MoreTasks",
    location: "Gurugram, Haryana, India",
    type: "Remote",
    period: "Mar 2023 - May 2023",
    duties: [
      "Created SEO-optimized web content and copywriting for B2B SaaS platform",
      "Developed content strategy aligned with marketing objectives and target audience needs",
      "Managed web content creation and optimization for improved search rankings"
    ],
    technologies: ["SEO Copywriting", "Content Strategy", "Web Content Writing", "Search Engine Optimization"],
    companyLink: "https://www.linkedin.com/company/more-tasks/posts/?feedView=all",
    impact: "Delivered high-quality content that improved website SEO performance and user engagement"
  },
  {
    id: "exp7",
    role: "Team Manager",
    company: "CDX Gaming",
    location: "Remote",
    type: "Remote",
    period: "May 2020 - Dec 2021",
    duties: [
      "Managed competitive esports team operations and strategy",
      "Coordinated team schedules, practice sessions, and tournament participation",
      "Built team culture and managed player performance"
    ],
    technologies: ["Team Management", "eSports Operations", "Leadership", "Strategic Planning"],
    hideLearnMore: true
  }
];

// College clubs and responsibilities data
export interface CollegeClub {
  id: string;
  role: string;
  organization: string;
  period: string;
  skills: string[];
  organizationLink?: string;
}

export const collegeClubs: CollegeClub[] = [
  {
    id: "club1",
    role: "Content Team",
    organization: "Training and Placement Cell, NIT Patna",
    period: "Mar 2024 - Present",
    skills: ["Data Conversion", "Web Content Writing", "Blogging"],
    organizationLink: "https://www.linkedin.com/school/nit-patna/"
  },
  {
    id: "club2",
    role: "Social Media Team",
    organization: "HackSlash",
    period: "Sep 2023 - Sep 2024",
    skills: ["Social Media Optimization (SMO)", "Social Media Writing", "Media Strategy", "Content Creation", "Social Media Outreach", "Social Media"],
    organizationLink: "https://www.linkedin.com/company/hackslash/"
  },
  {
    id: "club3",
    role: "Content and Media Team",
    organization: "Google Developer Student Clubs NIT Patna",
    period: "Sep 2023 - Sep 2024",
    skills: ["Media Production", "Content Management", "Web Content Creation", "Content Development", "Content Management Systems (CMS)"],
    organizationLink: "https://www.linkedin.com/company/gdsc-nit-patna/"
  }
];


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
}

export const experiences: Experience[] = [
  {
    id: "exp1",
    role: "Content Creator",
    company: "Kalvium",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    period: "May 2024 - Aug 2024",
    duties: [
      "Researched and wrote educational blogs for Kalvium, optimizing content with targeted keywords to ensure relevance and engagement",
      "Collaborated with the lead for content review and editing, achieving a high-quality final draft before publishing on WordPress",
      "Managed the full publication process, including uploading posts, adding media, and achieving an 85+ RankMath SEO score for each blog on WordPress"
    ],
    technologies: ["Content Creation", "SEO", "WordPress", "Keyword Research", "Blog Writing"],
    companyLink: "https://www.linkedin.com/school/kalvium/posts/?feedView=all"
  },
  {
    id: "exp2",
    role: "Content Writer",
    company: "MoreTasks Business Solutions",
    location: "Gurgaon, Haryana",
    type: "Full-time",
    period: "Mar 2023 - May 2023",
    duties: [
      "Conducted thorough research for travel destinations, ensuring comprehensive coverage of ticket details, adventures, and activities",
      "Constructed engaging content by applying SEO strategies, enhancing online visibility and ranking for optimal reach",
      "Organized a meticulous editing process, utilizing Grammarly to ensure grammatical accuracy and delivering polished, high-quality content"
    ],
    technologies: ["Content Writing", "SEO", "Research", "Grammarly", "Travel Writing"],
    companyLink: "https://www.linkedin.com/company/more-tasks/posts/?feedView=all"
  },
  {
    id: "exp3",
    role: "Social Media Manager",
    company: "Memeology",
    location: "Patna, Bihar",
    type: "Part-time",
    period: "Sep 2022 - Dec 2023",
    duties: [
      "Created and published 900+ Instagram posts for Memeology, utilizing Reels to generate over 5 million total reach",
      "Designed and customized content strategies, focusing on visual appeal and engagement to enhance brand presence",
      "Initiated and integrated innovative post formats, contributing to increased audience interaction and brand recognition"
    ],
    technologies: ["Social Media Management", "Instagram", "Content Strategy", "Visual Design", "Reels"],
    companyLink: "https://www.linkedin.com/company/memeology-india/",
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
    period: "Mar 2024 - Present · 1 yr 1 mo",
    skills: ["Data Conversion", "Web Content Writing", "Blogging"],
    organizationLink: "https://www.linkedin.com/school/nit-patna/"
  },
  {
    id: "club2",
    role: "Social Media Team",
    organization: "HackSlash",
    period: "Sep 2023 - Sep 2024 · 1 yr 1 mo",
    skills: ["Social Media Optimization (SMO)", "Social Media Writing", "Media Strategy", "Content Creation", "Social Media Outreach", "Social Media"],
    organizationLink: "https://www.linkedin.com/company/hackslash/"
  },
  {
    id: "club3",
    role: "Content and Media Team",
    organization: "Google Developer Student Clubs NIT Patna",
    period: "Sep 2023 - Sep 2024 · 1 yr 1 mo",
    skills: ["Media Production", "Content Management", "Web Content Creation", "Content Development", "Content Management Systems (CMS)"],
    organizationLink: "https://www.linkedin.com/company/gdsc-nit-patna/"
  }
];

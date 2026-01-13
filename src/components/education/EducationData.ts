
export interface Education {
  id: number;
  degree: string;
  institution: string;
  field: string;
  period: string;
  coursework?: string[];
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Dual Degree Bachelor and Masters of Technology (B.Tech + M.Tech)",
    institution: "National Institute of Technology (NIT) Patna",
    field: "Mathematics and Computing Technology",
    period: "2022 - 2027 (Expected)",
    coursework: [
      "Data Structures",
      "Design and Analysis of Algorithms",
      "Object Oriented Programming",
      "Database and Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Artificial Intelligence and Machine Learning",
      "Digital Logic and Computer Organization",
      "Differential Equations and Linear Algebra",
      "Discrete Mathematics",
      "Probability and Statistics",
      "Optimization Techniques",
      "Graph Theory and Applications",
      "Statistical Simulation and Data Analysis",
      "Cryptography"
    ]
  },
  {
    id: 2,
    degree: "Senior Secondary",
    institution: "JL College",
    field: "Mathematics and Science",
    period: "2020 - 2022"
  },
  {
    id: 3,
    degree: "Secondary",
    institution: "CBSE",
    field: "General Studies",
    period: "Completed 2020"
  }
];

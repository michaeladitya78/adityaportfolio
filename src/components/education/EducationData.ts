
export interface Education {
  id: number;
  degree: string;
  institution: string;
  field: string;
  period: string;
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: "B.Tech + M.Tech",
    institution: "National Institute of Technology, Patna",
    field: "Mathematics and Computing Technology",
    period: "2022-2027",
  },
  {
    id: 2,
    degree: "Senior Secondary",
    institution: "JL College",
    field: "Mathematics and Science",
    period: "2020-2022",
  },
  {
    id: 3,
    degree: "Secondary",
    institution: "CBSE",
    field: "General Studies",
    period: "Completed 2020",
  },
];

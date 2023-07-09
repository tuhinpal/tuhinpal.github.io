export type WorksType = Work[];

export interface Work {
  name: string;
  description: string;
  image: string;
  bgColor: string;
  categories: string[];
  isLatest: boolean;
  links: Link[];
}

export interface Link {
  title: string;
  buttonType: ButtonTypes;
  url: string;
}

export enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const works: WorksType = [
  {
    name: "Devi AI",
    description:
      "Devi monitors keywords in Facebook groups, LinkedIn, Twitter, and Reddit, and outreach using Gpt-3 close deal. Devi also create and schedule content using AI on all social media profiles.",
    image: "/images/works/devi/dash.png",
    bgColor: "#eef6ff",
    categories: [
      "Chrome Extension",
      "React",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
    ],
    isLatest: true,
    links: [
      {
        title: "Website",
        buttonType: ButtonTypes.PRIMARY,
        url: "https://ddevi.com",
      },
      {
        title: "Read more",
        buttonType: ButtonTypes.SECONDARY,
        url: "/works/devi",
      },
    ],
  },
];

export type WorksType = Work[];

export interface Work {
  name: string;
  description: string;
  image: string;
  bgColor: string;
  accentColorTW: string;
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
    accentColorTW: "pink",
    categories: [
      "Chrome Extension",
      "React",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Stripe",
      "GPT-3",
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
  {
    name: "Visadb.io",
    description:
      "Visadb.io makes immigration simple for global citizens and companies. It offers online access to verified immigration, tax and business Experts in 100+ countries.",
    image: "/images/works/visadb/home-1.png",
    bgColor: "#F8F8F8",
    accentColorTW: "blue",
    categories: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Material UI",
      "Stripe",
    ],
    isLatest: false,
    links: [
      {
        title: "Website",
        buttonType: ButtonTypes.PRIMARY,
        url: "https://visadb.io",
      },
      {
        title: "Read more",
        buttonType: ButtonTypes.SECONDARY,
        url: "/works/visadb",
      },
    ],
  },
];

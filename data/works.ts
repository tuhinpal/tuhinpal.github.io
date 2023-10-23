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
    name: "Devi AI Website Builder",
    description:
      "Get a Landing Page and Website with AI for free in 10 seconds. No Coding Required. 100 years of hosting included. Get Hosting, Domain, SEO, Images, and Videos in seconds.",
    image: "/images/works/devi-website/builder.jpg",
    bgColor: "#ffffff",
    accentColorTW: "yellow",
    categories: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "DSA",
      "Node.js",
      "Stripe",
      "GPT-3",
    ],
    isLatest: true,
    links: [
      {
        title: "Build website",
        buttonType: ButtonTypes.PRIMARY,
        url: "https://website.ddevi.com?utm_source=portfolio_tuhin&utm_medium=portfolio_tuhin&utm_campaign=portfolio_tuhin",
      },
      {
        title: "Product Tour",
        buttonType: ButtonTypes.SECONDARY,
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7110140083504107520/",
      },
    ],
  },
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
    isLatest: false,
    links: [
      {
        title: "Website",
        buttonType: ButtonTypes.PRIMARY,
        url: "https://ddevi.com",
      },
      {
        title: "About Devi",
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
      // {
      //   title: "Read more",
      //   buttonType: ButtonTypes.SECONDARY,
      //   url: "/works/visadb",
      // },
    ],
  },
];

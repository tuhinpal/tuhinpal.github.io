import { Metadata } from "next";

import Separator from "@/components/Separator";
import WorkHead from "./components/Head";
import { getData } from "./getData";
import { WorkContent } from "./components/Content";
import FooterNav from "@/components/FooterNav";
import { notFound } from "next/navigation";
import { readdirSync } from "fs";
import path from "path";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getData(params.slug);
  if (!data) {
    return {
      title: "Not found",
    };
  }

  const title = `${data.data.name} - tuhin's work`;
  const description = data.data.description;

  return {
    title,
    description,
    keywords: data.data.seoKeywords,
    openGraph: {
      type: "article",
      title,
      description,
      authors: ["Tuhin Kanti Pal", "Danish Soomro"],
      // images: [
      //   {
      //     url: `/api/og?title=${encodeURIComponent(
      //       `${data.data.name} - ${data.data.slogan}`
      //     )}`,
      //     width: 1200,
      //     height: 630,
      //     alt: title,
      //   },
      // ],
    },
    alternates: {
      canonical: `/works/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const files = readdirSync(path.join(process.cwd(), "data", "works"))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));

  return files.map((file) => ({ slug: file }));
}

export default async function Work({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await getData(slug);
  if (!data) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <WorkHead data={data?.data} />
      <Separator />
      <WorkContent data={data?.data} content={data?.content} />
      <Separator />
      <FooterNav />
    </div>
  );
}

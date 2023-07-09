import { Metadata } from "next";

import Separator from "@/components/Separator";
import WorkHead from "./components/Head";
import { getData } from "./getData";
import { WorkContent } from "./components/Content";
import FooterNav from "@/components/FooterNav";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { data } = await getData(params.slug);

    const title = `${data.name} - tuhin's work`;
    const description = data.description;

    return {
      title,
      description,
      openGraph: {
        type: "article",
        title,
        description,
        authors: ["Tuhin Kanti Pal", "Danish Soomro"],
        images: [
          {
            url: `/api/og?title=${encodeURIComponent(
              `${data.name} - ${data.slogan}`
            )}`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: (error as Error).message,
    };
  }
}

export default async function Work({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data, content } = await getData(slug);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <WorkHead data={data} />
      <Separator />
      <WorkContent data={data} content={content} />
      <Separator />
      <FooterNav />
    </div>
  );
}

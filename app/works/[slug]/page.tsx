import Separator from "@/components/Separator";
import WorkHead from "./components/Head";
import { getData } from "./getData";
import { WorkContent } from "./components/Content";
import FooterNav from "@/components/FooterNav";

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

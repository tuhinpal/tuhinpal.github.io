import path from "path";
import { existsSync, readFileSync } from "fs";
import matter, { GrayMatterFile } from "gray-matter";

export interface WorkContent extends GrayMatterFile<string> {
  data: WorkContentData;
}

export interface WorkContentData {
  name: string;
  slogan: string;
  description: string;
  website: string;
  logo: string;
  role: string;
  seoKeywords: string[];
  published: string;
  lastUpdated: string;
  tldr: string[];
}

export async function getData(slug = "") {
  const workPath = path.join(process.cwd(), "data", "works", `${slug}.md`);
  const isExists = existsSync(workPath);
  if (!isExists) throw new Error(`Work ${slug} not found`);

  const workContent = readFileSync(workPath, "utf8");
  const data = matter(workContent) as WorkContent;
  return data;
}

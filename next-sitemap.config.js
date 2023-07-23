const path = require("path");
const { readdirSync, readFileSync } = require("fs");
const matter = require("gray-matter");
const dayjs = require("dayjs");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "https://thetuhin.com",
  generateRobotsTxt: true, // (optional)
  priority: 1,
  additionalPaths: async (config) => {
    const result = [];

    const workPath = path.join(process.cwd(), "data", "works");
    const allFiles = readdirSync(workPath);

    allFiles.forEach((file) => {
      const filePath = path.join(workPath, file);
      const fileContent = readFileSync(filePath, "utf8");
      const parsed = matter(fileContent);

      result.push({
        loc: `/works/${file.replace(".md", "")}`,
        changefreq: "daily",
        lastmod: dayjs(parsed.data.lastUpdated).toDate(),
        priority: 1,
      });
    });

    return result;
  },
};

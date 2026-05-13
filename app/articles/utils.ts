import fs from "node:fs";
import path from "node:path";

export async function getArticles() {
  return Promise.all(fs.readdirSync("./content/articles")
    .filter((file) => file.endsWith(".mdx"))
    .map(async (file) => {
      const data = await import("@/content/articles/" + path.basename(file));

      return {
        slug: path.basename(file, ".mdx"),
        frontmatter: data.frontmatter,
        default: data.default,
      };
    }));
}
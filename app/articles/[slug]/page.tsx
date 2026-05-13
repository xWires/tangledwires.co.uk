import {readdirSync} from "node:fs";
import {getArticles} from "@/app/articles/utils";
import {notFound} from "next/navigation";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = (await getArticles()).find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, default: Article } = article;

  return <Article />;
}

export async function generateStaticParams() {
  return await getArticles();
}
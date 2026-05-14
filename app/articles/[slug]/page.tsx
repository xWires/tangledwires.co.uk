import {getArticles} from "@/app/articles/utils";
import {notFound} from "next/navigation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faUser} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = (await getArticles()).find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, default: Article } = article;

  return (
    <>
      <span><FontAwesomeIcon icon={faArrowLeft} /> <Link href="/articles">Back to article list</Link></span>
      <hr />
      <div className="prose prose-neutral">
        <p className="text-2xl font-bold">{frontmatter.title}</p>
        <p>{frontmatter.description}</p>
        <div>
          <span><FontAwesomeIcon icon={faUser} /> {frontmatter.author}</span>
        </div>
        <div>
          <span><FontAwesomeIcon icon={faCalendar} /> {new Date(frontmatter.date).toLocaleDateString()}</span>
        </div>
        <hr />
        <Article />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return await getArticles();
}
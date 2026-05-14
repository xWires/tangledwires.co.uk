import {PageHeader} from "@/components/PageHeader";
import {getArticles} from "@/app/articles/utils";
import Link from "next/link";
import {faCalendar, faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default async function Articles() {
  const articles = await getArticles();

  return (
    <>
      <PageHeader title="Articles" />
      {articles.map((article) => (
        <div key={article.slug}>
          <hr />
          <Link href={`/articles/${article.slug}`} className="text-2xl font-medium">{article.frontmatter.title}</Link>
          <p>{article.frontmatter.description}</p>
          <p><FontAwesomeIcon icon={faCalendar} /> {new Date(article.frontmatter.date).toLocaleDateString()} &middot; <FontAwesomeIcon icon={faUser} /> {article.frontmatter.author}</p>
        </div>
      ))}
    </>
  );
}
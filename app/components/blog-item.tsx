import Link from "next/link";

export default function BlogItem({
  id,
  title,
  body,
  publish_date
}: {
  id: string,
  title: string,
  body: string,
  publish_date: string
}
) {
  return (
    <article className="blog-card">
      <h3 className="text-center">{title}</h3>
      <h5 className="text-left gray-text">{publish_date}</h5>

      {body.length > 100 ? (
        <div>
          <p className="text-left blur blog-excerpt newline">{body}</p>
          <Link href={`/${id}`} className="gray-text">Read More...</Link>
        </div>
      ) : (
        <p className="text-left">{body}</p>
      )}
    </article>
  );
}

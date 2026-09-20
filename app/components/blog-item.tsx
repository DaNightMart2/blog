import { CSSProperties } from "react";
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
  const squareStyle: CSSProperties = {
    width: '300px',
    height: '400px',
    backgroundColor: '#393b3d',
    borderRadius: '20px',
    marginTop: '10px',
    marginLeft: '150px'
  };

  return (
    <div style={squareStyle} className="blog-fullscreen">
      <h3 className="text-center">{title}</h3>
      <h5 className="text-left gray-text">{publish_date}</h5>

      {body.length > 100 ? (
        <div>
          <p className="text-left blur blog-excerpt blog-body">{body}</p>
          <Link href={`/${id}`} className="gray-text">Read More...</Link>
        </div>
      ) : (
        <p className="text-left">{body}</p>
      )}
    </div>
  );
}

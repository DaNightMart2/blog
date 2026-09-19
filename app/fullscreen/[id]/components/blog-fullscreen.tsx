import type { CSSProperties } from "react"

export default function BlogFullscreen(
  { title, body, publish_date }: { title: string, body: string, publish_date: string }
) {
  const squareStyle: CSSProperties = {
    width: "700px",
    height: "fit-content",
    minHeight: "700px",
    backgroundColor: "#393b3d",
    borderRadius: "20px",
    margin: "10px auto 0"
  };

  return (
    <div style={squareStyle}>
      <h3 className="text-center fullscren-title">{title}</h3>
      <h5 className='text-left gray-text'>{publish_date}</h5>
      <p className="text-left blog-body">{body}</p>
    </div>
  );
}

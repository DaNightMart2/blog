import type { CSSProperties } from "react"

export default function BlogFullscreen({
  title,
  body,
  publish_date,
  sources
}: {
  title: string,
  body: string,
  publish_date: string,
  sources: string[][]
}
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
      <p className="text-left newline">{body}</p>

      {sources[0][0] !== "" ? (
        <div>
          <h2 className="text-left newline">- Bibliography -</h2>
          {Object.values(sources).map((source, key) => (
            <a key={key} className="text-left newline link" href={source[1]} target="_blank">{source[0]}</a>
          ))}
        </div>
      ): (
        <div>
          <h2 className="text-left newline">- Bibliography -</h2>
          <p className="text-left newline">No sources provided.</p>
        </div>
      )}
    </div>
  );
}

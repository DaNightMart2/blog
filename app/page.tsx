import BlogItem from "./components/blog-item";
import logs from "../public/data/logs.json";

export default function Home() {
  return (
    <div>
      <div>
        <h1>
          <a className="link" href="/">Night's Blog</a>
        </h1>
        <p>Night's blog of random (and mostly useless) investigation.</p>
        <h1/>
      </div>

      <div className="blog-list">
        {Object.entries(logs).map(
          (log, key) => (
            <BlogItem key={key} id={log[0]} title={log[1].title} body={log[1].body} publish_date={log[1].publish_date}/>
          ))}
      </div>
    </div>
  );
}

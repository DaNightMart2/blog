import BlogItem from "./components/blog-item";
import AboutMe from "./components/about-me";
import logs from "../public/data/logs.json";

export default function Home() {
  return (
    <div>
      <div className="blog-header">
        <h1>
          <a className="link" href="/">Night's Blog</a>
        </h1>
        <h4>
          <a className="link" href="/about-me">About Me</a>
        </h4>
      </div>
      <hr className="hr"></hr>
      <div>
        <p>Night's blog of random (and mostly useless) investigation.</p>
        <h1/>
      </div>

      <div className="blog-list">
        {Object.entries(logs).map(
          (log, key) => (
            <BlogItem key={key} id={log[0]} title={log[1].title} body={log[1].body} publish_date={log[1].publish_date}/>
          ))}
      </div>
        <AboutMe/>
    </div>
  );
}

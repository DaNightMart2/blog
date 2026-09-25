import BlogItem from "./components/blog-item";
import Header from "./components/header";
import logs from "../public/data/logs.json";

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="blog-list">
        {Object.entries(logs).map(
          (log, key) => (
            <BlogItem key={key} id={log[0]} title={log[1].title} body={log[1].body} publish_date={log[1].publish_date}/>
          ))}
      </div>
    </div>
  );
}

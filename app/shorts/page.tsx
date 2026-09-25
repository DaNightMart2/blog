import ShortItem from "./components/short-item";
import Header from "../components/header";
import shorts from "../../public/data/shorts.json";

export default function Home() {
  return (
    <div>
      <Header/>
      <h1 className="text-left">Short Logs</h1>
      <div className="blog-list">
        {Object.entries(shorts).map(
          (short, key) => (
            <ShortItem key={key} id={short[0]} title={short[1].title} body={short[1].body} publish_date={short[1].publish_date}/>
          ))}
      </div>
    </div>
  );
}

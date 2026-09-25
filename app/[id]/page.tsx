import BlogFullscreen from "./components/blog-fullscreen";
import Header from "../components/header";
import logs from "../../public/data/logs.json";
import shorts from "../../public/data/shorts.json";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Home({ params }: PageProps) {
  const { id } = await params;
  const log = logs[id as keyof typeof logs];
  const short = shorts[id as keyof typeof shorts];

  let temporarySources: string[][] = [["", ""]];
  if (log) {
    if ("sources" in log && log.sources) {
      temporarySources = log.sources;
    }
  }

  return(
    log ? (
      <div>
        <Header/>
        <h1 className="text-left">Logs - {log.title}</h1>
        <BlogFullscreen title={log.title} body={log.body} publish_date={log.publish_date} sources={temporarySources} />
      </div>
    ) : (
      <div>
        <Header/>
        <h1 className="text-left">Shorts - {short.title}</h1>
        <BlogFullscreen title={short.title} body={short.body} publish_date={short.publish_date} sources={[["", ""]]}/>
      </div>
    )
  )
}

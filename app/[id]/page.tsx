import BlogFullscreen from "./components/blog-fullscreen";
import Header from "../components/header";
import logs from "../../public/data/logs.json";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Home({ params }: PageProps) {
  const { id } = await params;
  const log = logs[id as keyof typeof logs];

  return(
    <div>
      <Header/>

      <BlogFullscreen title={log.title} body={log.body} publish_date={log.publish_date} sources={log.sources} />
    </div>
  )
}

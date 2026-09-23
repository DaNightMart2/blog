import BlogFullscreen from "./components/blog-fullscreen";
import logs from "../../public/data/logs.json";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Home({ params }: PageProps) {
  const { id } = await params;
  const log = logs[id as keyof typeof logs];

  return(
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
      <BlogFullscreen title={log.title} body={log.body} publish_date={log.publish_date} sources={log.sources} />
    </div>
  )
}

import AboutMe from "./components/about-me";

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
      <div>
        <p>Night's blog of random (and mostly useless) investigation.</p>
        <h1/>
      </div>
      <hr className="hr"></hr>

      <AboutMe/>
    </div>
  );
}

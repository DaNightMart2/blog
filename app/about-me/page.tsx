import AboutMe from "./components/about-me";
import Header from "../components/header";

export default function AboutMePage() {
  return (
    <div>
      <Header/>
      <h1 className="text-left">About Me</h1>
      <AboutMe/>
    </div>
  );
}

import Header from "../components/header";
import ideas from "../../public/data/ideas.json";

export default function Ideas() {
  return (
    <div>
      <Header/>
      <h1 className="text-left">Ideas</h1>

      {Object.entries(ideas).map(
        (ideaBlock, key) => (
          <div key={key}>
            <h2 className="text-left">{ideaBlock[1].title}</h2>
            {Object.entries(ideaBlock[1].ideas).map(
              (idea, key) => (
                <p key={key} className="text-left">- {idea[1]}</p>
              ))}
          </div>
        ))}
    </div>
  );
}

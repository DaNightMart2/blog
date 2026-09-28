"use client";

import { useState, useEffect } from "react";
import engTexts from "../../../public/data/en/texts.json";
import esTexts from "../../../public/data/es/texts.json";

export default function BlogFullscreen({
  title,
  body,
  publish_date,
  sources
}: {
  title: string,
  body: string,
  publish_date: string,
  sources: string[][]
}) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const checkLanguage = () => {
      const savedLang = window.localStorage.getItem("language");
      if (savedLang) {
        setLanguage(savedLang);
      }
    };

    checkLanguage();
    window.addEventListener("languagechange", checkLanguage);

    return () => {
      window.removeEventListener("languagechange", checkLanguage);
    };
  }, []);

  const texts = language === "en" ? engTexts : esTexts;

  return (
    <article className="blog-fullscreen">
      <h3 className="text-center fullscren-title">{title}</h3>
      <h5 className='text-left gray-text'>{publish_date}</h5>
      <p className="text-left newline">{body}</p>

      {sources[0][0] !== "" ? (
        <div>
          <h2 className="text-left newline">{texts.bibliography}</h2>
          {Object.values(sources).map((source, key) => (
            <a key={key} className="text-left newline link" href={source[1]} target="_blank" rel="noopener noreferrer">{source[0]}</a>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-left newline">{texts.bibliography}</h2>
          <p className="text-left newline">{texts.no_sources}</p>
        </div>
      )}
    </article>
  );
}

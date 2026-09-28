"use client";

import { useState, useEffect } from "react";
import Header from "../components/header";
import engIdeas from "../../public/data/en/ideas.json";
import esIdeas from "../../public/data/es/ideas.json";
import engTexts from "../../public/data/en/texts.json";
import esTexts from "../../public/data/es/texts.json";

export default function Ideas() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Function to get the current language from localStorage
    const checkLanguage = () => {
      const savedLang = window.localStorage.getItem("language");
      if (savedLang) {
        setLanguage(savedLang);
      }
    };

    // Run on mount
    checkLanguage();

    // Listen for custom language change events
    window.addEventListener("languagechange", checkLanguage);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("languagechange", checkLanguage);
    };
  }, []);

  const ideasToDisplay = language === "en" ? engIdeas : esIdeas;
  const texts = language === "en" ? engTexts : esTexts;

  return (
    <div>
      <Header />
      <h1 className="text-left">{texts.ideas}</h1>

      {Object.entries(ideasToDisplay).map(([blockId, ideaBlock], key) => (
        <div key={key}>
          <h2 className="text-left">{ideaBlock.title}</h2>
          {Object.entries(ideaBlock.ideas).map(([ideaId, ideaText], key) => (
            <p key={key} className="text-left">
              {ideaText}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

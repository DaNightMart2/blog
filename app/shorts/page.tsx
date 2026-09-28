"use client";

import { useState, useEffect } from "react";
import ShortItem from "./components/short-item";
import Header from "../components/header";
import engShorts from "../../public/data/en/shorts.json";
import esShorts from "../../public/data/es/shorts.json";
import engTexts from "../../public/data/en/texts.json";
import esTexts from "../../public/data/es/texts.json";

export default function Shorts() {
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

  const shortsToDisplay = language === "en" ? engShorts : esShorts;
  const texts = language === "en" ? engTexts : esTexts;

  return (
    <div>
      <Header />
      <h1 className="text-left">{texts.shorts}</h1>
      <div className="blog-list">
        {Object.entries(shortsToDisplay).map(([id, short], key) => (
          <ShortItem 
            key={key} 
            id={id} 
            title={short.title} 
            body={short.body} 
            publish_date={short.publish_date} 
          />
        ))}
      </div>
    </div>
  );
}

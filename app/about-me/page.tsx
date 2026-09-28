"use client";

import { useState, useEffect } from "react";
import AboutMe from "./components/about-me";
import Header from "../components/header";
import engTexts from "../../public/data/en/texts.json";
import esTexts from "../../public/data/es/texts.json";

export default function AboutMePage() {
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
    <div>
      <Header/>
      <h1 className="text-left">{texts["about-me-text"]}</h1>
      <AboutMe/>
    </div>
  );
}

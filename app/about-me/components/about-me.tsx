"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import engTexts from "../../../public/data/en/texts.json";
import esTexts from "../../../public/data/es/texts.json";

export default function AboutMe() {
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
    <div className="text-left newline">
        <p>{texts["about-me"]}</p>
        <Link href={`/introduction`} className="link">{texts.introduction_log}</Link>
        <p className="newline">{texts["about-me-2"]}</p>
    </div>
  );
}

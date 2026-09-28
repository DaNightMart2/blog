"use client";

import { useState, useEffect } from "react";
import BlogItem from "./components/blog-item";
import Header from "./components/header";
import engLogs from "../public/data/en/logs.json";
import esLogs from "../public/data/es/logs.json";
import engTexts from "../public/data/en/texts.json";
import esTexts from "../public/data/es/texts.json";

export default function Home() {
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

  const logsToDisplay = language === "en" ? engLogs : esLogs;
  const texts = language === "en" ? engTexts : esTexts;

  return (
    <div>
      <Header />
      <h1 className="text-left">{texts.logs}</h1>
      <div className="blog-list">
        {Object.entries(logsToDisplay).map(([id, log], key) => (
          <BlogItem 
            key={key} 
            id={id} 
            title={log.title} 
            body={log.body} 
            publish_date={log.publish_date} 
          />
        ))}
      </div>
    </div>
  );
}

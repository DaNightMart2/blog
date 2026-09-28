"use client";

import { useState, useEffect, use } from "react";
import BlogFullscreen from "./components/blog-fullscreen";
import Header from "../components/header";
import engLogs from "../../public/data/en/logs.json";
import esLogs from "../../public/data/es/logs.json";
import engShorts from "../../public/data/en/shorts.json";
import esShorts from "../../public/data/es/shorts.json";
import engTexts from "../../public/data/en/texts.json";
import esTexts from "../../public/data/es/texts.json";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function BlogPage({ params }: PageProps) {
  const { id } = use(params);
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

  const logs = language === "en" ? engLogs : esLogs;
  const shorts = language === "en" ? engShorts : esShorts;
  const texts = language === "en" ? engTexts : esTexts;

  const log = logs[id as keyof typeof logs];
  const short = shorts[id as keyof typeof shorts];

  let temporarySources: string[][] = [["", ""]];
  if (log) {
    if ("sources" in log && log.sources) {
      temporarySources = log.sources;
    }
  }

  return (
    log ? (
      <div>
        <Header />
        <h1 className="text-left">{texts.logs} {log.title}</h1>
        <BlogFullscreen title={log.title} body={log.body} publish_date={log.publish_date} sources={temporarySources} />
      </div>
    ) : short ? (
      <div>
        <Header />
        <h1 className="text-left">{texts.short_logs} {short.title}</h1>
        <BlogFullscreen title={short.title} body={short.body} publish_date={short.publish_date} sources={[["", ""]]} />
      </div>
    ) : (
      <div>
        <Header />
        <h1 className="text-left">{texts.not_found}</h1>
      </div>
    )
  );
}

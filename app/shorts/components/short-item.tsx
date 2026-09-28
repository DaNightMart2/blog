"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import engTexts from "../../../public/data/en/texts.json";
import esTexts from "../../../public/data/es/texts.json";

export default function ShortItem({
  id,
  title,
  body,
  publish_date
}: {
  id: string,
  title: string,
  body: string,
  publish_date: string
}
) {
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
    <article className="blog-card blog-card-short">
      <h3 className="text-center">{title}</h3>
      <h5 className="text-left gray-text">{publish_date}</h5>

      {body.length > 50 ? (
        <div>
          <p className="text-left blur shorts-excerpt newline">{body}</p>
          <Link href={`/${id}`} className="gray-text">{texts["read-more"]}</Link>
        </div>
      ) : (
        <p className="text-left">{body}</p>
      )}
    </article>
  );
}

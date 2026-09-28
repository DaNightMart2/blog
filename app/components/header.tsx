"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./theme-toggle";
import LanguageToggle from "./language-toggle";
import engTexts from "../../public/data/en/texts.json";
import esTexts from "../../public/data/es/texts.json";

export default function Header() {
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
            <div className="blog-header">
                <h1>
                    <a className="link" href="/">{texts["night-blog"]}</a>
                </h1>
                <h4>
                    <a className="link" href="/about-me">{texts["about-me-text"]}</a>
                </h4>
                <h4>
                    <a className="link" href="/shorts">{texts.shorts}</a>
                </h4>
                <h4>
                    <a className="link" href="/ideas">{texts.ideas}</a>
                </h4>

                <div className="toggle-container">
                    <ThemeToggle/>
                    <LanguageToggle/>
                </div>
            </div>
            <p>{texts.subtitle}</p>
            <hr className="hr"></hr>
        </div>
    )
}

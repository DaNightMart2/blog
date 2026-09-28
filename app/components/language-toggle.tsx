"use client";

import { useEffect, useState } from "react";

const languageStorageKey = "language";

export default function LanguageToggle() {
  const [isSpanish, setIsSpanish] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const shouldUseSpanish = window.localStorage.getItem(languageStorageKey) === "es";
    document.documentElement.dataset.language = shouldUseSpanish ? "es" : "en";

    let readyAnimationFrame: number | undefined;
    const animationFrame = window.requestAnimationFrame(() => {
      setIsSpanish(shouldUseSpanish);
      readyAnimationFrame = window.requestAnimationFrame(() => setIsReady(true));
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (readyAnimationFrame !== undefined) {
        window.cancelAnimationFrame(readyAnimationFrame);
      }
    };
  }, []);

  function toggleLanguage() {
    const nextIsSpanish = !isSpanish;

    setIsSpanish(nextIsSpanish);

    document.documentElement.dataset.language = nextIsSpanish ? "es" : "en";
    window.localStorage.setItem(languageStorageKey, nextIsSpanish ? "es" : "en");
    window.dispatchEvent(new Event("languagechange"));
  }

  return (
    <button
      className="language-toggle"
      type="button"
      aria-label={`Switch to ${isSpanish ? "English" : "Spanish"}`}
      aria-pressed={isSpanish}
      data-ready={isReady ? "true" : undefined}
      onClick={toggleLanguage}
    >
      <span className="language-toggle__label language-toggle__label--en" aria-hidden="true">EN</span>
      <span className="language-toggle__label language-toggle__label--es" aria-hidden="true">ES</span>
      <span className="language-toggle__thumb" aria-hidden="true">{isSpanish ? "ES" : "EN"}</span>
    </button>
  );
}

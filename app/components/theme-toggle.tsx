"use client";

import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const shouldUseDarkTheme = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.dataset.theme = shouldUseDarkTheme ? "dark" : "light";
    delete document.documentElement.dataset.themeReady;

    let readyAnimationFrame: number | undefined;
    const animationFrame = window.requestAnimationFrame(() => {
      setIsDark(shouldUseDarkTheme);
      readyAnimationFrame = window.requestAnimationFrame(() => {
        setIsReady(true);
        document.documentElement.dataset.themeReady = "true";
      });
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (readyAnimationFrame !== undefined) {
        window.cancelAnimationFrame(readyAnimationFrame);
      }
    };
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;

    setIsDark(nextIsDark);
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    window.localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light");
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-pressed={isDark}
      data-ready={isReady ? "true" : undefined}
      onClick={toggleTheme}
    >
      <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">☾</span>
      <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">☀</span>
      <span className="theme-toggle__thumb" aria-hidden="true">{isDark ? "☾" : "☀"}</span>
    </button>
  );
}

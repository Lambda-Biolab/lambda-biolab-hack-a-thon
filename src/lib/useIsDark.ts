"use client";

import { useState, useEffect } from "react";

export function useIsDark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => {
      const html = document.documentElement;
      const hasDarkClass = html.classList.contains("dark");
      const hasLightClass = html.classList.contains("light");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(hasDarkClass || (!hasLightClass && systemDark));
    };

    check();

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", check);

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      mq.removeEventListener("change", check);
      observer.disconnect();
    };
  }, []);

  return isDark;
}

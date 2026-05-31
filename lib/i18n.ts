export type Lang = "tr" | "en";

export function normalizeLang(value?: string): Lang {
  return value === "en" ? "en" : "tr";
}

export function withLang(href: string, lang: Lang) {
  return `${href}?lang=${lang}`;
}

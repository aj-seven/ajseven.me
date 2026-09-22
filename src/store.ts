import { atom } from 'nanostores';

const isBrowser = typeof window !== 'undefined';

export const isTerminalMode = atom<boolean>(
  isBrowser ? localStorage.getItem('terminal-mode') === 'true' : false
);

isTerminalMode.listen((value) => {
  if (isBrowser) localStorage.setItem('terminal-mode', String(value));
});

export const uiType = atom<"landing" | "modular">(
  isBrowser ? (localStorage.getItem('ui-type') as "landing" | "modular" || "landing") : "landing"
);

uiType.listen((value) => {
  if (isBrowser) localStorage.setItem('ui-type', value);
});

export type ThemeMode = "dark" | "light";

export const themeMode = atom<ThemeMode>(
  isBrowser
    ? (localStorage.getItem("theme-mode") as ThemeMode) || "dark"
    : "dark"
);

themeMode.listen((value) => {
  if (isBrowser) {
    localStorage.setItem("theme-mode", value);
    if (value === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }
});


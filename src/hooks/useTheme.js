import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';

  const savedTheme = window.localStorage.getItem(STORAGE_KEY);
  if (savedTheme) return savedTheme;

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}

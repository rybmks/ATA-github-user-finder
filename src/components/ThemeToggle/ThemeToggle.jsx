import { useState, useEffect } from 'react';

function ThemeToggle({ className }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  const button = (
    <button
      onClick={toggleTheme}
      className={`px-3 py-2 rounded-md border border-[rgb(var(--bd))] bg-[rgb(var(--card))] ${className || ''}`}
    >
      Toggle theme
    </button>
  );

  return button;
}

export default ThemeToggle;

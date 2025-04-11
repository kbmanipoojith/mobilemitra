'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Set mounted to true once component is mounted
    setMounted(true);
    
    // Get theme from localStorage or system preference
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Update document class when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Apply CSS variables for better text visibility
    if (theme === 'light') {
      document.documentElement.style.setProperty('--text-primary', '#171717');
      document.documentElement.style.setProperty('--text-secondary', '#4b5563');
      document.documentElement.style.setProperty('--text-muted', '#6b7280');
      document.documentElement.style.setProperty('--heading-color', '#111827');
    } else {
      document.documentElement.style.setProperty('--text-primary', '#f3f4f6');
      document.documentElement.style.setProperty('--text-secondary', '#e5e7eb');
      document.documentElement.style.setProperty('--text-muted', '#9ca3af');
      document.documentElement.style.setProperty('--heading-color', '#ffffff');
      // Ensure section headings are highly visible in dark mode
      document.documentElement.style.setProperty('--section-heading-color', '#ffffff');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}
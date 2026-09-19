import { Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'sumit_portfolio_theme';
  readonly currentTheme = signal<Theme>('dark');

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    if (typeof window === 'undefined') return;

    const savedTheme = localStorage.getItem(this.storageKey) as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'dark'); // Default to dark for high-tech dev aesthetic
    }
  }

  toggleTheme(): void {
    const nextTheme: Theme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(this.storageKey, theme);
    }
  }
}

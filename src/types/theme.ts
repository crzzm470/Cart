export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

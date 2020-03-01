// @flow
import React, { useState, useContext, useEffect } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import useMedia from "use-media";
import { LightTheme, DarkTheme } from "../../../styles/themes";

/**
 *
 */
export type Context = [boolean, () => any];
export const ThemeSettingContext = React.createContext<Context>([
  false,
  () => {},
]);

const THEME_STORAGE_KEY = "andrewsosa.dev::use-dark-theme";

/**
 *
 */
export type ThemeProviderProps = {
  children: any,
};

/**
 * Wraps a StyledComponents ThemeProvider and a context provider for toggling
 * the theme.
 * @param {ThemeProviderProps} props
 */
export default function ThemeSettingProvider({ children }: ThemeProviderProps) {
  const prefersDarkTheme = useMedia("(prefers-color-scheme: dark)");
  const [useDarkTheme, setDarkTheme] = useState(() => {
    return (
      window.localStorage.getItem(THEME_STORAGE_KEY) === "true" ||
      prefersDarkTheme
    );
  });

  // Switch the theme to whichever one it is not.
  const toggleTheme = () => {
    setDarkTheme(state => {
      window.localStorage.setItem(THEME_STORAGE_KEY, !state);
      return !state;
    });
  };

  return (
    <ThemeSettingContext.Provider value={[useDarkTheme, toggleTheme]}>
      <SCThemeProvider theme={useDarkTheme ? DarkTheme : LightTheme}>
        {children}
      </SCThemeProvider>
    </ThemeSettingContext.Provider>
  );
}

/**
 * Save some imports by wrapping with a custom hook.
 */
export function useTheme() {
  return useContext(ThemeSettingContext);
}

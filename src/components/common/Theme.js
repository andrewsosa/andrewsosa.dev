// @flow
import React, { useState, useContext, useEffect } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import useMedia from "use-media";
import { LightTheme, DarkTheme } from "../../styles/themes";

/**
 *
 */
export type Context = [boolean, () => any];
export const ThemeContext = React.createContext<Context>([false, () => {}]);

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
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const prefersDarkTheme = useMedia("(prefers-color-scheme: dark)");
  const [useDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => setDarkTheme(prefersDarkTheme), [prefersDarkTheme]);

  // Switch the theme to whichever one it is not.
  const toggleTheme = () => {
    setDarkTheme(state => !state);
  };

  return (
    <ThemeContext.Provider value={[useDarkTheme, toggleTheme]}>
      <SCThemeProvider theme={useDarkTheme ? DarkTheme : LightTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
}

/**
 * Save some imports by wrapping with a custom hook.
 */
export function useTheme() {
  return useContext(ThemeContext);
}

// @flow
import React from "react";
import type { Node } from "react";
import styled from "styled-components";

import ThemeSettingProvider from "../theme/Theme";
import ThemeToggle from "../theme/ThemeToggle";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease-in-out;

  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.textPrimary};
  }
`;

export type LayoutProps = {
  children: Node,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeSettingProvider>
      <LayoutContainer className="fw3 sans-serif">
        <ThemeToggle />
        <div className="center mw9 pa4 pa6-l pt5 pt4-ns">{children}</div>
      </LayoutContainer>
    </ThemeSettingProvider>
  );
}

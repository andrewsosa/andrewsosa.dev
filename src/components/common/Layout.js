// @flow
import React from "react";
import type { Node } from "react";
import styled from "styled-components";

import ThemeProvider from "./Theme";

import "../../styles/reset.css";
import "tachyons/css/tachyons.min.css";
import "../../styles/global.css";

const LayoutContainer = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease-in-out;
`;

export type LayoutProps = {
  children: Node,
};

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <LayoutContainer className="fw3 sans-serif">{children}</LayoutContainer>
    </ThemeProvider>
  );
}

// @flow
import * as React from "react";
import styled from "styled-components";

const BoxLinkAnchor = styled.a`
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  box-shadow: inset 0 -3px 0 ${props => props.theme.colors.accent};
  padding: 0.4rem 0.3rem;
  /* border-radius: 0; */

  &:hover {
    box-shadow: inset 0 ${props => `calc(-10px - ${props.ln})`} 0 0 #007bff;
    color: white;
  }
`;

export type BoxLinkProps = {
  children: React.Node,
  [string]: any,
};

export default function BoxLink({ children, ...rest }: BoxLinkProps) {
  return (
    <BoxLinkAnchor target="_blank" {...rest}>
      {children}
    </BoxLinkAnchor>
  );
}

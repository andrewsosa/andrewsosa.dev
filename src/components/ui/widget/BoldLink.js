// @flow
import * as React from "react";
import styled from "styled-components";

const BoxLinkAnchor = styled.a`
  text-decoration: none;
  position: relative;
  display: inline-block;
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};

  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.colors.textPrimary};
    content: "";
    opacity: 0;
    transition: height 0.3s, opacity 0.3s, transform 0.3s;
    transform: translateY(-5px);

    &:hover {
      height: 2px;
      border-radius: 3px;
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

export type BoxLinkProps = {
  children: React.Node,
  [string]: any,
};

export default function BoldLink({ children, ...rest }: BoxLinkProps) {
  return <BoxLinkAnchor {...rest}>{children}</BoxLinkAnchor>;
}

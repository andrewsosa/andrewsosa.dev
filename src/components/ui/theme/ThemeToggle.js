// @flow
import * as React from "react";
import styled from "styled-components";
import { useTheme } from "./Theme";

import sun from "../../../assets/toggle/sun.svg";
import moon from "../../../assets/toggle/moon.svg";
import sunWhite from "../../../assets/toggle/sun-white.svg";
import moonWhite from "../../../assets/toggle/moon-white.svg";

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.25rem;
  right: 2rem;
`;

const InnerWrapper = styled.div`
  margin: 0.75rem;

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 45px;
    height: 25px;
    background: ${props => (props.on ? props.theme.colors.accent : "grey")};
    display: block;
    border-radius: 100px;
    position: relative;

    &:after {
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      -webkit-transform: ${props => (props.on ? "translateX(-100%)" : null)};
      transform: ${props => (props.on ? "translateX(-100%)" : null)};
      content: "";
      position: absolute;
      top: 3px;
      left: ${props => (props.on ? "calc(100% - 3px)" : "3px")};
      width: 19px;
      height: 19px;
      background: #fff;
      border-radius: 100%;
    }
  }

  #switch {
    height: 0;
    width: 0;
    visibility: hidden;
    position: absolute;
  }
`;

export default function ThemeToggle({ ...props }: { [string]: any }) {
  const [useDarkTheme, toggleTheme] = useTheme();

  return (
    <OuterWrapper {...props}>
      <img src={useDarkTheme ? sunWhite : sun} />
      <InnerWrapper
        onClick={toggleTheme}
        on={useDarkTheme ? useDarkTheme.toString() : undefined}
      >
        <input id="switch" type="checkbox" />
        <label htmlFor="switch" id="toggle" onClick={toggleTheme}>
          Toggle
        </label>
      </InnerWrapper>
      <img src={useDarkTheme ? moonWhite : moon} />
    </OuterWrapper>
  );
}

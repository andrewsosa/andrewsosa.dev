import React from "react";
import styled from "styled-components";
import useMedia from "use-media";

import Link from "../common/BoxLink";
import Emoji from "../common/Emoji";
import { useTheme } from "../common/Theme";
import Toggle from "../common/Toggle";

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.colors.textPrimary};
`;

export default function Header() {
  const [useDarkTheme, toggleTheme] = useTheme();

  return (
    <HeaderSection className="vh-100 pa4 pa6-l pt5 pt4-ns">
      <Toggle on={useDarkTheme} onClick={toggleTheme} />
      <h1 className="f4 f2-ns">
        {`Hello! `}
        <Emoji symbol="👋" label="wave" onClick={toggleTheme} />
      </h1>
      <h1 className="f4 f2-ns measure-narrow lh-copy">
        I&apos;m{" "}
        <span className="b">
          <Link ln="54px" href="https://www.linkedin.com/in/andrew-sosa">
            Andrew Sosa
          </Link>
        </span>
        , a{" "}
        <Link ln="54px" href="https://github.com/andrewsosa">
          software engineer
        </Link>{" "}
        focusing on data engineering and pipeline automation at L3Harris
        Technologies.
      </h1>
      <h1 className="f4 f2-ns measure-narrow lh-copy">
        Check out{" "}
        <Link ln="54px" href="./Andrew%20Sosa%20Resume%20201911.pdf">
          my resume
        </Link>
        .
      </h1>
      <div>
        <h1 className="f5 f3-ns">
          {"Get in touch "}
          <Emoji symbol="👉" label="pointing" onClick={toggleTheme} />
          <Link ln="24px" href="mailto:andrew@andrewsosa.dev">
            andrew@andrewsosa.dev
          </Link>
        </h1>
        {/* <div className="mt4">
          <ResumeButton
            className="f4 mt4 pa3 br2 bg-green"
            href="http://google.com"
          >
            My Resume
          </ResumeButton>
        </div> */}
      </div>
    </HeaderSection>
  );
}

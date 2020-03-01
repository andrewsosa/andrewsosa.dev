// @flow
import React from "react";
import styled from "styled-components";

import Link from "../ui/widget/BoxLink";
import Emoji from "../ui/widget/Emoji";

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.colors.textPrimary};
`;

export default function IndexHeader() {
  return (
    <HeaderSection className="mb6">
      <h1 className="f4 f2-ns measure lh-copy">
        <span>{`Hello! `}</span>
        <Emoji symbol="👋" label="wave" />
        <br />
        <br />
        <span>{`I'm `}</span>
        <span className="b">
          <Link ln="54px" href="https://www.linkedin.com/in/andrew-sosa">
            Andrew Sosa
          </Link>
        </span>
        <span>{`, a `}</span>
        <Link ln="54px" href="https://github.com/andrewsosa">
          software engineer
        </Link>
        <span>
          {` focusing on data engineering and pipeline automation at L3Harris Technologies.`}
        </span>
        <br />
        <br />
        <span>Check out </span>
        <Link ln="54px" href="./Andrew%20Sosa%20Resume%20201911.pdf">
          my resume
        </Link>
        .
      </h1>
      <h2 className="f5 f3-ns">
        {"Get in touch "}
        <Emoji symbol="👉" label="pointing" />
        <Link ln="24px" href="mailto:andrew@andrewsosa.dev">
          andrew@andrewsosa.dev
        </Link>
      </h2>
    </HeaderSection>
  );
}

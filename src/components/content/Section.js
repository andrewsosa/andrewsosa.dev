// @flow
import * as React from "react";
import styled from "styled-components";

const SectionGroup = styled.section`
  .title {
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1rem;
  }
  .content {
    & > * {
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    strong {
      font-weight: 700;
      color: ${props => props.theme.colors.textPrimary} !important;
    }

    a {
      text-decoration: none;
      position: relative;
      display: inline-block;
      font-weight: 700;
      color: ${props => props.theme.colors.textPrimary} !important;

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
      }

      &:hover ::after {
        height: 2px;
        border-radius: 3px;
        opacity: 1;
        transform: translateY(-2px);
      }
    }
  }
`;

export type SectionProps = {
  title: React.Node,
  children: React.Node,
};

export default function Section({ title, children }: SectionProps) {
  return (
    <SectionGroup className="flex-l center measure-wide mw8-l ph4 pv6">
      <div className="title ttu b mr5-l pl5-l ln-copy tracked-mega">
        {title}
      </div>
      <div className="content f5 measure-wide lh-copy ">{children}</div>
    </SectionGroup>
  );
}

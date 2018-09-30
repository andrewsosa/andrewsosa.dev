import React from 'react';
import styled from 'styled-components';
import './App.scss';
import Meta from './meta';

import { Container, Columns, Column, Title } from 'bloomer';

const Subtitle = styled.p`
  margin-bottom: 12px;
  color: #fff;
`;

const Link = styled.a`
  background-color: #000;
  color: #fff;
  padding: 0 4px;
  transition: .20s

  & strong {
    padding: 0 8px
  }

  &:hover {
    color: #000
    background-color: #fff;
    border-radius: 2px
  }
`;

export default () => (
  <Container>
    <Meta />
    <Columns isCentered isTablet>
      <Column className="is-narrow">
        <div className="copy">
          <Title>
            Hi, I'm&nbsp;<br className="is-mobile" />
            <Link><strong>Andrew Sosa</strong></Link>
            .
          </Title>
          <Subtitle>
            <Link href="https://github.com/andrewsosa">
              Software Engineer</Link>
            &nbsp;@&nbsp;
            <Link href="https://www.harris.com/">
              Harris Corporation</Link>, Melbourne FL.
          </Subtitle>
          <p className="body">
            Feel free to look at&nbsp;
            <Link>my resume</Link>, or take a peek at my&nbsp;
            <Link href="https://github.com/andrewsosa">Github</Link>,&nbsp;
            <Link href="https://stackoverflow.com/story/andrewsosa">
              Stack Overflow</Link>, or&nbsp;
            <Link href="https://sourcerer.io/andrewsosa">
              Sourcerer.io</Link> profiles.
          </p>
        </div>
      </Column>
    </Columns>
  </Container>
);

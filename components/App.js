import React from 'react';
import styled from 'styled-components';
import './App.scss';
import Meta from './meta';
import Link from './Link';

import { Container, Columns, Column, Title } from 'bloomer';

const Subtitle = styled.p`
  margin-bottom: 12px;
  color: #fff;
`;

export default () => (
  <Container>
    <Meta />
    <Columns isCentered>
      <Column className="is-narrow">
        <div className="copy">
          <Title>
            Hi, I'm&nbsp;<br className="is-mobile" />
            <Link href="https://www.linkedin.com/in/andrew-sosa" header>Andrew Sosa</Link>
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
            <Link href="/static/resume.pdf">my resume</Link>, or take a peek at my&nbsp;
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

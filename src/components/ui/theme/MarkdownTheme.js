// @flow
import React, { type Node } from "react";
import styled, { ThemeProvider as SCThemeProvider } from "styled-components";
import { LightTheme } from "../../../styles/themes";

export const MarkdownStyles = styled.article`
  input,
  textarea,
  select,
  button,
  option,
  html,
  body {
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    line-height: 29.7px;
  }
  input,
  textarea,
  select,
  button,
  option,
  html,
  body {
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    line-height: 29.7px;
  }
  th {
    font-weight: 600;
  }
  td,
  th {
    border-bottom: 1.08px solid #595959;
    padding: 14.85px 18px;
    text-align: left;
    vertical-align: top;
  }
  thead th {
    border-bottom-width: 2.16px;
    padding-bottom: 6.3px;
  }
  table {
    display: table;
    width: 100%;
  }
  @media all and (max-width: 1024px) {
    table {
      display: none;
    }
  }
  @media all and (max-width: 1024px) {
    table thead {
      display: none;
    }
  }
  table tr {
    border-bottom-width: 2.16px;
  }
  table tr th {
    border-bottom-width: 2.16px;
  }
  table tr td,
  table tr th {
    overflow: hidden;
    padding: 5.4px 3.6px;
  }
  @media all and (max-width: 1024px) {
    table tr td,
    table tr th {
      border: 0;
      display: inline-block;
    }
  }
  @media all and (max-width: 1024px) {
    table tr {
      display: inline-block;
      margin: 10.8px 0;
    }
  }
  @media all and (max-width: 1024px) {
    table {
      display: inline-block;
    }
  }
  input,
  textarea,
  select,
  button,
  option,
  html,
  body {
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    line-height: 29.7px;
  }
  fieldset {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  fieldset legend {
    margin: 18px 0;
  }
  input,
  textarea,
  select,
  button {
    border-radius: 3.6px;
    display: inline-block;
    padding: 9.9px;
  }
  input + label,
  input + input[type="checkbox"],
  input + input[type="radio"],
  textarea + label,
  textarea + input[type="checkbox"],
  textarea + input[type="radio"],
  select + label,
  select + input[type="checkbox"],
  select + input[type="radio"],
  button + label,
  button + input[type="checkbox"],
  button + input[type="radio"] {
    page-break-before: always;
  }
  input,
  select,
  label {
    margin-right: 3.6px;
  }
  textarea {
    min-height: 90px;
    min-width: 360px;
  }
  label {
    display: inline-block;
    margin-bottom: 12.6px;
  }
  label + * {
    page-break-before: always;
  }
  label > input {
    margin-bottom: 0;
  }
  input[type="submit"],
  input[type="reset"],
  button {
    background: #f2f2f2;
    color: #191919;
    cursor: pointer;
    display: inline;
    margin-bottom: 18px;
    margin-right: 7.2px;
    padding: 6.525px 23.4px;
    text-align: center;
  }
  input[type="submit"]:hover,
  input[type="reset"]:hover,
  button:hover {
    background: #d9d9d9;
    color: #000;
  }
  input[type="submit"][disabled],
  input[type="reset"][disabled],
  button[disabled] {
    background: #e6e5e5;
    color: #403f3f;
    cursor: not-allowed;
  }
  input[type="submit"],
  button[type="submit"] {
    background: #275a90;
    color: #fff;
  }
  input[type="submit"]:hover,
  button[type="submit"]:hover {
    background: #173454;
    color: #bfbfbf;
  }
  input,
  select,
  textarea {
    margin-bottom: 18px;
  }
  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="url"],
  input[type="phone"],
  input[type="tel"],
  input[type="number"],
  input[type="datetime"],
  input[type="date"],
  input[type="month"],
  input[type="week"],
  input[type="color"],
  input[type="time"],
  input[type="search"],
  input[type="range"],
  input[type="file"],
  input[type="datetime-local"],
  select,
  textarea {
    border: 1px solid #595959;
    padding: 5.4px 6.3px;
  }
  input[type="checkbox"],
  input[type="radio"] {
    flex-grow: 0;
    height: 29.7px;
    margin-left: 0;
    margin-right: 9px;
    vertical-align: middle;
  }
  input[type="checkbox"] + label,
  input[type="radio"] + label {
    page-break-before: avoid;
  }
  select[multiple] {
    min-width: 270px;
  }
  input,
  textarea,
  select,
  button,
  option,
  html,
  body {
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    line-height: 29.7px;
  }
  pre,
  code,
  kbd,
  samp,
  var,
  output {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 14.4px;
  }
  pre {
    border-left: 1.8px solid #59c072;
    line-height: 25.2px;
    overflow: auto;
    padding-left: 18px;
  }
  pre code {
    background: none;
    border: 0;
    line-height: 29.7px;
    padding: 0;
  }
  code,
  kbd {
    background: #daf1e0;
    border-radius: 3.6px;
    color: #2a6f3b;
    display: inline-block;
    line-height: 18px;
    padding: 3.6px 6.3px 2.7px;
  }
  kbd {
    background: #2a6f3b;
    color: #fff;
  }
  mark {
    background: #ffc;
    padding: 0 3.6px;
  }
  input,
  textarea,
  select,
  button,
  option,
  html,
  body {
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    line-height: 29.7px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #000;
    margin-bottom: 18px;
  }
  h1 {
    font-size: 36px;
    font-weight: 500;
    line-height: 43.2px;
    margin-top: 72px;
  }
  h2 {
    font-size: 25.2px;
    font-weight: 400;
    line-height: 34.2px;
    margin-top: 54px;
  }
  h3 {
    font-size: 21.6px;
    line-height: 27px;
    margin-top: 36px;
  }
  h4 {
    font-size: 18px;
    line-height: 23.4px;
    margin-top: 18px;
  }
  h5 {
    font-size: 14.4px;
    font-weight: bold;
    line-height: 21.6px;
    text-transform: uppercase;
  }
  h6 {
    color: #595959;
    font-size: 14.4px;
    font-weight: bold;
    line-height: 18px;
    text-transform: uppercase;
  }
  input,
  textarea,
  select,
  button,
  option,
  html,
  body {
    font-family: system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    line-height: 29.7px;
  }
  a {
    color: #275a90;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  hr {
    border-bottom: 1px solid #595959;
  }
  figcaption,
  small {
    font-size: 15.3px;
  }
  figcaption {
    color: #595959;
  }
  var,
  em,
  i {
    font-style: italic;
  }
  dt,
  strong,
  b {
    font-weight: 600;
  }
  del,
  s {
    text-decoration: line-through;
  }
  ins,
  u {
    text-decoration: underline;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
  * {
    border: 0;
    border-collapse: separate;
    border-spacing: 0;
    box-sizing: border-box;
    margin: 0;
    max-width: 100%;
    padding: 0;
    vertical-align: baseline;
  }
  html,
  body {
    width: 100%;
  }
  html {
    height: 100%;
  }
  body {
    background: #fff;
    color: #1a1919;
    padding: 36px;
  }
  p,
  ul,
  ol,
  dl,
  blockquote,
  hr,
  pre,
  table,
  form,
  fieldset,
  figure,
  address {
    margin-bottom: 29.7px;
  }
  section {
    margin-left: auto;
    margin-right: auto;
    width: 900px;
  }
  aside {
    float: right;
    width: 285px;
  }
  article,
  header,
  footer {
    padding: 43.2px;
  }
  article {
    background: #fff;
    border: 1px solid #d9d9d9;
  }
  nav {
    text-align: center;
  }
  nav ul {
    list-style: none;
    margin-left: 0;
    text-align: center;
  }
  nav ul li {
    display: inline-block;
    margin-left: 9px;
    margin-right: 9px;
    vertical-align: middle;
  }
  nav ul li:first-child {
    margin-left: 0;
  }
  nav ul li:last-child {
    margin-right: 0;
  }
  ol,
  ul {
    margin-left: 31.5px;
  }
  li dl,
  li ol,
  li ul {
    margin-bottom: 0;
  }
  dl {
    display: inline-block;
  }
  dt {
    padding: 0 18px;
  }
  dd {
    padding: 0 18px 4.5px;
  }
  dd:last-of-type {
    border-bottom: 1.08px solid #595959;
  }
  dd + dt {
    border-top: 1.08px solid #595959;
    padding-top: 9px;
  }
  blockquote {
    border-left: 2.16px solid #595959;
    padding: 4.5px 18px 4.5px 15.84px;
  }
  blockquote footer {
    color: #595959;
    font-size: 13.5px;
    margin: 0;
  }
  blockquote p {
    margin-bottom: 0;
  }
  img {
    height: auto;
    margin: 0 auto;
  }
  figure img {
    display: block;
  }
  @media (max-width: 767px) {
    body {
      padding: 18px 0;
    }
    article {
      border: 0;
      padding: 18px;
    }
    header,
    footer {
      padding: 18px;
    }
    textarea,
    input,
    select {
      min-width: 0;
    }
    fieldset {
      min-width: 0;
    }
    fieldset * {
      flex-grow: 1;
      page-break-before: auto;
    }
    section {
      width: auto;
    }
    x:-moz-any-link {
      display: table-cell;
    }
  }

  /*# sourceMappingURL=tacit-css-1.5.1.min.css.map */
`;

interface IMarkdownTheme {
  // children: Node;
}

export default function Markdown({ html, ...rest }: IMarkdownTheme) {
  return (
    <MarkdownStyles
      theme={LightTheme}
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  );
}

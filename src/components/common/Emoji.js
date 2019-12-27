// @flow
import React from "react";
import styled from "styled-components";

const EmojiSpan = styled.span`
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
`;

export type EmojiProps = {
  label: string,
  symbol: string,
};

export default function Emoji({ label, symbol, ...rest }: EmojiProps) {
  return (
    <EmojiSpan
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
      {...rest}
    >
      {symbol}
    </EmojiSpan>
  );
}

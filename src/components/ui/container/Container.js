import React from "react";
import type { Node } from "react";

export type ContainerProps = {
  children: Node,
};

export default function Container({ children }: ContainerProps) {
  return <div className="mw7 center">{children}</div>;
}

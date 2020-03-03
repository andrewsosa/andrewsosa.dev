// @flow
import React, { type Node } from "react";
import { grid } from "./ProjectGrid.module.scss";

interface IProjectGrid {
  children: Node;
}

const ProjectGrid = ({ children }: IProjectGrid) => (
  <div className={grid}>{children}</div>
);

export default ProjectGrid;

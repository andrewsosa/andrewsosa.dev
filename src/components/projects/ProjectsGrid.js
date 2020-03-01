// @flow
import React, { type Node } from "react";
import { Link } from "gatsby";
import { grid, gridCell } from "./ProjectsGrid.module.scss";

/* * */

interface IProjectGrid {
  children: Node;
}

const ProjectGrid = ({ children }: IProjectGrid) => (
  <div className={`${grid} center mw9`}>{children}</div>
);

export default ProjectGrid;

/* * */

interface IProjectCell {
  title: string;
  image: string;
  url: string;
}

export const ProjectCell = ({ title, image, url }: IProjectCell) => (
  <div className={`${gridCell} ba br2 b--light-gray`}>
    <Link to={url}>
      <img loading="lazy" src={image} title={title} />
    </Link>
  </div>
);

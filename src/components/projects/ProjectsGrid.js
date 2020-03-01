// @flow
import React, { type Node } from "react";
import { Link } from "gatsby";
import { grid, gridCell, gridPane } from "./ProjectsGrid.module.scss";

/* * */

interface IProjectGrid {
  children: Node;
}

const ProjectGrid = ({ children }: IProjectGrid) => (
  <>
    <div className={grid}>{children}</div>
  </>
);

export default ProjectGrid;

/* * */

interface IProjectCell {
  title: string;
  date: string;
  image: string;
  url: string;
}

export const ProjectCell = ({ title, date, image, url }: IProjectCell) => (
  <Link to={url} className={gridCell}>
    <img className="br2 ba b--black-10 " src={image} loading="lazy" />
    <div className="flex flex-column justify-center pa3">
      <span className="f5 black no-underline code">{title}</span>
    </div>
  </Link>
);

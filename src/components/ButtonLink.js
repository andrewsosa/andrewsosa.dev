// @flow
import React from "react";
import { tag } from "./ButtonLink.module.scss";

interface IButtonLink {
  url: string;
}

const ButtonLink = ({ url, github, ...rest }: IButtonLink) => (
  <a href={url} className={`${tag} ${github && "github"}`} {...rest} />
);

export default ButtonLink;

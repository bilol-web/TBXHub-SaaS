/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BackgroundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BackgroundIcon(props: BackgroundIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 235 491"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M1.691 23.975C0 29.202 0 35.66 0 48.576v393.237c0 12.916 0 19.374 1.691 24.601 3.419 10.563 11.667 18.845 22.188 22.277 5.205 1.698 11.638 1.698 24.502 1.698h137.655c12.865 0 19.297 0 24.502-1.698 10.521-3.432 18.77-11.714 22.188-22.277 1.691-5.227 1.691-11.685 1.691-24.601V48.576c0-12.916 0-19.374-1.691-24.6-3.418-10.564-11.667-18.846-22.188-22.278C205.333 0 198.901 0 186.036 0H48.381C35.517 0 29.084 0 23.879 1.698 13.359 5.13 5.109 13.412 1.69 23.975zm56.481-12.698v2.602l.041-.001-.041.29c0 6.867 5.544 12.433 12.383 12.433h93.306c6.839 0 12.384-5.566 12.384-12.433l-.042-.29h.041v-2.601a3.175 3.175 0 0 1 3.168-3.18l7.419-.001c11.597 0 17.396 0 22.021 1.755a27.13 27.13 0 0 1 15.754 15.817c1.747 4.644 1.747 10.466 1.747 22.11v394.833c0 11.644 0 17.467-1.747 22.11a27.13 27.13 0 0 1-15.754 15.818c-4.625 1.754-10.424 1.754-22.021 1.754H47.586c-11.598 0-17.396 0-22.021-1.754A27.13 27.13 0 0 1 9.81 464.721c-1.748-4.643-1.748-10.466-1.748-22.11V47.778c0-11.644 0-17.466 1.748-22.11A27.13 27.13 0 0 1 25.565 9.851c4.624-1.755 10.423-1.755 22.02-1.755h7.42a3.174 3.174 0 0 1 3.167 3.18z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default BackgroundIcon;
/* prettier-ignore-end */

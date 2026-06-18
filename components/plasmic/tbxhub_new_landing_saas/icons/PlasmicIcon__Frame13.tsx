/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame13Icon(props: Frame13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.333"}
        d={
          "M10.667 11.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 9.334a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M16.333 11.333h9.333m-9.333 9.334h9.333"}
      ></path>
    </svg>
  );
}

export default Frame13Icon;
/* prettier-ignore-end */

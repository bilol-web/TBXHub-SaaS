/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group17Icon(props: Group17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
        strokeWidth={"1.083"}
        d={"M6.885 3.894H8.76V2.02"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.083"}
        d={"M7.428 7.43a3.438 3.438 0 1 1 0-4.86l1.329 1.325"}
      ></path>
    </svg>
  );
}

export default Group17Icon;
/* prettier-ignore-end */

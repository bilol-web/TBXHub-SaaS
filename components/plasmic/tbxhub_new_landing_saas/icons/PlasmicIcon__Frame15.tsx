/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame15Icon(props: Frame15IconProps) {
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
        strokeWidth={"2"}
        d={"M6.333 16a9.667 9.667 0 1 1 19.333 0 9.667 9.667 0 1 1-19.333 0"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"m12 16.127 2.483 2.54L20 13.333"}
      ></path>
    </svg>
  );
}

export default Frame15Icon;
/* prettier-ignore-end */

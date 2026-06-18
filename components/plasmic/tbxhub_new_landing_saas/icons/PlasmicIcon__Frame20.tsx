/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame20Icon(props: Frame20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M13.334 14.167a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 11.666a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M20.416 14.167h11.667M20.416 25.833h11.667"}
      ></path>
    </svg>
  );
}

export default Frame20Icon;
/* prettier-ignore-end */

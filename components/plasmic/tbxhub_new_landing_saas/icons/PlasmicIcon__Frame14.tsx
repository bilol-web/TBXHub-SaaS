/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame14Icon(props: Frame14IconProps) {
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
        strokeWidth={"2.5"}
        d={"M20 25.417a5.417 5.417 0 1 0 0-10.834 5.417 5.417 0 0 0 0 10.834"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2.5"}
        d={
          "M20 32.083c-6.673 0-12.083-5.41-12.083-12.083 0-6.674 5.41-12.083 12.083-12.083 11.355 0 12.084 7.291 12.084 12.083v2.083a3.333 3.333 0 1 1-6.667 0v-7.5"
        }
      ></path>
    </svg>
  );
}

export default Frame14Icon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 326 142"}
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
        strokeWidth={"3"}
        d={
          "M1.5 109.5c10.334 15.333 35.3 42 52.5 26 21.5-20 23-37.5 40.5-38s54.5 31.5 65 11.5 21-70.5 48.5-64.5c9 2 17.749 18.504 38.5 34.5 24 18.5 62.5-63 78-77.5"
        }
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */

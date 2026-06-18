/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector22Icon(props: Vector22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M3.605.695c.736-.927 2.054-.927 2.79 0l3.151 3.973C10.581 5.972 9.732 8 8.152 8H1.848C.268 8-.58 5.972.454 4.668z"
        }
        opacity={".8"}
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */

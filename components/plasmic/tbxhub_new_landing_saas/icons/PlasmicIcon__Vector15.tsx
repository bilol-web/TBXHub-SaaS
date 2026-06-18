/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector15Icon(props: Vector15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M1.88 4.186a.4.4 0 0 1-.06-.004A2.124 2.124 0 0 1 0 2.092C0 1.053.745.175 1.77.007a.438.438 0 0 1 .142.863A1.234 1.234 0 0 0 .876 2.092c.001.612.46 1.139 1.065 1.224a.437.437 0 0 1-.06.87"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M3.543 4.074H1.935A1.943 1.943 0 0 1 0 2.134V.438a.438.438 0 0 1 .875 0v1.696c0 .586.477 1.063 1.062 1.065h1.606a.438.438 0 0 1 0 .875"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */

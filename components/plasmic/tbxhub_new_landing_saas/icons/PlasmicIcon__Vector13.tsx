/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M1.115 2.642a.4.4 0 0 1-.155-.028C.125 2.295 0 1.716 0 1.399 0 .879.297.215 1.71.004a.44.44 0 0 1 .498.367.44.44 0 0 1-.368.498c-.64.096-.965.275-.965.53 0 .08 0 .246.396.397a.437.437 0 0 1-.156.846"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */

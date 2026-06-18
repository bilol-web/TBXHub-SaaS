/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 1"}
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
          "M10.835.875H.437a.438.438 0 0 1 0-.875h10.398a.438.438 0 0 1 0 .875"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */

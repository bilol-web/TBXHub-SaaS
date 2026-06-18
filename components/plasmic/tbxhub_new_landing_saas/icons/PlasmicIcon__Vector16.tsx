/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector16Icon(props: Vector16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={"M3.587.875H.438a.438.438 0 0 1 0-.875h3.15a.438.438 0 0 1 0 .875"}
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */

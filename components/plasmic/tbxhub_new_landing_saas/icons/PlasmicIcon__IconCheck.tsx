/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCheckIcon(props: IconCheckIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
        strokeWidth={".8"}
        d={"m2.639 6.4 2.667 2.667 5.333-5.334"}
      ></path>
    </svg>
  );
}

export default IconCheckIcon;
/* prettier-ignore-end */

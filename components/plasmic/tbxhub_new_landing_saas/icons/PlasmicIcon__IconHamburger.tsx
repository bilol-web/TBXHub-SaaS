/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconHamburgerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconHamburgerIcon(props: IconHamburgerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        strokeWidth={"1.846"}
        d={"M3 12h12M3 6h18M3 18h18"}
      ></path>
    </svg>
  );
}

export default IconHamburgerIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame12Icon(props: Frame12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 34"}
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
        strokeWidth={"2.125"}
        d={"m14.168 11.334 6.198 5.755-6.198 5.755"}
      ></path>
    </svg>
  );
}

export default Frame12Icon;
/* prettier-ignore-end */

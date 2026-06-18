/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconArrowRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconArrowRightIcon(props: IconArrowRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
        strokeWidth={"1.125"}
        d={"M3.75 9h10.5m-4.5 4.5 4.5-4.5m-4.5-4.5 4.5 4.5"}
      ></path>
    </svg>
  );
}

export default IconArrowRightIcon;
/* prettier-ignore-end */

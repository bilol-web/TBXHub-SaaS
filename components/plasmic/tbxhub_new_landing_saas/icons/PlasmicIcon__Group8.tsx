/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
        d={"M1.688 5.625 4.5 2.812l2.813 2.813"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group10Icon(props: Group10IconProps) {
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
        strokeWidth={"1.3"}
        d={
          "M6.047 4.078 9 1.125l2.953 2.953M9 9V1.125m3.375 5.625h1.688a.56.56 0 0 1 .562.563v7.312a.56.56 0 0 1-.563.563H3.938a.563.563 0 0 1-.563-.563V7.312a.563.563 0 0 1 .563-.562h1.687"
        }
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */

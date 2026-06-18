/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group15Icon(props: Group15IconProps) {
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
          "M14.344 3.094H3.656a.563.563 0 0 0-.562.562v10.688c0 .31.252.562.562.562h10.688c.31 0 .562-.252.562-.562V3.656a.56.56 0 0 0-.562-.562m-6.469 0v11.812m0-8.718h-4.5"
        }
      ></path>
    </svg>
  );
}

export default Group15Icon;
/* prettier-ignore-end */

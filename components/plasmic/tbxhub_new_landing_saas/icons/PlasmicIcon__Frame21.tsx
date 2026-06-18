/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame21Icon(props: Frame21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
        strokeWidth={"2"}
        d={
          "M7.916 20c0-6.673 5.41-12.083 12.084-12.083S32.083 13.327 32.083 20c0 6.674-5.41 12.083-12.083 12.083-6.674 0-12.084-5.41-12.084-12.083"
        }
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"m15 20.159 3.104 3.174L25 16.667"}
      ></path>
    </svg>
  );
}

export default Frame21Icon;
/* prettier-ignore-end */

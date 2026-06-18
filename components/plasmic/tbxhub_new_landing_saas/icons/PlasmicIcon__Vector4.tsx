/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 258 177"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"3.539"}
        d={
          "M1.77 162.525c9.24-10.286 29.663-24.968 37.425-1.402 9.703 29.456 23.564 9.818 23.564-32.262 0-42.081 22.178-84.162 26.337-37.873 0 5.61 2.772 16.832 13.861 16.832 13.861 0 5.544 49.094 30.495 36.47 11.089-7.013-4.159-61.718 19.405-72.94 11.089-5.61 11.089-28.053 11.089-50.496s20.792-26.652 24.951-4.209c1.386 15.43-2.773 35.068 13.861 39.276 13.861 2.805 8.317 35.067 12.475 70.134 4.158 21.041 20.792 19.638 27.722-9.819 2.218-10.099 9.241-9.818 12.476-8.416"
        }
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */

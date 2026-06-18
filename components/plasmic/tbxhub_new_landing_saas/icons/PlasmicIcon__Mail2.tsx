/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mail2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mail2Icon(props: Mail2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
        strokeWidth={"1.667"}
        d={
          "M18.333 5c0-.917-.75-1.667-1.666-1.667H3.333c-.916 0-1.666.75-1.666 1.667m16.666 0v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5m16.666 0L10 10.833 1.667 5"
        }
      ></path>
    </svg>
  );
}

export default Mail2Icon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BatteryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BatteryIcon(props: BatteryIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={".584"}
        d={
          "M1.557.292h9.728c.699 0 1.265.566 1.265 1.265v3.502c0 .698-.566 1.265-1.265 1.265H1.557A1.265 1.265 0 0 1 .292 5.06V1.557C.292.858.858.292 1.557.292z"
        }
        opacity={".35"}
      ></path>

      <path
        fill={"currentColor"}
        d={"M13.426 2.14v2.335a1.267 1.267 0 0 0 0-2.335"}
        opacity={".4"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M1.167 1.946a.78.78 0 0 1 .779-.779h8.95a.78.78 0 0 1 .779.779V4.67c0 .43-.349.778-.779.778h-8.95a.78.78 0 0 1-.779-.778z"
        }
      ></path>
    </svg>
  );
}

export default BatteryIcon;
/* prettier-ignore-end */

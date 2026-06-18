/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 323 173"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M52.5 134C35.3 150 10.333 123.333 0 108v64.5h323V0c-15.5 14.5-54 96-78 77.5C224.248 61.504 215.5 45 206.5 43c-27.5-6-38 44.5-48.5 64.5s-47.5-12-65-11.5-19 18-40.5 38"
        }
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */

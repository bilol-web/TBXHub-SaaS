/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Exclude3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Exclude3Icon(props: Exclude3IconProps) {
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
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M2.942 2.942 1.895 6.289 5.24 5.241l1.048-3.347zM.75 8.182a.75.75 0 0 1-.716-.973L1.628 2.12a.75.75 0 0 1 .49-.492L7.209.035a.748.748 0 0 1 .94.939L6.556 6.063a.75.75 0 0 1-.492.492L.974 8.148a.8.8 0 0 1-.223.034z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Exclude3Icon;
/* prettier-ignore-end */

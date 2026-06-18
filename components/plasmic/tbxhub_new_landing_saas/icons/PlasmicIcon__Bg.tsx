/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BgIcon(props: BgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 70"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M0 24.889C0 16.177 0 11.82 1.695 8.493a15.56 15.56 0 0 1 6.798-6.798C11.821 0 16.177 0 24.89 0h20.22c8.712 0 13.068 0 16.396 1.695a15.56 15.56 0 0 1 6.798 6.798C70 11.821 70 16.177 70 24.89v20.22c0 8.712 0 13.068-1.695 16.396a15.55 15.55 0 0 1-6.799 6.798C58.18 70 53.824 70 45.112 70H24.89c-8.712 0-13.068 0-16.396-1.695a15.56 15.56 0 0 1-6.798-6.799C0 58.18 0 53.824 0 45.112V24.89z"
        }
      ></path>
    </svg>
  );
}

export default BgIcon;
/* prettier-ignore-end */

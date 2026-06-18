/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZendeskIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZendeskIcon(props: ZendeskIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 80"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M42.5 12.5v39.286L75 12.5zM21.25 30c8.89 0 16.25-8.96 16.25-17.5H5C5 21.04 12.36 30 21.25 30M42.5 67.5c0-8.54 7.36-17.5 16.25-17.5S75 58.96 75 67.5zm-5 0V28.214L5 67.5z"
        }
      ></path>
    </svg>
  );
}

export default ZendeskIcon;
/* prettier-ignore-end */

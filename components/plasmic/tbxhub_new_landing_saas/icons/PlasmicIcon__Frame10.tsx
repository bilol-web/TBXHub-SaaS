/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame10Icon(props: Frame10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M10.516 8.574A.791.791 0 0 0 9.3 9.24v5.98a.791.791 0 0 0 1.216.667l4.698-2.99a.79.79 0 0 0 0-1.335l-4.698-2.99z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Frame10Icon;
/* prettier-ignore-end */

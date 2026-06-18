/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector14Icon(props: Vector14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M.437 4.186a.438.438 0 0 1-.06-.87A1.244 1.244 0 0 0 1.443 2.09c0-.608-.437-1.123-1.038-1.22A.438.438 0 0 1 .547.006a2.106 2.106 0 0 1 1.77 2.086 2.125 2.125 0 0 1-1.82 2.09.4.4 0 0 1-.06.004"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */

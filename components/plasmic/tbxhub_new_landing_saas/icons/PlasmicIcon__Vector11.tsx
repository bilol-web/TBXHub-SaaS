/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 3"}
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
          "M.438 2.795A.44.44 0 0 1 0 2.357V.437a.438.438 0 0 1 .875 0v1.92a.44.44 0 0 1-.438.438"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */

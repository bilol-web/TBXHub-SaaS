/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector21Icon(props: Vector21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 7"}
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
          "M.75 6.49a.75.75 0 0 1-.594-1.208l2.993-3.89a.75.75 0 0 1 1.058-.132l2.82 2.215L9.494.292a.75.75 0 1 1 1.186.918L7.75 4.99a.75.75 0 0 1-.5.285.74.74 0 0 1-.556-.154L3.876 2.907l-2.531 3.29a.75.75 0 0 1-.595.292"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */

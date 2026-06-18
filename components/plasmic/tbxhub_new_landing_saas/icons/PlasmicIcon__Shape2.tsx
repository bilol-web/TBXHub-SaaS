/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape2Icon(props: Shape2IconProps) {
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

      <path fill={"currentColor"} d={"M0 19.2 19.2 0v9.6l-9.6 9.6z"}></path>
    </svg>
  );
}

export default Shape2Icon;
/* prettier-ignore-end */

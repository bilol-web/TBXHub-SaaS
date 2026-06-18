/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconCloseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconCloseIcon(props: IconCloseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
          "M4.353 3.646a.5.5 0 1 0-.707.707L7.293 8l-3.647 3.646a.5.5 0 0 0 .707.707L8 8.707l3.646 3.646a.5.5 0 0 0 .707-.707L8.707 8l3.646-3.647a.5.5 0 0 0-.707-.707L8 7.293z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default IconCloseIcon;
/* prettier-ignore-end */

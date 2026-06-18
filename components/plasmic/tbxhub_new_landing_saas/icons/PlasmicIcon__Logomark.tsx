/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogomarkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogomarkIcon(props: LogomarkIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 39"}
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
          "M2.496 19.496c10.806 0 17-6.194 17-17 0 10.806 6.195 17 17 17-10.805 0-17 6.195-17 17 0-10.805-6.194-17-17-17"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default LogomarkIcon;
/* prettier-ignore-end */

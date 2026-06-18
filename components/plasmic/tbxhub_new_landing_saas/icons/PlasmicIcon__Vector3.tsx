/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 255 187"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M37.217 159.961C28.582 136.253 9.284 151.226 0 161.7v24.711h254.841v-79.98c-3.25-1.429-10.388-.838-12.616 9.446-7.57 29.599-22.709 28.34-27.769 10.678-4.178-35.708 1.393-68.559-12.533-71.416-16.711-4.284-12.533-24.28-13.926-39.992-4.178-22.853-25.066-18.568-25.066 4.285s0 45.706-11.141 51.419c-23.673 11.426-8.814 64.965-19.954 72.106-25.066 12.855-15.722-36.526-29.647-36.526-11.141 0-14.457-9.87-14.457-15.584-4.178-47.134-26.459-4.285-26.459 38.564s-13.964 58.26-24.056 30.55"
        }
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */

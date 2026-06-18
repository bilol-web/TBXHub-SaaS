/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group9Icon(props: Group9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
          "M3.305.875c-1.476 0-2.43 1.01-2.43 2.576v4.765c0 1.565.954 2.576 2.43 2.576H8.36c1.476 0 2.43-1.011 2.43-2.576V3.45c0-1.565-.954-2.576-2.43-2.576zM8.36 11.667H3.305C1.328 11.667 0 10.28 0 8.216V3.45C0 1.387 1.328 0 3.305 0H8.36c1.977 0 3.306 1.387 3.306 3.451v4.765c0 2.064-1.329 3.45-3.306 3.45z"
        }
        clipRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M5.141 7.655a.44.44 0 0 1-.309-.128L3.447 6.142a.437.437 0 1 1 .619-.618L5.14 6.6 7.6 4.14a.437.437 0 1 1 .618.62L5.45 7.526a.43.43 0 0 1-.309.128"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Group9Icon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZapierIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZapierIcon(props: ZapierIconProps) {
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
          "M47.388 47.405a21.14 21.14 0 0 1-14.82 0 21.1 21.1 0 0 1-.003-14.809 21.13 21.13 0 0 1 14.823 0 21.1 21.1 0 0 1 0 14.809m27.125-13.238H54.07L68.525 19.72a35.2 35.2 0 0 0-8.256-8.25L45.813 25.918V5.488a35.3 35.3 0 0 0-11.673 0v20.43L19.684 11.472a35.3 35.3 0 0 0-8.256 8.25l14.457 14.446H5.442c-.505 3.971-.668 7.703 0 11.666h20.444L11.428 60.28a35.3 35.3 0 0 0 8.255 8.25L34.14 54.083v20.43c3.859.647 7.814.647 11.673 0v-20.43L60.27 68.53a35.3 35.3 0 0 0 8.255-8.25L54.068 45.833h20.445a35.2 35.2 0 0 0 0-11.666"
        }
      ></path>
    </svg>
  );
}

export default ZapierIcon;
/* prettier-ignore-end */

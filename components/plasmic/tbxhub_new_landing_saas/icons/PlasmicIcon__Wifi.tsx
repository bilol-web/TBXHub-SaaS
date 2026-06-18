/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WifiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WifiIcon(props: WifiIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M3.168 4.903a2 2 0 0 1 2.58 0 .184.184 0 0 1 .005.267L4.587 6.346a.18.18 0 0 1-.129.055.18.18 0 0 1-.13-.055L3.162 5.17a.183.183 0 0 1 .006-.267m-1.556-1.57a4.18 4.18 0 0 1 5.693 0 .19.19 0 0 1 .003.268l-.674.682a.18.18 0 0 1-.253.003 2.865 2.865 0 0 0-3.845 0 .18.18 0 0 1-.253-.003L1.61 3.6a.19.19 0 0 1 .003-.267zM.057 1.769a6.36 6.36 0 0 1 8.801 0 .19.19 0 0 1 .002.267l-.674.68a.18.18 0 0 1-.253.003 5.044 5.044 0 0 0-6.95 0 .18.18 0 0 1-.254-.002l-.674-.681a.19.19 0 0 1 .002-.267"
        }
      ></path>
    </svg>
  );
}

export default WifiIcon;
/* prettier-ignore-end */

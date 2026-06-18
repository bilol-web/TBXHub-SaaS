/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskGroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskGroupIcon(props: MaskGroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"a"}
        width={"16"}
        height={"15"}
        x={"0"}
        y={"0"}
        maskUnits={"userSpaceOnUse"}
        style={{
          maskType: 'luminance"'
        }}
      >
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={"M0 0h15.414v14.457H0z"}
          clipRule={"evenodd"}
        ></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={
            "M7.706 1.25c-2.913 0-4.943 2.282-4.943 4.33 0 1.732-.48 2.533-.905 3.24-.341.567-.61 1.015-.61 1.99.139 1.57 1.176 2.397 6.458 2.397 5.252 0 6.322-.863 6.46-2.452-.002-.92-.271-1.368-.612-1.936-.425-.707-.906-1.507-.906-3.24 0-2.047-2.03-4.329-4.942-4.329m0 13.207c-3.897 0-7.418-.275-7.706-3.595-.002-1.373.417-2.071.787-2.686.374-.623.726-1.211.726-2.597C1.513 2.885 4.002 0 7.706 0s6.192 2.885 6.192 5.58c0 1.385.353 1.973.727 2.596.37.615.79 1.313.79 2.633-.292 3.373-3.813 3.648-7.71 3.648"
          }
          clipRule={"evenodd"}
        ></path>
      </g>
    </svg>
  );
}

export default MaskGroupIcon;
/* prettier-ignore-end */

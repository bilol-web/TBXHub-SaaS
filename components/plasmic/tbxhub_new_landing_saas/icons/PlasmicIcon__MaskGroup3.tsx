/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskGroup3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskGroup3Icon(props: MaskGroup3IconProps) {
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

      <mask
        id={"a"}
        width={"12"}
        height={"12"}
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
          d={"M0 0h11.375v11.62H0z"}
          clipRule={"evenodd"}
        ></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={
            "M3.22.875C1.709.875.876 1.682.876 3.147v5.278c0 1.497.833 2.32 2.346 2.32h4.933c1.513 0 2.346-.808 2.346-2.276V3.147c.002-.72-.191-1.28-.576-1.666C9.53 1.084 8.92.875 8.16.875zm4.934 10.746H3.221C1.234 11.62 0 10.396 0 8.425V3.146C0 1.206 1.234 0 3.22 0h4.94c.997 0 1.82.299 2.384.863.546.549.834 1.338.831 2.285v5.321c0 1.944-1.234 3.152-3.22 3.152z"
          }
          clipRule={"evenodd"}
        ></path>
      </g>
    </svg>
  );
}

export default MaskGroup3Icon;
/* prettier-ignore-end */

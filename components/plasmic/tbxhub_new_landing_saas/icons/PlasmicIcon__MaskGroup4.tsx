/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskGroup4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskGroup4Icon(props: MaskGroup4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"a"}
        width={"13"}
        height={"13"}
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
          d={"M0 0h12.538v12.538H0z"}
          clipRule={"evenodd"}
        ></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={
            "M2.98 10.894c.338 0 .657.128.995.264a5.43 5.43 0 0 0 6.11-1.072 5.404 5.404 0 0 0 0-7.632A5.36 5.36 0 0 0 6.27.875a5.36 5.36 0 0 0-3.815 1.58 5.42 5.42 0 0 0-1.081 6.09c.136.337.268.666.268 1.008s-.117.685-.22.988c-.085.25-.214.627-.131.71.08.084.46-.049.71-.134.3-.103.641-.22.979-.223m3.276 1.644a6.25 6.25 0 0 1-2.628-.577c-.247-.099-.479-.192-.645-.192-.192 0-.449.09-.697.175-.51.175-1.145.393-1.614-.074-.468-.47-.252-1.102-.079-1.61.086-.252.174-.51.174-.707 0-.16-.077-.366-.196-.662-1.093-2.36-.588-5.203 1.266-7.055A6.23 6.23 0 0 1 6.27 0c1.676 0 3.25.652 4.434 1.835a6.28 6.28 0 0 1 0 8.87 6.3 6.3 0 0 1-4.448 1.833"
          }
          clipRule={"evenodd"}
        ></path>
      </g>
    </svg>
  );
}

export default MaskGroup4Icon;
/* prettier-ignore-end */

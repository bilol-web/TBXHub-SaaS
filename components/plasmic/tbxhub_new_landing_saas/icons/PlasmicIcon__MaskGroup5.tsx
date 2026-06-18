/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskGroup5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskGroup5Icon(props: MaskGroup5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"a"}
        width={"3"}
        height={"3"}
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
          d={"M0 0h2.213v2.642H0z"}
          clipRule={"evenodd"}
        ></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={
            "M1.099 2.642a.438.438 0 0 1-.156-.846c.395-.15.395-.317.395-.397 0-.255-.325-.434-.965-.53A.44.44 0 0 1 .005.371.44.44 0 0 1 .503.004c1.413.212 1.71.875 1.71 1.395 0 .317-.125.897-.959 1.215a.4.4 0 0 1-.155.028"
          }
          clipRule={"evenodd"}
        ></path>
      </g>
    </svg>
  );
}

export default MaskGroup5Icon;
/* prettier-ignore-end */

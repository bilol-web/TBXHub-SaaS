/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskGroup6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskGroup6Icon(props: MaskGroup6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"a"}
        width={"10"}
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
          d={"M0 0h9.947v11.581H0z"}
          clipRule={"evenodd"}
        ></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={
            "M2.668.875A1.8 1.8 0 0 0 .876 2.623v6.239a1.8 1.8 0 0 0 1.755 1.845h4.704a1.82 1.82 0 0 0 1.738-1.841V3.69L6.369.875zm.007 10.707H2.61A2.675 2.675 0 0 1 0 8.852v-6.24A2.68 2.68 0 0 1 2.666 0h3.89c.119 0 .232.048.315.134l2.955 3.078c.078.081.122.19.122.303v5.347a2.693 2.693 0 0 1-2.596 2.719H2.675z"
          }
          clipRule={"evenodd"}
        ></path>
      </g>
    </svg>
  );
}

export default MaskGroup6Icon;
/* prettier-ignore-end */

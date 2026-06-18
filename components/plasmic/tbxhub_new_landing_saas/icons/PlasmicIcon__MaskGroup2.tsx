/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskGroup2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskGroup2Icon(props: MaskGroup2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"a"}
        width={"12"}
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
          d={"M0 0h11.958v12.545H0z"}
          clipRule={"evenodd"}
        ></path>
      </mask>

      <g mask={"url(#a)"}>
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={
            "M6.835 8.336c.702 0 1.274.568 1.274 1.266v1.794c0 .15.12.27.274.274h1.112a1.58 1.58 0 0 0 1.588-1.568v-5.09a.98.98 0 0 0-.389-.763L6.848 1.182a1.41 1.41 0 0 0-1.756.001l-3.82 3.065a.98.98 0 0 0-.397.775v5.079a1.58 1.58 0 0 0 1.588 1.568h1.123a.283.283 0 0 0 .286-.28.5.5 0 0 1 .011-.1V9.602c0-.694.568-1.26 1.265-1.266zm2.66 4.209H8.372a1.15 1.15 0 0 1-1.138-1.149V9.602c0-.216-.18-.39-.4-.39H5.152a.395.395 0 0 0-.393.39v1.788a.4.4 0 0 1-.018.126 1.16 1.16 0 0 1-1.154 1.029H2.463C1.105 12.545 0 11.449 0 10.102V5.018a1.84 1.84 0 0 1 .734-1.46L4.546.498a2.28 2.28 0 0 1 2.847 0l3.84 3.062c.45.344.718.873.725 1.446v5.096c0 1.347-1.105 2.443-2.463 2.443"
          }
          clipRule={"evenodd"}
        ></path>
      </g>
    </svg>
  );
}

export default MaskGroup2Icon;
/* prettier-ignore-end */

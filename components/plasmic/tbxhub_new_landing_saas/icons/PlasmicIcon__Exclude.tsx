/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExcludeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExcludeIcon(props: ExcludeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 4"}
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
          "M3.914.875c-1.386 0-3.039.17-3.039.981 0 .817 1.653.989 3.039.989s3.038-.17 3.038-.979c0-.819-1.652-.991-3.038-.991m0 2.845C2.946 3.72 0 3.72 0 1.856 0 0 2.946 0 3.914 0c.967 0 3.913 0 3.913 1.866 0 1.854-2.843 1.854-3.913 1.854"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default ExcludeIcon;
/* prettier-ignore-end */

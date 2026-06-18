/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame23Icon(props: Frame23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 11 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#a)"}>
        <path
          fill={"currentColor"}
          fillRule={"evenodd"}
          d={
            "M5.5.917c.194 0 .352.157.352.352v3.878H9.73a.353.353 0 0 1 0 .705H5.852v3.879a.353.353 0 1 1-.705 0V5.852H1.269a.353.353 0 1 1 0-.705h3.878V1.27c0-.195.158-.352.352-.352z"
          }
          clipRule={"evenodd"}
        ></path>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"currentColor"} d={"M0 0h11v11H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Frame23Icon;
/* prettier-ignore-end */

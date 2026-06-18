/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame25Icon(props: Frame25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        fill={"currentColor"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        opacity={".5"}
      >
        <path
          d={
            "M9.59 9.59a.45.45 0 0 1 .634 0l2.477 2.477a.449.449 0 0 1-.634.635L9.59 10.225a.45.45 0 0 1 0-.635"
          }
        ></path>

        <path
          d={
            "M6.46 2.064a4.398 4.398 0 1 0 .001 8.795 4.398 4.398 0 0 0 0-8.795zM1.167 6.462a5.295 5.295 0 1 1 10.59 0 5.295 5.295 0 0 1-10.59 0"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Frame25Icon;
/* prettier-ignore-end */

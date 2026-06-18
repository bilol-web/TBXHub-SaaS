/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 3"}
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
          "M2.651 2.203C1.715 2.202.83 1.79.16 1.043a.624.624 0 1 1 .93-.835c.431.48.985.745 1.56.745h.001c.578 0 1.134-.265 1.567-.746a.626.626 0 0 1 .929.836c-.673.748-1.56 1.16-2.496 1.16"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */

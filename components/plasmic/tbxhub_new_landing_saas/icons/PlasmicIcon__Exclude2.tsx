/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Exclude2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Exclude2Icon(props: Exclude2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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
          "M2.665.875c-.987 0-1.79.803-1.79 1.79-.002.479.181.926.517 1.264a1.77 1.77 0 0 0 1.258.526l.015.438v-.438c.987 0 1.79-.802 1.79-1.79 0-.987-.803-1.79-1.79-1.79m0 4.455h-.016A2.64 2.64 0 0 1 .77 4.545 2.64 2.64 0 0 1 0 2.664 2.67 2.67 0 0 1 2.665 0 2.67 2.67 0 0 1 5.33 2.665 2.67 2.67 0 0 1 2.665 5.33"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Exclude2Icon;
/* prettier-ignore-end */

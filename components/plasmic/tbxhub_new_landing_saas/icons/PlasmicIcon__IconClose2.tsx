/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconClose2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconClose2Icon(props: IconClose2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M4.897 4.103a.562.562 0 1 0-.794.794L8.205 9l-4.102 4.102a.562.562 0 1 0 .794.796L9 9.795l4.102 4.103a.562.562 0 1 0 .796-.796L9.795 9l4.103-4.103a.562.562 0 1 0-.796-.794L9 8.205z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default IconClose2Icon;
/* prettier-ignore-end */

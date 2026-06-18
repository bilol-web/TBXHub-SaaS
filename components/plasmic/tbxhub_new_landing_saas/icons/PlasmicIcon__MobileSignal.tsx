/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MobileSignalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MobileSignalIcon(props: MobileSignalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M1.167 3.892c.322 0 .584.261.584.584v1.167a.584.584 0 0 1-.584.584H.584A.584.584 0 0 1 0 5.643V4.476c0-.323.262-.584.584-.584zm2.725-1.168c.322 0 .583.261.584.584v2.335a.584.584 0 0 1-.584.584h-.584a.584.584 0 0 1-.584-.584V3.308c0-.323.261-.584.584-.584zm2.723-1.362c.322 0 .584.261.584.583v3.698a.584.584 0 0 1-.584.584h-.583a.584.584 0 0 1-.584-.584V1.945c0-.322.262-.583.584-.583zM9.34 0c.322 0 .584.262.584.584v5.059a.584.584 0 0 1-.584.584h-.584a.584.584 0 0 1-.584-.584V.584c0-.322.262-.584.584-.584z"
        }
      ></path>
    </svg>
  );
}

export default MobileSignalIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DateIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DateIcon(props: DateIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M2.257 6.473c1.57 0 2.501-1.227 2.501-3.305 0-.782-.15-1.44-.436-1.95C3.908.428 3.194 0 2.292 0 .949 0 0 .902 0 2.168 0 3.356.855 4.22 2.03 4.22c.723 0 1.31-.338 1.6-.924h.072c0 1.411-.534 2.253-1.436 2.253-.53 0-.94-.29-1.082-.756H.086c.183 1.013 1.043 1.68 2.171 1.68m.039-3.13c-.71 0-1.214-.504-1.214-1.21 0-.688.53-1.214 1.218-1.214s1.219.535 1.219 1.232c0 .688-.518 1.192-1.223 1.192m4.267 3.07c.406 0 .684-.29.684-.675 0-.39-.278-.676-.684-.676-.402 0-.684.286-.684.676 0 .384.282.675.684.675m0-3.206c.406 0 .684-.287.684-.672 0-.389-.278-.675-.684-.675-.402 0-.684.286-.684.675 0 .385.282.672.684.672m4.686 3.116h1.056v-1.15h.834v-.932h-.834V.154h-1.556C9.659 1.796 8.79 3.168 8.235 4.19v.983h3.014zm-1.992-2.12a47 47 0 0 1 1.95-3.151h.059v3.215h-2.01zm6.233 2.12h1.103V.153h-1.098l-1.612 1.13v1.06l1.535-1.077h.072z"
        }
      ></path>
    </svg>
  );
}

export default DateIcon;
/* prettier-ignore-end */

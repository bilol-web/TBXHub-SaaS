/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame22Icon(props: Frame22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 54"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M26.022.7a4.9 4.9 0 0 1 1.96 0c.746.153 1.414.527 1.945.825l.145.08 17.995 9.998.152.084h.002c.562.31 1.27.7 1.812 1.289a4.8 4.8 0 0 1 1.04 1.77c.252.76.25 1.567.247 2.208v20.091c.002.642.005 1.449-.246 2.21a4.9 4.9 0 0 1-1.041 1.769c-.543.589-1.25.978-1.812 1.288l-.087.048-.067.037-17.995 9.997-.145.08c-.53.298-1.199.672-1.946.826a4.9 4.9 0 0 1-1.959 0c-.747-.154-1.415-.528-1.946-.825l-.145-.081-17.996-9.997-.153-.085c-.562-.31-1.269-.7-1.812-1.288a4.9 4.9 0 0 1-1.042-1.77c-.25-.76-.248-1.567-.246-2.209l.001-.176V16.954c-.003-.641-.006-1.448.245-2.209a4.9 4.9 0 0 1 1.042-1.77c.543-.588 1.25-.978 1.812-1.287l.153-.085 17.996-9.997.145-.081c.53-.298 1.199-.672 1.946-.825M7.547 36.87c0 .444.001.672.011.837v.014l.012.008c.14.089.339.2.727.416l16.273 9.04V28.43L7.547 18.974zM26.99 5.481c-.14.067-.329.17-.697.375l-16.17 8.984 16.879 9.377L43.88 14.84 27.71 5.856a16 16 0 0 0-.697-.375l-.011-.006z"
        }
      ></path>
    </svg>
  );
}

export default Frame22Icon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5Icon(props: Frame5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 39"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M18.792.506a3.5 3.5 0 0 1 1.415 0c.54.11 1.022.38 1.406.595l.104.059 12.997 7.22.11.06v.001c.407.224.917.505 1.31.93.338.368.594.804.751 1.28.182.548.18 1.13.178 1.594v14.51c.002.463.004 1.046-.178 1.595-.157.475-.413.91-.752 1.279-.392.425-.903.706-1.308.93q-.032.016-.063.034l-.048.027-12.997 7.22-.104.06c-.384.214-.866.484-1.405.595a3.5 3.5 0 0 1-1.416 0c-.539-.111-1.022-.381-1.405-.596l-.105-.059-12.996-7.22-.112-.062c-.406-.223-.916-.504-1.307-.93a3.5 3.5 0 0 1-.753-1.278c-.182-.549-.18-1.132-.178-1.595l.001-.127V12.372l-.001-.127c-.002-.463-.004-1.046.178-1.595.157-.475.414-.91.753-1.278.392-.426.901-.707 1.307-.93l.112-.062 12.996-7.22.105-.059c.384-.214.866-.484 1.405-.595M5.45 26.628c0 .321 0 .486.007.605v.01l.01.006c.1.064.244.145.525.3l11.752 6.529V20.533L5.45 13.703zm14.042-22.67c-.102.05-.238.124-.504.272L7.309 10.718l12.19 6.773 12.19-6.773L20.012 4.23a12 12 0 0 0-.503-.271l-.008-.004-.008.004z"
        }
      ></path>
    </svg>
  );
}

export default Frame5Icon;
/* prettier-ignore-end */

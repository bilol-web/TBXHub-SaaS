/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpeakerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpeakerIcon(props: SpeakerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 4"}
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
          "M0 1.735C0 .777.777 0 1.735 0h24.752a1.735 1.735 0 0 1 0 3.47H1.735A1.735 1.735 0 0 1 0 1.735"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default SpeakerIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceSurroundIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceSurroundIcon(props: DeviceSurroundIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 241 497"}
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
          "M1.832 25.973C0 31.635 0 38.632 0 52.624v390.924c0 13.993 0 20.989 1.832 26.651 3.704 11.443 12.64 20.415 24.037 24.133 5.64 1.84 12.607 1.84 26.544 1.84h135.351c13.937 0 20.905 0 26.544-1.84 11.398-3.718 20.333-12.69 24.037-24.133 1.832-5.662 1.832-12.658 1.832-26.651V52.624c0-13.992 0-20.989-1.832-26.65-3.704-11.444-12.639-20.416-24.037-24.134C208.669 0 201.701 0 187.764 0H52.413C38.476 0 31.508 0 25.869 1.84 14.47 5.558 5.536 14.53 1.832 25.973m59.22-11.805v2.602h.042l-.041.29c0 6.866 5.544 12.433 12.383 12.433h93.306c6.839 0 12.383-5.567 12.383-12.433l-.041-.29h.041v-2.602a3.174 3.174 0 0 1 3.168-3.18h7.418c11.598 0 17.397 0 22.021 1.754a27.12 27.12 0 0 1 15.754 15.818c1.748 4.643 1.748 10.465 1.748 22.11v394.833c0 11.644 0 17.466-1.748 22.109a27.12 27.12 0 0 1-15.754 15.818c-4.624 1.755-10.423 1.755-22.021 1.755H50.466c-11.597 0-17.396 0-22.02-1.755a27.13 27.13 0 0 1-15.755-15.818c-1.747-4.643-1.747-10.465-1.747-22.109V50.67c0-11.645 0-17.467 1.747-22.11a27.13 27.13 0 0 1 15.754-15.818c4.625-1.755 10.424-1.755 22.021-1.755h7.419a3.174 3.174 0 0 1 3.168 3.181z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default DeviceSurroundIcon;
/* prettier-ignore-end */

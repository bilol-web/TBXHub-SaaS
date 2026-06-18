/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HighlightBandIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HighlightBandIcon(props: HighlightBandIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 240 496"}
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
          "M187.419.578H51.606C37.84.578 31.093.585 25.65 2.361 14.602 5.965 5.94 14.661 2.352 25.752.583 31.218.576 37.992.576 51.815V443.2c0 13.822.007 20.596 1.776 26.062 3.59 11.092 12.25 19.787 23.297 23.391 5.444 1.776 12.19 1.783 25.957 1.783H187.42c13.767 0 20.513-.007 25.957-1.783 11.047-3.604 19.708-12.299 23.297-23.391 1.769-5.466 1.776-12.24 1.776-26.062V51.815c0-13.823-.007-20.597-1.776-26.063-3.589-11.091-12.25-19.787-23.297-23.39C207.932.584 201.186.577 187.419.577zM1.804 25.574C0 31.149 0 38.037 0 51.814v391.387c0 13.777 0 20.666 1.804 26.241 3.646 11.267 12.445 20.101 23.667 23.762 5.552 1.812 12.413 1.812 26.135 1.812H187.42c13.722 0 20.583 0 26.135-1.812 11.222-3.661 20.021-12.495 23.667-23.762 1.804-5.575 1.804-12.464 1.804-26.241V51.815c0-13.778 0-20.666-1.804-26.241-3.646-11.268-12.445-20.102-23.667-23.763C208.002 0 201.141 0 187.419 0H51.606C37.884 0 31.023 0 25.471 1.811 14.249 5.472 5.45 14.306 1.804 25.574"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default HighlightBandIcon;
/* prettier-ignore-end */

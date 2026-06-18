/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame18Icon(props: Frame18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M6.867.178c.167-.034.34-.034.508 0 .193.04.367.138.504.215l.038.02 4.666 2.593.039.021c.145.08.33.182.47.335.122.132.214.288.27.458.065.197.064.407.063.573v5.208c0 .167.002.376-.063.573a1.3 1.3 0 0 1-.27.46c-.14.152-.324.253-.47.333l-.022.012-.017.01-4.666 2.592-.038.021a1.8 1.8 0 0 1-.504.214q-.254.051-.508 0a1.8 1.8 0 0 1-.504-.214l-.038-.021-4.665-2.592-.04-.022c-.146-.08-.33-.18-.47-.334a1.3 1.3 0 0 1-.27-.458C.813 9.976.814 9.768.815 9.6V4.393c0-.166-.002-.376.063-.573.057-.17.15-.326.27-.458.142-.153.325-.254.47-.334l.04-.022L6.326.414l.038-.02c.137-.078.31-.176.504-.216zm-4.79 9.378c0 .115 0 .174.003.217v.004l.004.002a4 4 0 0 0 .188.108l4.219 2.344V7.37L2.077 4.917zm5.04-8.137a4 4 0 0 0-.18.097l-4.192 2.33 4.376 2.43 4.376-2.43-4.193-2.33a4 4 0 0 0-.18-.097l-.003-.002-.003.002z"
        }
      ></path>
    </svg>
  );
}

export default Frame18Icon;
/* prettier-ignore-end */

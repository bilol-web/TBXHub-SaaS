/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SocialIcon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SocialIcon3Icon(props: SocialIcon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M17.369 14.287a10 10 0 0 1-.986 1.773q-.777 1.108-1.27 1.534-.76.698-1.631.719-.627 0-1.508-.36-.882-.36-1.622-.359-.778 0-1.67.359c-.892.359-1.074.367-1.441.379q-.837.036-1.669-.738-.531-.463-1.328-1.589-.854-1.2-1.404-2.79-.59-1.714-.59-3.324 0-1.843.797-3.176a4.7 4.7 0 0 1 1.67-1.69 4.5 4.5 0 0 1 2.258-.636q.664.001 1.746.406 1.08.407 1.384.408.23 0 1.536-.48 1.234-.444 2.088-.37 2.314.185 3.471 1.827-2.069 1.255-2.048 3.509.02 1.756 1.271 2.916.566.537 1.27.833-.153.442-.324.85zM13.832.367q-.001 1.376-1.003 2.565c-.806.942-1.78 1.487-2.837 1.4a3 3 0 0 1-.022-.347c0-.88.384-1.822 1.064-2.592q.51-.585 1.296-.973.784-.383 1.482-.42.02.184.02.367"
        }
      ></path>
    </svg>
  );
}

export default SocialIcon3Icon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame16Icon(props: Frame16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 35"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M16.867.453a3.2 3.2 0 0 1 1.27 0c.485.1.918.342 1.262.535l.094.053 11.663 6.48q.049.025.099.053h.001c.364.202.823.454 1.175.836.304.33.534.721.675 1.147.162.493.16 1.016.159 1.432V24.01c.001.416.003.94-.16 1.432-.14.426-.37.817-.674 1.148-.352.381-.81.633-1.175.834l-.056.03-11.707 6.505-.093.052c-.345.193-.778.435-1.262.535a3.2 3.2 0 0 1-1.27 0c-.485-.1-.917-.342-1.261-.535l-.094-.052-11.664-6.48-.1-.055c-.364-.201-.822-.453-1.174-.834a3.15 3.15 0 0 1-.674-1.148c-.163-.493-.162-1.016-.16-1.432V10.989c-.002-.416-.003-.939.16-1.432.14-.426.37-.817.674-1.147.352-.382.81-.634 1.174-.835l.1-.055 11.664-6.48.094-.052c.344-.193.776-.436 1.26-.535M4.894 23.896c0 .288 0 .436.007.543v.01l.007.005c.09.057.22.13.472.27l10.547 5.859V18.426L4.894 12.298zM17.495 3.552c-.09.044-.213.11-.452.244L6.563 9.619l10.94 6.077 10.94-6.077-10.481-5.823a10 10 0 0 0-.452-.244l-.007-.003z"
        }
      ></path>
    </svg>
  );
}

export default Frame16Icon;
/* prettier-ignore-end */

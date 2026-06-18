/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame17Icon(props: Frame17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M13.012.35c.323-.067.656-.067.98 0 .373.077.706.264.972.413l.073.04 8.997 4.999.076.042h.001c.281.155.634.35.906.643.234.255.412.558.521.886.125.38.124.784.123 1.105v10.045c.001.32.003.724-.123 1.104-.109.329-.287.63-.521.885-.272.294-.625.49-.906.644l-.044.024-.033.018-8.997 5-.073.04c-.266.148-.6.336-.973.413a2.4 2.4 0 0 1-.98 0c-.373-.077-.707-.265-.973-.413l-.072-.04-8.997-5-.077-.042c-.281-.154-.635-.35-.907-.644a2.4 2.4 0 0 1-.52-.885c-.126-.38-.124-.784-.123-1.104V8.478c-.001-.321-.003-.725.123-1.105.108-.328.286-.63.52-.886.272-.294.626-.488.907-.643l.077-.042 8.997-5 .072-.04c.265-.148.6-.335.974-.412M3.774 18.435c0 .222 0 .336.005.419l.001.006.006.004c.07.045.17.1.363.209l8.136 4.52v-9.378l-8.51-4.728v8.948zM13.495 2.74c-.07.034-.164.087-.348.189L5.061 7.42l8.44 4.689 8.44-4.689-8.086-4.491a8 8 0 0 0-.348-.189l-.006-.003z"
        }
      ></path>
    </svg>
  );
}

export default Frame17Icon;
/* prettier-ignore-end */

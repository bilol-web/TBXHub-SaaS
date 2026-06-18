/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue =
  | "mobileOnly"
  | "tablet"
  | "laptop"
  | "smallTablet"
  | "latop2";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);
export function ScreenContextProvider(
  props: React.PropsWithChildren<{ value: ScreenValue[] | undefined }>
) {
  return (
    <ScreenContext.Provider value={props.value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export const useScreenVariants = createUseScreenVariants(true, {
  mobileOnly: "(min-width:0px) and (max-width:768px)",
  tablet: "(max-width:1105px)",
  laptop: "(max-width:1440px)",
  smallTablet: "(max-width:834px)",
  latop2: "(max-width:1200px)"
});

export default ScreenContext;
/* prettier-ignore-end */

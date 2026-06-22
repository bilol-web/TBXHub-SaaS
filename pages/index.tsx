// Renders the Plasmic "Landing" page at the root path ("/").
// Replaces the default create-plasmic-app placeholder.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/tbxhub_new_landing_saas/PlasmicGlobalContextsProvider";

import { PlasmicLanding } from "../components/plasmic/tbxhub_new_landing_saas/PlasmicLanding";
import { useRouter } from "next/router";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";

function Index() {
  return (
    <GlobalContextsProvider>
      <PlasmicQueryDataProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicLanding />
        </PageParamsProvider__>
      </PlasmicQueryDataProvider>
    </GlobalContextsProvider>
  );
}

export default Index;

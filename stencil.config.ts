import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "stencil-assignment",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null,
    },
  ],
};

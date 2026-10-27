import { defineApp } from "kitshn";

// kitshn 2 (https://kit.yarden-zamir.com): a Compose app on a machine labelled "docker". Cloudflare Access
// lets in only the Owner circle, so the app needs no login of its own.
export default defineApp({
  compose: { runsOn: ["docker"] },
  deploy: [
    { on: "push", branch: "main", name: "prod", address: "dozzle.yarden-zamir.com", startsIn: "Owner" },
    { on: "pull_request", name: "pr-{pr}", ephemeral: true, startsIn: "Owner" },
  ],
});

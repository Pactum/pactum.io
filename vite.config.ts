import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import { amplifyHosting } from "vite-plugin-react-router-amplify-hosting";

export default defineConfig({
  plugins: [reactRouter(), amplifyHosting({ computeRuntime: "nodejs24.x" })],
  resolve: {
    tsconfigPaths: true,
  },
});

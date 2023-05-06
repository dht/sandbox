import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const cwd = path.resolve(process.cwd(), "../");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    build: {
      sourcemap: true,
    },
    plugins: [
      tsconfigPaths({
        loose: true,
      }),
      react(),
      visualizer(),
    ],
    resolve: {
      alias: {
        "@gdi/ui": `${cwd}/gdi-ui/src`,
        igrid: `${cwd}/igrid/src`,
        "igrid-viewer": `${cwd}/igrid-viewer/src`,
        isokit: `${cwd}/isokit/src`,
        platformer: `${cwd}/platformer/src`,
        widgets: `${cwd}/widgets/src`,
      },
    },
    define: {},
    server: {
      host: true,
      port: 3000,
    },
  };
});

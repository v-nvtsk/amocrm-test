import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE_URL,
    outDir: "dist",
    plugins: [
      react(),
      tsconfigPaths(),
    ],
    server: {
      allowedHosts: true,
    },
  };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    disabled: false,
    esbuildOptions: {
      // Добавьте эту опцию
      target: "es2020",
    },
  },
  build: {
    target: "es2020",
  },
  server: {
    port: 3000
  }
});

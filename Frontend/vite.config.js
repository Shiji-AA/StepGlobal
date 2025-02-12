import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 4000,
  },
  build: {
    outDir: "dist", // ✅ Specifies output directory
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor-react"; // React-related chunks
            if (id.includes("axios")) return "vendor-axios"; // Axios chunk
            return "vendor"; // Other dependencies
          }
        },
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "localhost",
    port: 4000,
  },
  build: {
    chunkSizeWarningLimit: 500, // Adjust this if needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor-react"; // React-related chunks
            if (id.includes("axios")) return "vendor-axios"; // Axios (if used)
            return "vendor"; // Other vendor libraries
          }
        },
      },
    },
  },
});

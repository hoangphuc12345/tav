import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@axios": path.resolve(__dirname, "./src/axios"),
      "@themes": path.resolve(__dirname, "./src/themes"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@apis": path.resolve(__dirname, "./src/apis"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@http": path.resolve(__dirname, "./src/http"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@type": path.resolve(__dirname, "./src/type"),
      "@firebaseConnect": path.resolve(__dirname, "./src/firebaseConnect"),

      "@adminComponents": path.resolve(
        __dirname,
        "./src/modules/admin/components"
      ),
      "@adminRoutes": path.resolve(__dirname, "./src/modules/admin/routes.tsx"),
      "@adminContexts": path.resolve(__dirname, "./src/modules/admin/contexts"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("src/pages/products")) {
            return "page-products";
          }
          if (id.includes("src/pages/homepage")) {
            return "page-homepage";
          }
          if (id.includes("src/pages/aboutus")) {
            return "page-aboutus";
          }
          if (id.includes("src/pages/service")) {
            return "page-service";
          }
          if (id.includes("src/pages/blog") || id.includes("src/pages/blogs_info")) {
            return "page-blog";
          }
        },
      },
    },
  },
  server: {
    port: 4000,
  },
});

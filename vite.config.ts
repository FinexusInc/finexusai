import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: '/finexuswebsite/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|ico)$/.test(assetInfo.name)) {
            return `finexuswebsite/assets/images/[name]-[hash][extname]`;
          }
          return `finexuswebsite/assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'finexuswebsite/assets/[name]-[hash].js',
        entryFileNames: 'finexuswebsite/assets/[name]-[hash].js',
      },
    },
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
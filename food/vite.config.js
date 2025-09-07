// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Remove tailwindcss import from here

export default defineConfig({
  plugins: [react()],
});
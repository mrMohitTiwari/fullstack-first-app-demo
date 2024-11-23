import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: { "/api": "http://localhost:3000" },
  },
  plugins: [react()],
});
// ab hum jab bhi /api use karenge to http://localhost:3000 append ho jayega and ye proxy lga di jayegi ki jo bhi req aa rhi h wo esi url se aa rahi h

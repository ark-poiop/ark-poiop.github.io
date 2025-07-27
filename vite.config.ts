import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ⬅️  깃허브 Pages 에 배포할 때 "gh-pages" 브랜치 기준 URL 이라면 /<REPO>/ 로 변경
});

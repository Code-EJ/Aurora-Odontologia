import next from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

// Exclui artefatos gerados e aplica as regras de Next.js e TypeScript ao código do projeto.
export default defineConfig([...next, ...typescript, globalIgnores([".next/**", "next-env.d.ts"])]);

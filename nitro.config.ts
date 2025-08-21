import { defineNitroConfig } from "nitropack/config"

// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  imports: false,
  rollupConfig: {
    external: ['pg-native']
  },
  experimental: { wasm: true },
  cloudflare: { nodeCompat: true, deployConfig: true }
});

# Nitro Prisma Cloudflare issue

Please setup a suitable DATABASE_URL.

```
pnpm install
pnpm prisma generate
pnpm prisma db push
```

To run dev environment, I would recommend to comment out `runtime = "workerd"` in `prisma/schema.prisma`, and then disabling `experimental.wasm` in `nitro.config`, but right now I am focused on `workerd` runtime. Follow steps below:

```
pnpm build --preset=cloudflare_module

# have DATABASE_URL access, then run:
npx wrangler --cwd .output dev
```

Hit `/api/users`

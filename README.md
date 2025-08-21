# Nitro Prisma Cloudflare issue

Please setup a suitable DATABASE_URL.

```
pnpm install
pnpm prisma generate
pnpm prisma db push
pnpm dev
```

```
pnpm build --preset=cloudflare_module

# have DATABASE_URL access, then run:
npx wrangler --cwd .output dev
```

Hit `/api/users`
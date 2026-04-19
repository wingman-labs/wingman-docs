# Wingman Docs

Base de documentación pública de Wingman, enfocada en contenido útil con privacidad primero.

## Stack

- Astro + Starlight
- Deploy estático en Cloudflare Pages

## Desarrollo local

```bash
npm install
npm run dev
```

Build producción:

```bash
npm run build
```

Salida estática: `dist/`

## Contenido clave

- `src/content/docs/index.mdx`
- `src/content/docs/publishing-policy.mdx`
- `src/content/docs/safety-checklist.mdx`
- `src/content/docs/guides/example.md` (flujo de publicación segura)
- `src/content/docs/reference/example.md` (referencia rápida anti-doxx)

## Seguridad web (Cloudflare Pages)

Cabeceras definidas en `public/_headers`:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: DENY`
- `Permissions-Policy` restrictiva
- `Strict-Transport-Security`
- `Content-Security-Policy` restrictiva

## Deploy en Cloudflare Pages

### Opción UI (recomendada)

1. En Cloudflare Pages, crear proyecto conectado al repo GitHub.
2. Configurar:
   - Build command: `npm run build`
   - Build output: `dist`
3. Deploy.

### Opción CLI (Wrangler)

Entorno no interactivo requiere token:

- Variable: `CLOUDFLARE_API_TOKEN`
- Permisos mínimos: `Account:Read` + `Pages:Write`

Luego:

```bash
npx --yes wrangler@4.83.0 pages project list
```

## Política

Antes de publicar cualquier contenido nuevo, validar:

1. `publishing-policy`
2. `safety-checklist`

# Static cPanel Deployment

This project is configured for static Next.js export. It does not require a Node.js server in production.

## Build

From the project root, run:

```bash
rm -rf .next out
npm install
npm run build
```

The static site is generated in the `out/` directory.

## Upload To cPanel

Upload the contents of `out/` into the domain's `public_html` directory. Upload the contents of `out/` itself, not the `out` folder as a nested directory.

Before uploading, clean or back up the existing `public_html` directory. Old WordPress files, framework folders, stale route directories, or previous `.htaccess` rewrite rules can conflict with the static export and cause valid pages or static files to resolve as 403 Forbidden.

Most site images are loaded from Cloudflare R2 at `https://site-contents.aptusagency.com/bariki/`. Make sure that R2 bucket/public domain stays accessible, and make sure the cPanel upload still includes all files and folders inside `out/`, including the `_next/` folder, `.htaccess`, and any copied static files such as `favicon.ico`.

Expected structure:

```txt
public_html/
  index.html
  about/
    index.html
  contact/
    index.html
  services/
    index.html
    anti-climb-fence/
      index.html
  projects/
    index.html
  solutions/
    index.html
  _next/
    static/
```

## Recommended .htaccess

The project includes this minimal `.htaccess` in `public/.htaccess`, so it is copied into `out/` during export:

```apache
DirectoryIndex index.html
Options -Indexes

<IfModule mod_rewrite.c>
  RewriteEngine On
</IfModule>
```

If this domain is only serving the static Next.js export, remove old WordPress or framework rewrite rules from `public_html/.htaccess`.

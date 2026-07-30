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

Before uploading, clean or back up the existing `public_html` directory. Old WordPress files, framework folders, stale route directories, or previous `.htaccess` rewrite rules can conflict with the static export and cause valid pages or images to resolve as 403 Forbidden.

Make sure the upload includes all files and folders inside `out/`, including loose image files such as `hero-security.jpg`, `bariki-logo.png`, the `clients/` folder, the `_next/` folder, and `.htaccess`.

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

# markdown-pages
Minimal Markdown-based static sites in JavaScript, no server

run locally with `http-server` until we work around CORS when serving from a folder

Also an NPM package: https://www.npmjs.com/package/markdown-pages

## Usage

You'll need `marked.js` and `md-pages.js`:

```html
<link rel="stylesheet" href="https://jywarren.github.io/markdown-pages/node_modules/spectre-markdown.css/dist/markdown.css">
<script src="https://jywarren.github.io/markdown-pages/node_modules/marked/marked.min.js"></script>
```

I have a custom spreadsheet with Lora from Google Fonts, which is why my pages look nice!

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora">
<link rel="stylesheet" href="style.css">
```

Start with an `index.md`, which will serve at `/`. To add pages, just add more `.md` files, and for example `about.md` will appear at `/#about` or `/#about.md`. 

## Links

It will begin by loading `/index.md` by default. All links relative to there (`posts/4.md` for example) will have a `#` prefixed so that they are fetched and parsed into markdown for a URL format like https://jywarren.github.io/markdown-pages/#posts/4.md So it's just an extra `#` at the root level of your site.


# markdown-pages
Minimal Markdown-based static sites in JavaScript, no server

Runs easily on GitHub Pages; example: https://github.com/jywarren/seeing-lost-enclaves

Run locally with [http-server](https://www.npmjs.com/package/http-server) until we work around CORS when serving from a folder.

Also an NPM package: https://www.npmjs.com/package/markdown-pages

## Usage

Quick start: download or fork this (CC-0) template: https://github.com/jywarren/markdown-pages-template

You'll need `marked.js` and `md-pages.js` at the end of an `index.html` page in your root directory:

```html
<script src="https://jywarren.github.io/markdown-pages/node_modules/marked/marked.min.js"></script>
<script src="https://jywarren.github.io/markdown-pages/src/md-pages.js"></script>

```

Start by adding an `index.md`, which will serve at `/`. To add more pages, just add more `.md` files, so for example `about.md` will appear at `/#about` or `/#about.md`. 

## Links

Just write relative links normally, like if you have a file in your root directory named `about.md` the link to it should be `[my link](about.md)`. You can leave off the `.md` too: `[my link](about)`.

How this works: your site will start by loading `/index.md` by at your root directory. All links relative to there (`posts/4.md` for example) will have a `#` prefixed so that they are fetched and parsed into markdown for a URL format like https://jywarren.github.io/markdown-pages/#posts/4.md So it's just an extra `#` at the root level of your site. 

So when you share a link with someone else, just copy paste it -- it'll be something like https://example.com/#about

## Customizing

I have some stylesheets and the Lora font from Google Fonts, which is why my pages look nice!

```html
<link rel="stylesheet" href="https://jywarren.github.io/markdown-pages/node_modules/spectre-markdown.css/dist/markdown.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora">
<link rel="stylesheet" href="style.css">
```



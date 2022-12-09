# markdown-pages
Minimal Markdown-based static sites in JavaScript, no server

run locally with `http-server` until we work around CORS when serving from a folder


## Usage

You'll need `marked.js` and `md-pages.js`:

```html
<script src="node_modules/marked/marked.min.js"></script>
<script src="node_modules/md-pages/src/md-pages.js"></script>
```

## Link handling

It will begin by loading `/index.md` by default. All links relative to there (`posts/4.md` for example) will have a `#` prefixed so that they are fetched and parsed into markdown for a URL format like https://jywarren.github.io/markdown-pages/#posts/4.md


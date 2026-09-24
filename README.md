# Lyfe Jennings — Official Website

Source for the current Lyfe Jennings official website. This is a dependency-free static site built with semantic HTML, responsive CSS, and vanilla JavaScript.

## Run locally

No package installation is required. From the repository root, serve the `dist` directory with any static HTTP server:

```bash
python3 -m http.server 4173 --directory dist
```

Then open `http://localhost:4173`.

## Build

There is no compilation step. The production-ready site is the contents of `dist/`:

- `dist/index.html` — page structure and content
- `dist/styles.css` — responsive design and styling
- `dist/script.js` — navigation, reveal effects, and date rendering
- `dist/assets/` — approved image assets

## Deploy

Deploy `dist/` as a static site with `index.html` as the entry point. The `.openai/hosting.json` file preserves the existing OpenAI Sites project configuration; pushing to GitHub alone does not publish changes to that site unless a separate deployment integration is configured.

## Content safeguards

Use only approved Lyfe Jennings photography and verified official artwork. Do not generate or substitute his likeness, alter facial features, or reuse a photo without approval.

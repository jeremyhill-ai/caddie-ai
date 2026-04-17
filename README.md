# CaddieAI

Golf gear selector and course finder. Answer a few questions, get specific recommendations matched to play style and budget.

Static single-page app. No build step, no dependencies, no backend.

## Running locally

Any static file server works. Two quick options:

```bash
# Python
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then open `http://localhost:8000`.

## Deploying

### GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select `Deploy from a branch`.
4. Pick `main` branch and `/ (root)` folder. Save.
5. Site goes live at `https://<username>.github.io/<repo-name>/` in a minute or two.

### Vercel

1. Push to GitHub.
2. At [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other**. No build command, no output directory override needed.
4. Deploy.

### Netlify

1. Push to GitHub.
2. At [app.netlify.com/start](https://app.netlify.com/start), connect the repo.
3. Leave build command blank, publish directory as `.`.
4. Deploy.

### Cloudflare Pages

1. Push to GitHub.
2. In Cloudflare dashboard, **Workers & Pages → Create → Pages → Connect to Git**.
3. No build command, output directory `/`.
4. Deploy.

## Project structure

```
.
├── index.html       # Entry point, loads CSS and JS
├── styles.css       # All styling
├── app.js           # State, data, and render logic
├── README.md
├── LICENSE
└── .gitignore
```

## Customizing

- **Gear data** lives in the `DB` object at the top of `app.js`. Each category has its own quiz questions and three product tiers (entry/mid/premium).
- **Course data** lives in the `COURSES` array. Currently hardcoded placeholders.
- **Colors and fonts** are CSS variables at the top of `styles.css`.

## Known limitations

- Course search is a stub. The search button shows an alert, and the course list is hardcoded.
- Affiliate/shop links point to brand homepages, not specific product pages.
- No analytics or tracking wired up.

## License

MIT. See [LICENSE](./LICENSE).

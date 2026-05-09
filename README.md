# Breaking the Label — Practice

Free static IEP practice site (reading / writing / math) on GitHub Pages.

**Live site:** https://slufoot80.github.io/BreakingTheLabel-Practice/
**Practice page:** https://slufoot80.github.io/BreakingTheLabel-Practice/practice.html

## Files

- `index.html` — landing page with free preview exercise, books, SafePulse link
- `practice.html` — the practice page (3 exercise tabs, no gate)
- `styles.css` — shared styles
- `app.js` — exercises and localStorage progress

No build step. Open `index.html` in a browser to test locally.

## Deploy updates

Edit any file, then push:

```bash
cd C:\Users\frank\source\repos\BreakingTheLabel-Practice
git add .
git commit -m "your change"
git push
```

GitHub Pages redeploys in 30–60 seconds.

## Adding more exercises

All exercise content lives in `app.js`:

- **Reading**: append to `READING_ITEMS` — `{ picture: '🦋', word: 'butterfly', distractors: ['bug', 'bee'] }`
- **Writing**: append to `WRITING_ITEMS` — `{ sentence: ['Words', 'in', 'order'] }`
- **Math**: difficulty controlled by `range` constant in `renderMath()`

No JS knowledge needed beyond pasting new items into the arrays.

## Cross-promo

Both pages link to:
- The 3 books on Amazon (Breaking the Label, Biblical Wisdom, Leap of Faith)
- The SafePulse safety app at slufoot80.github.io/SafePulse/

Update the book ASINs in `index.html` if any change.

## Future: paid tier (deferred)

The site started as a $1/month Gumroad-gated product. Decision on 2026-05-09 was to launch free first to gather usage signal before charging. If you later want to add a paid tier:

1. Pick what to gate (premium exercises? parent dashboard? ad-free?)
2. Set up Gumroad membership product
3. Add a gate using whatever the simplest pattern is at the time (cookie-based access code, Stripe Checkout + Cloudflare Worker, or a real auth platform like Clerk if usage justifies it)

Don't pre-build paid infrastructure until you know users care.

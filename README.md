# Breaking the Label — Practice

Static IEP practice site (reading / writing / math) with a Gumroad-gated $1/month membership.

Lives at: TBD GitHub Pages URL once you push and enable Pages.

## Files

- `index.html` — public landing page with free preview exercise, Gumroad signup CTA, books, SafePulse link
- `practice.html` — gated practice page (3 sample exercises)
- `styles.css` — shared styles
- `app.js` — exercises, gate logic, localStorage progress

No build step. Open `index.html` in a browser to test locally.

## Setup checklist (~30 minutes)

### 1. Pick an access code

Open `app.js` and change line 6:

```js
const ACCESS_CODE = 'BTL2026';
```

This is the code every paid subscriber will type once on the practice page. Pick something easy to type (no special characters). You can rotate it later if it gets shared too widely — just push a new code, paid subs will re-enter it from their next Gumroad email.

### 2. Replace the Gumroad link

In `index.html`, find:

```
https://gumroad.com/l/REPLACE-WITH-YOUR-GUMROAD-LINK
```

Replace with your actual Gumroad product URL.

### 3. Set up the Gumroad membership

1. Sign up at gumroad.com
2. Create a new product → choose **Membership** → set price to **$1/month**
3. In the product settings, set the **post-purchase content** to something like:

   > Thanks for subscribing! Your access code is **BTL2026** (or whatever you set in step 1).
   >
   > Go to https://YOUR-GITHUB-USERNAME.github.io/BreakingTheLabel-Practice/practice.html and enter the code to start practicing.
   >
   > Cancel anytime from your Gumroad account.

4. Copy the product URL into `index.html` (step 2 above).

### 4. Push to GitHub Pages

```bash
cd C:\Users\frank\source\repos\BreakingTheLabel-Practice
git init
git add .
git commit -m "Initial scaffold"
gh repo create BreakingTheLabel-Practice --public --source=. --push
```

Then on GitHub:
1. Repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**, branch: `main`, folder: `/`
3. Save. Site goes live at `https://YOUR-USERNAME.github.io/BreakingTheLabel-Practice/` in ~1 min.

### 5. Test the flow

1. Visit the live URL, try the preview exercise (no gate)
2. Click **I have a code** → enter your access code → confirm practice loads
3. Buy your own Gumroad product (use a test card or just verify the flow with $1 of your own money) → confirm the post-purchase email contains the code
4. Try each of the three exercises end-to-end

## Things to know

**Gate is honor-system.** Anyone who views page source can find the access code. At $1/month for a kid-targeted product this is the right tradeoff — real auth would cost more in dev time than a year of subscription leakage. Rotate the code if it ever shows up in a Reddit thread.

**GitHub Pages free tier technically prohibits commercial sites** (per GitHub TOS). They rarely enforce this, but be aware. If the project takes off, switch hosting to Cloudflare Pages or Netlify (same git workflow, both allow commercial use). The code in this repo is hosting-agnostic.

**Progress saves per-device.** Kid practices on a school Chromebook → progress doesn't follow them home. Acceptable for v1; consider adding a simple cloud sync later if usage justifies it.

## Adding more exercises

All exercise content lives in `app.js`:

- Reading: `READING_ITEMS` array — add `{ picture: '🦋', word: 'butterfly', distractors: ['bug', 'bee'] }`
- Writing: `WRITING_ITEMS` array — add `{ sentence: ['Words', 'in', 'order'] }`
- Math: difficulty controlled by `range` constant in `renderMath()`

No JS knowledge needed beyond pasting new items into the arrays.

## Cross-promo

Both pages already link to:
- The 3 books on Amazon (Breaking the Label, Biblical Wisdom, Leap of Faith)
- The SafePulse safety app at slufoot80.github.io/SafePulse/

Update the book ASINs in `index.html` if any change.

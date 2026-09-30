# images/

Drop Deb's real photos in this folder. **No code changes needed** — the site
already points at these filenames. Until a file exists, that piece shows a
neutral "photo coming soon" panel with its title.

> **Why there are no stock photos any more.** Earlier drafts filled the gaps
> with Unsplash photographs. On an artist's portfolio that means showing
> someone else's work under Deb's name — so the fallbacks were removed. Gaps
> now read honestly as *not shot yet*.

## The filenames the site is already looking for

Save each photo here using the **exact** name below. Case matters on GitHub's
servers even though it doesn't on Windows.

### Paintings

| Filename | Shown as |
|---|---|
| `painting-01.jpg` | Far North — Oil on canvas · 36 × 36 in · $1,495 |
| `painting-02.jpg` | Meadow's Edge — Oil on panel · 24 × 30 in · $895 |
| `painting-03.jpg` | Late Launch — Oil on canvas · 9.5 × 9.5 in, framed · $295 |
| `painting-04.jpg` | Beach Days — Oil on canvas · 9.5 × 9.5 in, framed · $295 |
| `painting-05.jpg` | Woodland Welcome — Oil on canvas · 24 × 36 in · $895 |
| `painting-06.jpg` | Gold Splendor — Oil on canvas · 9.5 × 9.5 in, framed · $295 |
| `painting-07.jpg` | Lake Life — Oil on canvas · 9.5 × 9.5 in, framed · $295 |
| `painting-08.jpg` | Sailor's Delight — Oil on canvas · 25 × 32 in, framed · $995 |
| `painting-09.jpg` | Woodland Allegory — Oil on canvas · 13 × 13 in, framed · $395 (sold) |
| `painting-10.jpg` | Dreaming of Summer — Oil on canvas · 24 × 36 in · $895 |
| `painting-11.jpg` | Color of Light — Oil on canvas · 13 × 13 in, framed · $395 |
| `painting-12.jpg` | Distant Song — Oil on canvas · 13 × 13 in, framed · $395 (sold) |
| `painting-13.jpg` | Muse — Oil on canvas · 21.5 × 21.5 in, framed · $695 |

### Jewelry

| Filename | Shown as |
|---|---|
| `jewelry-pendant.jpg` | Untitled Pendant — Materials to be confirmed |
| `jewelry-earrings.jpg` | Untitled Earrings — Materials to be confirmed |
| `jewelry-cuff.jpg` | Untitled Cuff — Materials to be confirmed |
| `jewelry-brooch.jpg` | Untitled Brooch — Materials to be confirmed |
| `jewelry-necklace.jpg` | Untitled Necklace — Materials to be confirmed |
| `jewelry-ring.jpg` | Untitled Ring — Materials to be confirmed |

**Every title, material and description is a placeholder.** The previous draft
carried invented titles and descriptions (an ocean theme: "Tide Memory",
"Estuary", "sea glass") that did not match Deb's actual landscape practice.
Replace them with her real details — see below.

## Editing the text (title, materials, description)

Everything lives in the `works` array at the top of `script.js`:

```js
{id:1,cat:'painting',title:'Untitled I',info:'Oil on canvas · dimensions to be confirmed',
 desc:'Placeholder — Deb’s description to come.',
 img:'images/painting-01.jpg',fallback:'',sold:false},
```

- `title` — the name of the piece
- `info` — the line under the title, e.g. materials and dimensions
- `desc` — the paragraph shown in the lightbox
- `img` — path to the photo in this folder
- `fallback` — **leave as `''`**. Only fill this in with a *real* photo of Deb's
  work; putting a stock image here displays someone else's artwork as hers.
- `sold` — `true` marks the piece sold (fills in the dot)

## Adding a new piece

Copy an existing entry, change the values, and use an `id` no other work is
using. `cat` must be `'painting'` or `'jewelry'` — that's what the filters and
the Jewelry nav link use.

## Two photos the HTML points at directly

These aren't in the `works` array — they're set in `index.html`:

| Where | Find this in index.html | Drop in |
|---|---|---|
| Hero (top right) | `class="hero-image img-missing"` | a photo, then remove `img-missing` and add `<img src="images/hero.jpg" alt="">` inside |
| About (portrait) | `class="about-image-wrap img-missing"` | same pattern with `images/portrait.jpg` |

## Sizing — please don't skip this

Full-resolution camera files make the site slow and can blow past GitHub's
limits. Resize before committing:

| Where it appears | Long edge | Target size | Format |
|---|---|---|---|
| Gallery / lightbox | 1600 px | 250–550 KB | JPEG quality ~80, or WebP |
| Hero image | 2000 px | 350–650 KB | JPEG quality ~80, or WebP |

Detailed brushwork compresses poorly, so paintings will sit at the upper end of these ranges–a dense canvas detail at 1600 px is around 450–550 KB. Prefer the higher quality over the smaller file: the work is the point of the site.

Also set the **color profile to sRGB** and strip the camera's GPS/location EXIF
data before publishing. Most photo editors can do both on export.

## Hard limits

GitHub Pages is a static host with real limits:

- Individual file over **100 MB** → the push is rejected
- Repo over **1 GB** → warnings, then failures

Keep the total image payload well under a few hundred MB. If the portfolio
outgrows that, move the photos to object storage (Cloudflare R2, Backblaze B2)
and point `img` at the URL instead — nothing else on the site needs to change.

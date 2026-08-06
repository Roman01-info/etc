# Task: Detailed Itinerary Visual Timeline Upgrade

## Steps
- [x] 1. Add `icon` + `image` fields to each itinerary item in `src/app/data/destinations.js` (all 4 packages)
- [x] 2. Rebuild the Detailed Itinerary section in `src/app/packages/[id]/page.js` into a card-based grid with hover-zoom images, day badges, activity icons, and location indicators
- [x] 3. Configure `next.config.mjs` to allow `images.unsplash.com` for `next/image`
- [x] 4. Add per-day `highlights` (bullet points) to every itinerary item
- [x] 5. Render highlights with ✅ check icons in the DayCard
- [x] 6. Verify build/dev renders correctly

## Feedback Round 1 (Mobile-first + single CTA)
- [x] Remove per-card CTA buttons; add a **single** "Book This Package Now" CTA at the end of the itinerary section
- [x] Mobile/tablet: replace horizontal-scroll cards with **accordion** day panels (only the chosen day expands)
- [x] Add `loading="lazy"` to all `next/image` itinerary images for lazy loading
- [x] Desktop: keep 2-column card grid with hover effects
- [x] Verify /packages/maldives renders (HTTP 200, no errors)

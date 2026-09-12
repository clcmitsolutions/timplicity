TIMPLICITY — REDESIGN
======================

Every photo on the site currently shows a placeholder (a warm tan
square with a camera icon). To swap in your own pictures:

1. Add your image files into: assets/images/
   (jpg or png both work fine — keep file sizes reasonable, under ~500KB
   each, so pages load quickly.)

2. In each HTML file, find the <img src="assets/images/placeholder.svg" ...>
   tag you want to replace, and change the src to your file, e.g.:

     <img src="assets/images/hero-dish.jpg" alt="Our signature mussel pot">

   The "alt" text already describes what each photo should show
   (hero dish, dining room, Tim, Rochelle, buffet spread, gallery
   shots, etc.) — use that as a guide for which photo goes where.

3. Photos will automatically crop to fit their frame (the CSS uses
   object-fit: cover), so don't worry about getting the exact aspect
   ratio right — just pick a good, well-lit shot.

Where the placeholders appear:
- index.html    → hero dish, dining room + food close-up, buffet, 6 gallery thumbnails
- about.html    → restaurant exterior/interior, Tim, Rochelle
- gallery.html  → 9 gallery photos
- menu.html     → 1 buffet photo

Also worth updating before launch:
- contact.html  → replace the "Add your phone number" link (tel:+27000000000)
  with your real number
- Confirm the email address (hello@timplicity.co.za) is correct
- The booking form is a visual demo only — it shows a confirmation
  message but doesn't send anywhere yet. Wire it up to an email
  service, a booking tool, or a backend of your choice to go live.

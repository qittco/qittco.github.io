# yancarlo.com - a portfolio you can actually learn from

Hey, Yan here! 

This is my personal portfolio and a little experiment in building the web **the old-fashioned (and still very good) way**: HTML for meaning, CSS for appearance, and JavaScript for the extras.

No build tools. No subscriptions. No npm install. No framework. Just files you can open and understand.

## What's in here?

| File | What it does |
| --- | --- |
| `index.html` | All the actual content and semantic page structure |
| `styles.css` | Layouts, colors, responsive styles, and the light/dark themes |
| `script.js` | Theme switching, the semantic-HTML teaching mode, and an automatic copyright year |
| `favicon.svg` | A tiny custom `y.` icon for browser tabs |
| `og-card.png` | A social sharing image (it does not slow down the page itself) |
| `404.html` | A friendly page for broken or missing links |
| `robots.txt` | Tells search crawlers they can visit the site |
| `sitemap.xml` | Points search engines to the homepage |

## Try it on your own computer

The simplest way is to **double-click `index.html`**. The CSS and JavaScript have relative paths (`./styles.css` and `./script.js`), so they can load even from a local folder.

For a preview that behaves more like a real website, you can also start a tiny local web server in this folder:

```bash
python3 -m http.server 8000
```

Then visit **http://localhost:8000**.

Don't have Python? In VS Code, you can use a local-server extension or another HTTP server. The important part is serving the folder at the root of a site.

## Launch it on GitHub Pages

1. Put these files **at the root** of the repository that GitHub Pages publishes. Don't upload the ZIP itself.
2. In the repository settings, open **Pages** and choose **Deploy from a branch**, then your intended branch and `/ (root)` folder, if that is your hosting setup.
3. Set `yancarlo.com` as the custom domain, following GitHub's DNS instructions.
4. Turn on **Enforce HTTPS** when GitHub makes it available.
5. Visit `https://yancarlo.com/` and test navigation, both theme modes, and the teaching-mode button.

**Heads-up:** The CSS and JavaScript files use relative paths, so they also work when previewed locally. The published site is configured for **`https://yancarlo.com/`** in its canonical URL, sitemap, and metadata. Update those if you publish on a different domain or repository subpath.

## A few things I will likely customize next

- **Projects:** Replace the "details coming soon" descriptions with actual case studies and add links *only after those pages are ready on my older school acount*. Work-related code should stay private when necessary.
- **Contact:** Add a real email with my donain or professional profile once it's ready. I deliberately didn't invent a contact address or broken link as github is good enough for now.
- **Social sharing:** The included `og-card.png` is a real social preview image. Swap it when you have a photo or design you like better, and keep its URL in the page metadata up to date.
- **Content:** Keep the copy true to what I am doing, update the projects as they evolve, and add actual tutorial pages when they're written.

## The decisions behind the design

I left comments throughout the HTML, CSS, and JavaScript. Some of the decisions worth noticing:

- **Semantic HTML:** Real `<main>`, `<nav>`, `<section>`, and `<article>` elements tell browsers and assistive technology what each part means.
- **Keyboard-friendly:** There's a visible-on-focus skip link, obvious focus styles, native buttons, and links that work without JavaScript.
- **Responsive:** CSS grids become single columns as the screen gets smaller; nobody gets an awkward sideways page.
- **Accessible motion:** The site respects `prefers-reduced-motion`. Hover effects are bonuses, not requirements.
- **Light/dark:** It starts with the visitor's system preference, remembers a choice when browser storage is available, and doesn't fail if storage is blocked.
- **Progressive enhancement:** If `script.js` fails, the content remains readable and the core navigation works. JavaScript-only controls stay hidden.
- **No fake project links:** It's better to say a case study is coming than to send somebody to a 404.
- **No external fonts or libraries:** Fewer dependencies mean a fast, private, easier-to-maintain site.


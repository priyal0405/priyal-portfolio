# Priyal Jain · Portfolio

**Live site: [priyaljain.in](https://priyaljain.in/)**

The personal portfolio of Priyal Jain, a student at Delhi Public School, R. K. Puram, exploring Artificial Intelligence, FinTech, technology-driven innovation and music.

The site is plain HTML, CSS and a little JavaScript, with no frameworks and no build step. It is hosted for free on GitHub Pages.

---

## What's on the site

| Page | File | What it shows |
|---|---|---|
| Home | `index.html` | Introduction, photo, highlight cards, a favourite quote, and the **About Me** and **Skills** pop-ups |
| Achievements | `achievements.html` | A card for every achievement, newest first |
| Achievement pages | `achievement-*.html` | One page per achievement, with the full story, photos and videos |
| Blog | `blog.html` | Blog posts (the posts themselves live in `posts.js`) |
| Diwali Photos | `blog-diwali-photos.html` | Photo album that goes with the Diwali blog post |
| My Stories | `stories.html` | Writing and poetry (the pieces live in `stories.js`) |

Any photo or video on the achievement pages and the photo album can be clicked to see it enlarged (`zoom.js`).

---

## Folder structure

```
priyal-portfolio/
├── index.html                  Home page
├── achievements.html           List of achievements
├── achievement-*.html          One page per achievement
├── blog.html                   Blog page
├── posts.js                    ← blog posts are written here
├── blog-diwali-photos.html     Diwali photo album
├── stories.html                My Stories page
├── stories.js                  ← stories and poems are written here
├── style.css                   All the styling (colours, fonts, layout)
├── zoom.js                     Click-to-enlarge for photos and videos
├── background.jpg              Brown wave background
├── CNAME                       Tells GitHub Pages to use priyaljain.in
├── images/                     ← ALL photos go here
├── videos/                     ← ALL videos go here
└── docs/                       PDFs (e.g. newspaper clippings)
```

> **Important:** pages look for photos inside the `images` folder and videos inside the `videos` folder. A photo uploaded anywhere else (for example, the main folder) will show up as a broken image.

---

## How to update the site

### Add a blog post
1. Open `posts.js`.
2. Copy the example at the top and paste it just under `const posts = [`.
3. Fill in the `title`, `date` (`YYYY-MM-DD`) and `text`.

Inside the text:
- Leave an empty line between paragraphs.
- Start a paragraph with `## ` to make it a section heading.
- Add a photo on its own line: `[photo: images/name.jpg | Caption]`
- Add a link on its own line: `[link: page.html | Link text]`

Posts are sorted by date automatically, newest first.

### Add a story or poem
1. Open `stories.js`.
2. Copy the example at the top and paste it just under `const stories = [`.
3. Fill in the `type` (e.g. `Story`, `Poem`, `Reflection`, `Humour`), `title`, `date` and `text`.
4. Optional: add `image: "images/name.jpg"` to show a picture under the title.

Line breaks are kept exactly as typed, so poems keep their shape. The newest story also appears on the **My Stories** card on the home page.

### Add an achievement
1. In `achievements.html`, copy one `<article>` block and change the date, label, title and summary.
2. Make a copy of an existing `achievement-*.html` page for the full story, and point the card's **Learn more** link to it.

### Photos and videos
- Resize big phone photos to about 1200 px on the longest side before uploading, so pages load quickly.
- Use simple file names: lowercase, no spaces, e.g. `annual-concert-2026.jpg`.
- Videos should be H.264 `.mp4` files.

---

## Publishing changes

1. On GitHub, go to the right folder first (the main folder, `images` or `videos`).
2. Click **Add file → Upload files**, drag the files in, and click **Commit changes**.
3. GitHub publishes the site automatically. Wait 1–2 minutes, then open [priyaljain.in](https://priyaljain.in/) and press **Ctrl + F5** to see the update.

### If an update doesn't appear
- **Check the Actions tab.** Each upload starts a run called *pages build and deployment*. A green ✅ means it's live; a red ❌ means GitHub failed to publish it.
- **If it failed**, open the run and click **Re-run jobs → Re-run all jobs**. These failures are usually on GitHub's side (check [githubstatus.com](https://www.githubstatus.com/)).
- **If photos are broken**, make sure they were uploaded into the `images` folder, not the main folder.
- **If everything looks huge or tiny**, the browser may be zoomed. Press **Ctrl + 0** to reset it.

---

## Design

- **Colours:** warm brown theme on a layered-wave background, with cream text and caramel accents.
- **Fonts:** [Oswald](https://fonts.google.com/specimen/Oswald) for headings and [Inter](https://fonts.google.com/specimen/Inter) for body text, from Google Fonts.
- **Layout:** works on laptops, tablets and phones.

---

## Hosting

- Hosted on **GitHub Pages** from the `main` branch.
- Custom domain **priyaljain.in**, registered with GoDaddy. Its DNS points to GitHub Pages, and the `CNAME` file in this repository keeps the domain connected. Don't delete `CNAME`.

---

© 2026 Priyal Jain. All rights reserved. The writing, photos and videos on this site are personal and may not be reused without permission.

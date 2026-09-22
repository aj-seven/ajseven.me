---
title: "From Vite to Astro"
description: "Why I rebuilt my portfolio with Astro and what I learned during the migration."
image: "/assets/blog/from-vite-to-astro.webp"
date: "2026-09-21"
---

I originally built my personal website with **React and Vite** because it was the stack I was most comfortable using. It was fast to build, easy to maintain, and worked perfectly for a highly interactive portfolio.

However, over time I decided I wanted to add a blog. That's when I started looking at Astro.

## Why Astro?

The primary reason for the switch was Astro's incredible built-in support for Markdown (`.md`) files. I wanted an effortless way to write and publish blog posts without needing to set up a complex CMS or write custom markdown parsers in React.

Additionally, most of my portfolio doesn't change often, so it made more sense to generate static pages ahead of time rather than forcing the browser to render everything on the client-side.

Astro allows me to keep using React exactly where I need it (for complex, interactive UI components) while serving the rest of the site as pure, lightweight HTML. That was exactly the hybrid approach I was looking for.

## The Migration

Moving everything over wasn't entirely seamless, and I ran into a few interesting challenges:

First, some of my React components threw hook errors due to dependency version mismatches. Locking React and React DOM to the exact same version fixed most of those issues.

Second, a few of my interactive components depended on browser APIs (like `window`). To fix this, I instructed Astro to only render those specific components on the client-side using its `client:only` integration.

The last issue was styling the Markdown posts themselves. Tailwind wasn't scanning my new `.astro` and Markdown files, so none of the typography styles were being generated. After updating my `tailwind.config.mjs` content paths and adding the Tailwind Typography plugin, everything rendered beautifully.

## The Result

The website now loads significantly faster, the blog is generated as pure static HTML, and writing new posts is as simple as dropping a Markdown file into a folder.

I still get to use React for the complex, interactive parts, while Astro efficiently handles all the static content generation.

Overall, I'm incredibly happy I made the switch. It gave me a cleaner architecture, better performance, and an elegant way to publish technical articles going forward.
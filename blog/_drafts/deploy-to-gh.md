---
title: Deploying a Next.js site to GitHub Pages
tags: ["front end"]
---

This site you're currently looking at was created using [Next.js](https://nextjs.org/) and hosted on [GitHub Pages](https://pages.github.com/). In this article, I'd like to go over the whys and hows of creating this website.

## Why GitHub pages?

This website was meant to showcase my skills, both in terms of the code underlying the website as well as the projects featured within it. I don't expect much traffic, and there's no need for a server to handle user data or dynamically manage information. In addition, a static site has the benefit of being easier to develop for and being more performant for the user.

Since I intended the source code to be available on GitHub, it was natural to use the hosting service provided by them. While I could have also registered a domain name, I couldn't justify paying for the service.

## Choosing a front end framework

Since I was learning (and still am learning) React at the time of inception, I wanted to try out a static site generator based on the React framework. This ruled out Jekyll, which had built-in support for GitHub Pages. Looking at existing frameworks, it seemed like Gatsby and Next.js were the popular choices. In the end, I chose Next.js for the following reasons:

- Flexibility

  Gatsby is a static-site generator, while Next.js can also handle client and server-side rendering. While Next.js would take more effort to learn upfront, I felt it might be worthwhile in the long run.

- Lack of reliance on plugins

  While Gatsby comes with an extensive plugin platform, I found many users complaining about the hassle of having to learn and configure each plugin.

- Developer sentiments

  I saw many comments from developers that seemed to be happy to have moved from Gatsby to Next.js.

It's likely I would have been just as happy with Gatsby as I would be with Next.js. The points I mentioned above were enough to nudge me towards Next.js, and I was eager to move on to actually creating the website.

## Hosting the website on GitHub Pages

The Next.js source code can't be directly used by the browser. Instead, the site files need to be built using `next build`, which generates an optimized version of the website for use.

Thankfully, GitHub provides a service called GitHub actions, which can automatically build the site files on their servers and deploy the files for viewing on a browser every time the Next.js source is updated. The action workflow can be customized as necessary, but GitHub provides some pre-defined Actions for common libraries including Next.js.

The thought process and steps I went through above are quite rudimentary. It's meant as a note-to-self on some things I learned, but hopefully, it'll be of help to someone starting out on creating a static website on GitHub Pages.

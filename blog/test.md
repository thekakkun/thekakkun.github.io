---
title: Two Forms of Pre-rendering
date: 2020-01-01
food: Pizza
tags: [foo, bar, baz]
---

## hello world

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js let's you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

And here's some code

```js
import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";

import { remark } from "remark";
import html from "remark-html";
import remarkFrontmatter from "remark-frontmatter";

const postsDirectory = path.join(process.cwd(), "blog");

export async function getSortedPostsData() {
  const fileNames = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((entry) => !entry.isDirectory());

  const allPostsData = await Promise.all(
    fileNames.map(async (entry) => {
      let fileName = entry.name;
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.promises.readFile(fullPath, "utf8");

      let data;
      await remark()
        .use(remarkFrontmatter, ["yaml"])
        .use(() => (tree) => {
          data = { id, ...yaml.load(tree.children[0].value) };
        })
        .process(fileContents);

      return data;
    })
  );

  return JSON.stringify(
    allPostsData.sort(({ date: a }, { date: b }) => (a < b ? 1 : -1))
  );
}

export function getAllPostIds() {
  const fileNames = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((entry) => !entry.isDirectory());

  return fileNames.map((entry) => {
    return {
      params: {
        id: entry.name.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  let data;

  const processedContent = await remark()
    .use(remarkFrontmatter, ["yaml"])
    .use(() => (tree) => {
      data = { id, ...yaml.load(tree.children[0].value) };
    })
    .use(html)
    .process(fileContents);
  const contentHtml = processedContent.toString();
  data.contentHtml = contentHtml;

  return JSON.stringify(data);
}
```

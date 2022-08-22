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

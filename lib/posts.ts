import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";

import { remark } from "remark";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify/lib";
import { Root } from "hast";
import { YAML } from "mdast";

export interface PostInfo {
  id: string;
  title: string;
  tags: string[];
  date?: string;
}

export interface PostData extends PostInfo {
  contentHtml: string;
}

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

      let data!: PostData;
      await remark()
        .use(remarkFrontmatter, ["yaml"])
        .use(() => (tree: Root) => {
          const meta = tree.children[0] as unknown as YAML;
          data = {
            id,
            ...(yaml.load(meta.value) as object),
          } as PostData;
        })
        .process(fileContents);

      return data;
    })
  );

  return JSON.stringify(
    allPostsData.sort(({ date: a = "" }, { date: b = "" }) => (a < b ? 1 : -1))
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

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  let data!: PostData;

  const processedContent = await remark()
    .use(remarkFrontmatter, ["yaml"])
    .use(() => (tree: Root) => {
      const meta = tree.children[0] as unknown as YAML;
      data = {
        id,
        ...(yaml.load(meta.value) as object),
      } as PostData;
    })
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(fileContents);
  const contentHtml = processedContent.toString();
  data.contentHtml = contentHtml;

  return JSON.stringify(data);
}

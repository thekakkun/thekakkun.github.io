import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";

import { remark } from "remark";
import remarkFrontmatter from "remark-frontmatter";

const postsDirectory = path.join(process.cwd(), "blog");

getSortedPostsData();

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

  allPostsData.map((data) => Object.assign(data, { date: data.date.toJSON() }));

  return allPostsData.sort(({ date: a }, { date: b }) => (a < b ? 1 : -1));
}

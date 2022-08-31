---
title: "Converting Markdown Files into HTML"
date: 2022-8-25
tags: ["front end", "markdown"]
---

These blog posts are written in Markdown and converted into HTML using the [unified ecosystem](https://unifiedjs.com). This particular post isn't really meant to describe how it's being done. This post really only exists so that I can check if things are working correctly, and the CSS styles look like I want them to.

The basic processing steps and plugins used are as follows:

1. [remark](https://github.com/remarkjs/remark):

   Transform markdown content into structured data.

2. [remark-frontmatter](https://github.com/remarkjs/remark-frontmatter):

   Metadata for the post is written in the [front matter](https://jekyllrb.com/docs/front-matter/). Parse the YAML data.

3. [remark-rehype](https://github.com/remarkjs/remark-rehype):

   Turn markdown into HTML.

4. [rehype-highlight](https://github.com/rehypejs/rehype-highlight):

   Apply syntax highlighting to code blocks

5. [rehype-stringify](https://github.com/rehypejs/rehype/tree/main/packages/rehype-stringify):

   Turns the structured data from remark and turns it into HTML.

In the actual code, it's implemented like so:

```js
const processedContent = await remark()
  .use(remarkFrontmatter, ["yaml"])
  .use(() => (tree) => {
    data = { id, ...yaml.load(tree.children[0].value) };
  })
  .use(remarkRehype)
  .use(rehypeHighlight)
  .use(rehypeStringify)
  .process(fileContents);
```

And now, for some random markdown to test CSS styling.

## This is a header

### And this is a sub-header

## Simple text styles

_This text is in italics._

**This text is in bold.**

**_This text is in both._**

and here's some `code()`.

## Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquam ultricies. Donec maximus ligula eros, et tincidunt nisi consequat non. Cras tempor, felis at ultrices tristique, nisi magna semper libero, vel tincidunt est justo sed augue. Suspendisse porta massa nec est posuere, eget ornare felis congue. Integer imperdiet nisi vel sodales vestibulum. Vestibulum vitae magna id lorem cursus facilisis vel at dolor. In sed lacus dolor.

Donec at mollis sem. Aliquam odio dui, posuere id convallis sed, tristique at enim. Morbi varius mollis risus, sit amet hendrerit urna placerat ut. Sed congue vel diam nec semper. Mauris fringilla massa non tellus euismod feugiat. In ac vulputate velit. Etiam eget purus vitae mauris luctus rhoncus. Vivamus a tempus mauris. Maecenas vel tristique sapien, non semper arcu. Morbi aliquet pharetra nibh id sollicitudin. Integer non magna nec massa pretium luctus. Praesent accumsan metus tincidunt dui efficitur semper. Quisque mollis, lacus vitae convallis elementum, libero augue dictum risus, rutrum mollis ipsum neque quis ligula. Maecenas id mauris urna. Donec maximus condimentum libero ultrices tempus.

> In quis neque id neque bibendum iaculis. Integer elementum sapien eget eros aliquam, at tincidunt diam sollicitudin. Curabitur luctus tortor vel massa malesuada, non hendrerit lectus interdum. Proin sit amet metus sit amet lectus rhoncus lacinia eu sed nisl. Ut quis aliquet neque. Duis tristique lacinia tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
>
> > Cras commodo ligula facilisis convallis accumsan. Nunc venenatis mollis nibh, ut molestie ligula commodo non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc scelerisque consequat elementum. Sed tincidunt mattis dolor, eu iaculis nisi. Proin semper consequat nulla quis vulputate. Nam vitae hendrerit diam, at mollis lorem.

## Lists

### Unordered lists

- Item
- Item
- Another item

### Ordered lists

1. Item one
2. Item two
3. Item three

### Sublists

1. Item one
2. Item two
3. Item three
   - Sub-item
   - Sub-item
4. Item four
5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquam ultricies. Donec maximus ligula eros, et tincidunt nisi consequat non. Cras tempor, felis at ultrices tristique, nisi magna semper libero, vel tincidunt est justo sed augue. Suspendisse porta massa nec est posuere, eget ornare felis congue. Integer imperdiet nisi vel sodales vestibulum. Vestibulum vitae magna id lorem cursus facilisis vel at dolor. In sed lacus dolor.

   Donec at mollis sem. Aliquam odio dui, posuere id convallis sed, tristique at enim. Morbi varius mollis risus, sit amet hendrerit urna placerat ut. Sed congue vel diam nec semper. Mauris fringilla massa non tellus euismod feugiat. In ac vulputate velit. Etiam eget purus vitae mauris luctus rhoncus. Vivamus a tempus mauris. Maecenas vel tristique sapien, non semper arcu. Morbi aliquet pharetra nibh id sollicitudin. Integer non magna nec massa pretium luctus. Praesent accumsan metus tincidunt dui efficitur semper. Quisque mollis, lacus vitae convallis elementum, libero augue dictum risus, rutrum mollis ipsum neque quis ligula. Maecenas id mauris urna. Donec maximus condimentum libero ultrices tempus.

## Horizontal rule

---

## GitHub flavored markdown

### Footnote

A note[^1]

[^1]: Big note.

### Strikethrough

~one~ or ~~two~~ tildes.

### Table

| Col1         |   Col2   |          Col3 |
| :----------- | :------: | ------------: |
| Left-aligned | Centered | Right-aligned |
| blah         |   blah   |          blah |

### Tasklist

- [ ] to do
- [x] done

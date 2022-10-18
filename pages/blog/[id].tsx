import Head from "next/head";

import Article from "../../components/layout/article";
import Layout from "../../components/layout/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>Hiroto Kaku - {postData.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Article {...postData}>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </Article>
    </>
  );
}

Post.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = JSON.parse(await getPostData(params.id));
  return {
    props: {
      postData,
    },
  };
}

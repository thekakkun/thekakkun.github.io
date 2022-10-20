import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Article from "../../components/layout/article";
import { PostData, getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }: { postData: PostData }) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const postData = JSON.parse(await getPostData(params.id as string));
    return {
      props: {
        postData,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

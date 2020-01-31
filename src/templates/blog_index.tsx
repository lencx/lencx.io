/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @author: lencx
 * @create_at: Jan 23, 2020
 */

import React from 'react';
import { graphql } from 'gatsby';
import PostLayout from '~layout/post';
import { PostOverview, BlogIndexTemplateProps } from '~comps/post';
const { defaultLanguage } = require('../../config');

export default function BlogIndexTemplate(props: BlogIndexTemplateProps) {
  const data = props.data.allMdx.nodes;
  // console.log(`[23] post.tsx: `, props);
  return (
    <PostLayout>
      {data.map(item => {
        return (
          item.fields.lang === defaultLanguage && (
            <PostOverview key={item.id} dataSource={item} />
          )
        );
      })}
    </PostLayout>
  );
}

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        frontmatter {
          category
          date(formatString: "MMMM DD, YYYY")
          readtime
          spoiler
          tags
          title
          type
          readtime
        }
        fields {
          slug
          directoryName
          lang
        }
      }
    }
  }
`;

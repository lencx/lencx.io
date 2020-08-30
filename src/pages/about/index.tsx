/**
 * @author: lencx
 * @create_at: Jan 25, 2020
 */

import React from 'react';
import Layout from '~layout/post';
import SEO from '~common/seo';

import styles from './about.mod.scss';

const BASE_API_URL = 'https://lencx-stats.vercel.app/api';
const GITHUB_URL = 'https://www.github.com/lencx';

interface LinkItem {
  name?: string;
  link?: string;
  desc?: string;
}

interface ProjectCardProps {
  url: string;
  type?: 'pins' | 'stats' | 'langs';
  repo?: string;
  alt?: string;
}

export function LinkItems({
  dataSource,
  linkKey = 'name',
}: {
  linkKey?: 'name' | 'desc';
  dataSource: LinkItem[];
}) {
  return (
    <div>
      {dataSource.map((item: any, idx) => {
        const renderTxt = (val: any = '') => {
          if (!val) return null;
          return linkKey === val ? (
            <a href={item.link}>{item[val]}</a>
          ) : (
            <span>{item[val]}</span>
          );
        };
        return (
          <p className={styles.proj_item} key={`${item.name}-${idx}`}>
            {renderTxt('name')}
            {': '}
            {renderTxt('desc')}
          </p>
        );
      })}
    </div>
  );
}

export function ProjectCard(props: ProjectCardProps) {
  let url;
  switch (props.type) {
    case 'langs':
      url = `${BASE_API_URL}/top-langs/?username=lencx&layout=compact&theme=calm`;
      break;
    case 'stats':
      url = `${BASE_API_URL}/?username=lencx&theme=calm&show_icons=true`;
      break;
    default:
      url = `${BASE_API_URL}/pin/?username=lencx&theme=calm&repo=${props.repo}`;
  }
  return (
    <a className={styles.proj_card} href={props.url}>
      <img src={url} alt={props.alt || props.type || props.repo} />
    </a>
  );
}

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <h3>About Me</h3>
      <code>
        &nbsp;Life’s attitude to you depends on your attitude to it.&nbsp;
      </code>
      <LinkItems
        linkKey="desc"
        dataSource={[
          {
            name: 'GitHub',
            desc: 'lencx',
            link: 'https://github.com/lencx/nofwl',
          },
          {
            name: 'Email',
            desc: 'cxin1314@gmail.com',
            link: 'mailto:cxin1314@gmail.com?subject=NoFWL',
          },
        ]}
      />
      <h3>Project</h3>
      <ProjectCard url={GITHUB_URL} type="stats" />
      {/* <br />
      <ProjectCard url={`${GITHUB_URL}/deno-example`} repo="deno-example" />
      <ProjectCard url={`${GITHUB_URL}/nofwl`} repo="nofwl" />
      <ProjectCard url={`${GITHUB_URL}/deno-getfiles`} repo="deno-getfiles" />
      <ProjectCard url={`https://music.nofwl.com`} repo="music" /> */}
    </Layout>
  );
}

import Hero from '../components/Hero'
import Featured from '../components/Featured';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Cursor from '../components/CustomCursorTwo';
import { Fragment } from 'react';

export const revalidate = 60;

const query = groq`
*[_type == "post"] | order(number, desc)[0..6]{
  ...,
  number,
  publishedAt,
  categories[]->,
  body[],
  "playbackId": video.asset->playbackId,
  }`;

export default async function Page({}) {

  const posts = await client.fetch(query);

  return (
    <Fragment>
      <Cursor />
      <div>
        <Hero
          heading="Hi, thanks for visiting my portfolio that focuses on UX / UI Design."
          message="I'm a UK-based UX / UI designer with 20+ years of experience in branding, corporate, and UX/UI. My design passion has fuelled a diverse career. I honed leadership, presentation, and client-facing skills, collaborating with developers and managing budgets to deliver successful projects on tight deadlines. I help clients solve communication challenges and craft exceptional online experiences that users love."
          subheading="Featured Projects"
          />
      </div>
        <Featured posts={posts} />
    </Fragment>
  )
}
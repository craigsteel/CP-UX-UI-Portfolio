import Hero from '@/app/components/Hero'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import AllProjects from '@/app/components/AllProjects'
import Cursor from '@/app/components/CustomCursorTwo';
import { Fragment } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Projects',
  },
}
const query = groq`
  *[_type == "post"] | order(number, desc){
  ...,
  number,
  publishedAt,
  categories[]->,
  body[],
  }`;

export const revalidate = 60;
export default async function Projects() {

  const posts = await client.fetch(query);

  return (
    <Fragment>
      <Cursor />

        <Hero
          heading='UX / UI Projects'
          message='A selection of completed e-commerce, and business Website that generate business leads and increase conversions.'
          subheading=''>
        </Hero>

        <section className='flex z-1 min-h-screen md:mx-20 md:p-10'>
          <AllProjects posts={posts} />
        </section>
      </Fragment>
    )

}
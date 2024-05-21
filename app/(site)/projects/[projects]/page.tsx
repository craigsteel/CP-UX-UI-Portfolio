import Hero from '@/app/components/Hero'
import { groq } from 'next-sanity'
import { client } from '../../../../sanity/lib/client'
import AllProjects from '@/app/components/AllProjects'
const query = groq`
  *[_type == "post"] | order(number, desc){
  ...,
  number,
  publishedAt,
  categories[]->,
  body[],
  }`;


export default async function Projects() {

  const posts = await client.fetch(query);
  // console.log(posts)
    return (
      <div>
        <Hero
          heading='UI/UX Projects'
          message='A selection of completed e-commerce, and business Website that generate business leads and increase conversions.'
          subheading=''
        />

        <section className='flex min-h-screen md:mx-20 md:p-10'>
          <AllProjects posts={posts} />
        </section>
      </div>
    )

}
import Hero from "@/app/components/Hero";
import { groq } from "next-sanity";
import AllProjects from "@/app/components/AllProjects";
import { client } from '../../../../sanity/lib/client';

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

  return (

    <div>
      <Hero
        heading='UI/UX Projects'
        message='A selection of completed e-commerce, and business Website that generate business leads and increase conversions.'
				subheading=''
			/>
      <section className='flex min-h-screen text-4xl flex-col items-center justify-between md:mx-20 md:p-10'>
        <AllProjects posts={posts} />
      </section>
    </div>
    )
}
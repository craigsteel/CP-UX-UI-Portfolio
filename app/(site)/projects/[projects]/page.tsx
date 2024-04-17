import Hero from "@/app/components/Hero";
import { groq } from "next-sanity";
import AllProjects from "@/app/components/AllProjects";
import { client } from '../../../../sanity/lib/client';

const query = groq`
  *[_type == "post"] | order(number, desc){
    ...,
    number,
    publishedAt,
    author->,
    categories[]->,
  }`;


export default async function Projects() {

const posts = await client.fetch(query);

  return (

    <div>
      <Hero
        heading='My Projects'
        message='I am a multidisciplinary UI/UX creative based in the UK. With a background of over 20 years in branding, corporate and web design, I bring a wealth of experience and knowledge to each project that can help clients to identify and solve their communication problems, creating a better and more enjoyable online user experience.'
				subheading=''
			/>
      <section className='flex min-h-screen text-4xl flex-col items-center justify-between md:mx-20 md:p-10'>
        <AllProjects posts={posts} />
      </section>
    </div>
    )
}
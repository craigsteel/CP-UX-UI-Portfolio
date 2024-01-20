import Hero from '../components/Hero'
import Featured from '../components/Featured';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';


const query = groq`
*[_type == "post"]{
  ...,
  categories[]->,
  body[],
  "playbackId": video.asset->playbackId,
  } | order(_createdAt desc)`;

export default async function Page() {

  const posts = await client.fetch(query);
  return (
    <>
      <div>
        <Hero
          heading='Welcome, thank you for visiting my portfolio which focuses on UI/UX Design.'
          message='I am a multidisciplinary UI/UX creative based in the UK. With a background of over 20 years in branding, corporate and web design, I bring a wealth of experience and knowledge to each project that can help clients to identify and solve their communication problems, creating a better and more enjoyable online user experience.'
          subheading='Featured Projects' />
      </div>
      <Featured posts={posts} />
    </>
  )
}

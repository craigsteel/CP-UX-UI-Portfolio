import Hero from '../components/Hero'
import Featured from '../components/Featured';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';


const query = groq`
*[_type == "post"] | order(number, desc)[0..6]{
  ...,
  number,
  publishedAt,
  categories[]->,
  body[],
  "playbackId": video.asset->playbackId,
  }`;

export default async function Page() {

  const posts = await client.fetch(query);
  return (
    <>
      <div>
        <Hero
          heading="Welcome, thank you for visiting my portfolio which focuses on UI/UX Design."
          message="I'am a UK-based UI /UX designer with 20+ years of experience in branding, corporate, and UX/UI web design. My design passion has fuelled a diverse career. I honed leadership, presentation, and client-facing skills, collaborating with developers and managing budgets to deliver successful projects on tight deadlines. I help clients solve communication challenges and craft exceptional online experiences that users love."
          subheading="Featured Projects" />
      </div>
      <Featured posts={posts} />
    </>
  )
}

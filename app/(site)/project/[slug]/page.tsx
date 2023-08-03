/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
'use client'

import { PortableText } from "@portabletext/react";
import groq from "groq";
import Image from 'next/image';
import { Post } from '../../../../typings';

import { RichTextComponents } from '@/app/components/RichTextComponents'
import { client } from '../../../../sanity/lib/client'
import { urlFor } from '../../../../sanity/lib/image'
import ClientSideRoute from "@/app/components/ClientSideRoute";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import Video from "@/app/components/muxVideo";

type Props = {
	params: {
    slug: string;
    videofrontend: string;
    playbackId: string;
    _id: string;
	},
};

export const revalidate = 60;

export async function generateStaticParams() {
	const query = groq`*[_type == 'post']
		{ slug }
	`;

	const slugs: Post[] = await client.fetch(query);

  const slugRoutes = slugs.map((slug) => slug.slug.current);
    return slugRoutes.map((slug) => (
       { slug })
    );
  }

async function Project({ params: { slug } }: Props) {

	const query = groq`
	*[_type == 'post' && slug.current == $slug][0]
	{
		...,
		author->,
		categories[]->,
	}`;

	const post: Post = await client.fetch(query, { slug });

  const videoQuery = groq`
  *[_type == "mux.videoAsset"]
  `;

  const videofrontend = await client.fetch(videoQuery, { slug });

  return (
    <>

    <header className="mt-40">
      <h1 className="uppercase text-3xl pb-3 font-extralight">
        {post.title}
      </h1>
    <div className="py-10">
      <PortableText value={post.description } components={RichTextComponents} />
    </div>
        <Link href={'https://www.mortarandmilk.com/'}
          title="View Live Site"
          target="_blank"
          rel="noopener noreferrer"
          className="projectButton relative w-auto z-30 pb-6">
          View {post.title} Live Site
        </Link>

    </header>

			<div className="z-[1] aspect-ratio">
				<Image
					src={urlFor(post.mainImage).url()}
					alt={post.title}
					fill={true}
					quality={100}
					className="w-screen opacity-30 blur-sm"
				/>
			</div>

			<article>
				<section>

          <div className="relative mt-20 px-12">

            <div className="w-full aspect-ratio mt-10 pt-10 drop-shadow-[0px_0px_90px_rgba(0,0,0,0.8)]">
							{/* <Image
								src={urlFor(post.mainImage).url()}
								alt={post.title}
								width={1000}
								height={508}
								quality={80}
								className="rounded-lg mx-auto"
							/> */}
              <Video />
						</div>

						<div className="z-[30] px-5 mt-[-150px] drop-shadow-[0px_0px_90px_rgba(0,0,0,0.8)]">
							<div className="mb-3">
								<PortableText value={post.body} components={RichTextComponents} />

      						</div>

							<div className='top-[-100px] right-[100px] absolute z-50'>
								<Image
									src={urlFor(post.mobileImage).url()}
									alt={post.title}
									width={190}
									height={393}
									loading="lazy"
									quality={100}
									className="bg-cover bg-center rounded-lg drop-shadow-[0px_0px_10px_rgba(0,0,0,0.5)]" />
							</div>

						</div>
					</div>

				</section>

				<div className='projectButton relative my-10'>
          <ClientSideRoute key={post._id} route={`/projects/${slug}`}>
						<p className='text-sm'>All Projects</p>
					</ClientSideRoute>
				</div>
			</article>
		</>

	)
}

export default Project
/* eslint-disable @next/next/no-img-element */

import Hero from "@/app/components/Hero";

import { PortableText } from "@portabletext/react";
import groq from "groq";
import Image from 'next/image';
import { Post } from '../../../../typings';

import { RichTextComponents } from '@/app/components/RichTextComponents'
import { client } from '../../../../sanity/lib/client'
import { urlFor } from '../../../../sanity/lib/image'
import ClientSideRoute from "@/app/components/ClientSideRoute";

type Props = {
	params: {
		slug: string;
	},
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`
  *[_type=='post']
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
	*[_type=='post' && slug.current == $slug][0]
	{
		...,
		author->,
		categories[]->,
	}`;

	const post: Post = await client.fetch(query, { slug });

	return (
		<>
			<div className="z-1 aspect-ratio">
				<Image
					src={urlFor(post.backgroundImage).url()}
					alt={post.title}
					fill={true}
					quality={100}
					className="relative w-screen opacity-30 blur-sm"
				/>
			</div>

			<article>
				<section className="mx-5 md:mx-10">
					<div className="relative mx-5 md:mx-10 z-1">
            <header className="mt-[20px] md:w-2/3 md:ml-[80px]">
							<h1 className="text-6xl text-white uppercase font-light">
								{post.title}
              </h1>

              <div className="py-2 text-white">
                <PortableText value={post.description} components={RichTextComponents} />
              </div>
						</header>

						<div className="mt-5">
							<Image
								src={urlFor(post.mainImageProject).url()}
								alt={post.title}
								width={1150}
								height={608}
								quality={100}
								className="rounded-lg md:w-full mx-auto"
							/>
						</div>

            <div className="z-30">
							<PortableText value={post.body} components={RichTextComponents} />
            </div>

            <a href={''}
              title="View Live Site"
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton my-5 left-[80px]">
              View {post.title} Live Site
            </a>

					</div>
				</section>

				<div className='projectButton relative my-10'>
					<ClientSideRoute key={post._id} route={`/projects/${post.slug.current}`}>
						<div className='text-sm'>Back To All Projects</div>
					</ClientSideRoute>
				</div>
			</article>
		</>

	)
}
export default Project
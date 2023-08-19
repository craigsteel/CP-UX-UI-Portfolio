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
	const query = groq`*[_type=='post']
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
    {/* <div>
      <Hero
        heading='My Detailed Project'
        message='I am a multidisciplinary UI/UX creative based in the UK. With a background of over 20 years in branding, corporate and web design, I bring a wealth of experience and knowledge to each project that can help clients to identify and solve their communication problems, creating a better and more enjoyable online user experience.'
		subheading=''
			/>
      </div> */}


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
					<div className="relative">
            <header className="w-1/2 pb-10 ml-[80px]">
							<h1 className="text-4xl text-white uppercase font-bold">
								{post.title}
              </h1>
              <div className="pb-4 text-white">
                <PortableText value={post.description} components={RichTextComponents} />
              </div>
							<a href={''}
								title="View Live Site"
								target="_blank"
								rel="noopener noreferrer"
								className="projectButton left-[80px]">
								View {post.title} Live Site
							</a>
						</header>

						<div className="w-full aspect-ratio drop-shadow-[0px_0px_90px_rgba(0,0,0,0.8)]">
							<Image
								src={urlFor(post.mainImage).url()}
								alt={post.title}
								width={1150}
								height={608}
								quality={100}
								className="rounded-lg mx-auto mt-5"
							/>
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
					<ClientSideRoute key={post._id} route={`/projects/${post.slug.current}`}>
						<p className='text-sm'>Back To All Projects</p>
					</ClientSideRoute>
				</div>
			</article>
		</>

	)
}

export default Project
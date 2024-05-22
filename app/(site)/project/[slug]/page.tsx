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
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface Props {
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
      <div className="">
				<Image
					src={urlFor(post.backgroundImage).url()}
					alt={post.title}
					fill={true}
					quality={100}
          className="aspect-ratio relative z-[-10] w-screen opacity-30 blur-sm"
				/>
			</div>

        <article>
          <section className="md:mx-10">
            <div className="relative md:mx-10">
              <header className="mt-8 mr-4 md:ml-6">
                <h1 className="text-6xl px-4 md:px-12 text-white uppercase font-light">
                  {post.title}
                </h1>

                <div className="pt-2 text-white">
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
                  className="rounded-t-lg md:w-full mx-auto"
                />
              </div>

              <div className="z-30 bg-white text-black">
                <PortableText value={post.body} components={RichTextComponents} />
              </div>

            </div>
          </section>

          <div className='projectButton relative mt-10 ml-4 md:ml-20'>
            <ClientSideRoute key={post._id} route={`/projects/${post.slug.current}`}>
            <div className='inline-flex uppercase text-[18px] space-x-2 md:opacity-80 hover:opacity-100 transition duration-300 ease-in-out'>
              <ArrowLeftIcon className="mr-2 mt-1 h-4 w-4" />
              Back To All Projects
            </div>
            </ClientSideRoute>
          </div>
        </article>
		</>
	)
}
export default Project
'use client'
import Image from 'next/image';

import { urlFor } from './../../sanity/lib/image'
import { Post } from '../../typings';
import ClientSideRoute from './ClientSideRoute';
import { RichTextComponents } from './RichTextComponents';
import { PortableText } from "@portabletext/react";
import Video from './muxVideo';

type Props = {
	posts: Post[];
}

function Featured({ posts }: Props) {
  console.log
  return (


    <div> {posts.map(post => (
			<div key={post._id} className='relative rounded-lg p-5 my-20 ml-10 mr-20 bg-gradient-to-tr from-slate-900 from-10% via-blue-950 via-50% to-blue-950 flex opacity-70 hover:opacity-100 hover:drop-shadow-[0_0px_70px_rgba(0,0,0,1)] hover:scale-105 transition duration-500 ease-in-out'>

					<div
						className='w-1/3 flex flex-col pr-10'>

						<h2 className='uppercase text-2xl pb-3 font-extralight'>
							{post.number}
						</h2>

						<h2 className='uppercase text-3xl pb-3 font-extralight'>
							{post.title}
						</h2>

						<div className="text-[16px] pb-4">
            {/* {post.description} */}
						</div>

						<div className="text-[14px] pb-14 line-clamp-[6] leading-6">
            <PortableText value={post.description} components={RichTextComponents} />
						</div>

						<div className='projectButton bottom-5'>
							<ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
								<p className='text-sm'>Read the full story</p>
							</ClientSideRoute>
						</div>

					</div>

				<div className='bottom-[-30px] right-[-40px] absolute z-20'>
					<Image
						src={urlFor(post.mobileImage).url()}
						alt={post.title}
						width={190}
						height={393}
            quality={100}
            priority={false} // {false} | {true}
						className="object-cover rounded-lg drop-shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
					</Image>
				</div>

        	<div className='w-2/3 rounded-lg'>
          	{/* <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={902}
              height={508}
              quality={100}
              className="object-cover rounded-lg drop-shadow-[0px_10px_10px_rgba(0,0,0,0.8)]"
            /> */}
          <Video />
          </div>
			</div>
		))}
	</div>
  )
}

export default Featured
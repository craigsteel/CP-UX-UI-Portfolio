
import Image from 'next/image';
import { PortableText } from "@portabletext/react";

import { urlFor } from './../../sanity/lib/image'
import { Post } from '../../typings';
import ClientSideRoute from './ClientSideRoute';
import { RichTextComponents } from './RichTextComponents';

type Props = {
	posts: Post[];
}

function AllProjects({posts}:Props) {
  return (

		<div className="grid grid-cols-2 gap-8 my-20">
		  {posts.map(post => (
			  <div key={post._id} className='hover:scale-105 transition duration-500 ease-in-out bg-gradient-to-tr from-slate-800 from-30% via-blue-900 via-60% to-slate-800 opacity-70 hover:opacity-100 hover:drop-shadow-[0_0px_40px_rgba(0,0,205,0.4)] rounded-lg p-5'>

          <>
            <div className='uppercase text-3xl pb-3 font-extralight'>
						  {post.title}
            </div>
            {/* <div className="text-[16px] uppercase pb-4">
							{post.role}
            </div> */}
            <div className="text-[16px] pb-4 line-clamp-[3] leading-6">
              <PortableText value={post.description} components={RichTextComponents} />
						</div>

						<div className='w-full aspect-video'>
							<Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                width={902}
                height={508}
                quality={100}
                className="relative m-auto  rounded-lg my-5"
              />
            </div>
            <div className="relative flex rounded uppercase text-[12px] space-x-2 opacity-60 hover:opacity-100 transition duration-300 ease-in-out">
							<div className='projectButton bottom-5'>
								<ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
									<p className='text-sm'>Read the full story</p>
								</ClientSideRoute>
							</div>
            </div>
          </>
			  </div>
		  ))}
		</div>
	)}

export default AllProjects
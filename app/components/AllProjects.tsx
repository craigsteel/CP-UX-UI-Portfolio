
'use client'
import Image from 'next/image';
import { urlFor } from './../../sanity/lib/image'
import { Post } from '../../typings';
import ClientSideRoute from './ClientSideRoute';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

type Props = {
  posts: Post[];
}

function AllProjects({ posts }: Props) {
  return (

    <div className="grid mx-5 z-2 gap-6 md:gap-10 md:grid-cols-2">
		  {posts?.map(post => (
        <div key={post._id} className='background-card'>

          {post.categories?.map(category => (
            // eslint-disable-next-line react/jsx-key
            <Fragment key={category._id}>
              <div key={category._id} className='uppercase text-3xl font-light'>
                {category.title}
              </div>
              <div key={category._id} className="text-[14px] md:inline-flex uppercase font-light pb-4">
                <div className='text-[14px] pr-2'>My Role:
                  {category.role}
                </div>
              </div>
              <div key={category._id} className='w-full aspect-video'>
                <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    width={902}
                    height={508}
                    quality={100}
                    className="relative m-auto rounded-lg">
                  </Image>
                </ClientSideRoute>
              </div>
              <div className="pb-4 md:pb-12 pt-4">
                <div key={category._id} className='mb-5 text-base md:text-[14px] font-light leading-normal'>
                  {category.description}
                </div>
              </div>
              <div className="absolute bottom-5 left-5 pb-6 rounded">
                <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
                  <div className='text-sm inline-flex uppercase text-[12px] space-x-2 md:opacity-50 hover:opacity-100 transition duration-300 ease-in-out'>
                    Read the full story<ArrowRightIcon className="ml-2 mt-1 h-4 w-4" />
                  </div>
                </ClientSideRoute>
              </div>
              <hr className="border-[0.5px] border-gray-700 opacity-20 my-6"></hr>
            </Fragment>

          ))}
        </div>

      ))}
    </div>

  )
}

export default AllProjects
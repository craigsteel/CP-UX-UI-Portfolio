'use client'
import Image from 'next/image';
import { urlFor } from './../../sanity/lib/image'
import { Post } from '../../typings';
import ClientSideRoute from './ClientSideRoute';
import styled from 'styled-components';
import MuxPlayer from '@mux/mux-player-react';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

interface Props {
	posts: Post[];
}

export const revalidate = 60;

const StyledWrapper = styled.div`
  aspect-ratio: 16 / 9;
  border-radius: 6px; // Adjust as needed
  overflow: hidden; // Optional to prevent content overflow
  background-color: #010b2c;
`;

function Featured({posts}:Props) {
  return (

    <div>
      {posts?.map((post) => (
        <div key={post._id}
          className='relative flex flex-col md:flex-row my-6 md:my-14 md:mx-32 background-card'>

          {post.categories?.map((category) => (

            <div key={category._id} className='flex w-full md:w-1/3 flex-col md:pr-8'>

              <h2 className='text-3xl pt-2 uppercase font-extralight'>
                {category.title}
              </h2>
              <div className="text-[14px] font-normal pb-2">
                {category.sector}
              </div>
              <div className="text-[14px] font-extralight mb-4 line-clamp-3 md:line-clamp-4 lg:line-clamp-8 leading-6">
                {category.description}
              </div>
              <div className='md:text-[14px] uppercase'>
                Role
              </div>
              <div className="text-[14px] font-light pb-4">
                {category.role}
              </div>
              <div className='md:text-[14px] uppercase'>
              </div>

              <div className='hidden md:flex items-center absolute bottom-8 opacity-70 hover:opacity-100 bg-slate-950 p-2 rounded-sm transition duration-500 ease-in-out'>
                <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
                  <p className='text-sm flex uppercase'>Read the full story<ArrowUpRightIcon className="ml-2 mt-1 h-4 w-4" />
                    </p>
                </ClientSideRoute>
              </div>
            </div>
          ))}

            <div className='flex bottom-[-17px] right-[30px] md:right-[-40px] absolute z-10'>
                <Image
                  src={urlFor(post.mobileImage).url()}
                  alt={post.title}
                  width={190}
                  height={393}
                  quality={100}
                  className="object-cover w-32 md:w-48 rounded-lg drop-shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
                </Image>
            </div>

              <div className='md:flex w-full md:w-2/3 pb-8 rounded-2xl drop-shadow-[0px_0px_10px_rgba(0,0,0,0.5)]'>
                <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
                    <StyledWrapper>
                      <MuxPlayer
                        streamType="on-demand"
                        playbackId={post.playbackId}
                        metadata={{ video_title: post.title }}
                        loop
                        muted
                        autoPlay="muted"
                        className="drop-shadow-[0px_0px_10px_rgba(0,0,0,0.5)] bg-cardblue">
                      </MuxPlayer>
                  </StyledWrapper>
                </ClientSideRoute>
              </div>

              <div className='projectButton md:hidden'>
                <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
                  <p className='text-sm inline-flex'>Read the full story<ArrowUpRightIcon className="ml-2 mt-1 h-4 w-4"></ArrowUpRightIcon></p>
                </ClientSideRoute>
              </div>
			      </div>
		      ))}
	    </div>
  )
}

export default Featured
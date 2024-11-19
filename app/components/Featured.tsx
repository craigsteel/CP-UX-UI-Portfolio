'use client'
import Image from 'next/image';
import { urlFor } from './../../sanity/lib/image'
import { Post } from '../../typings';
import ClientSideRoute from './ClientSideRoute';
import styled from 'styled-components';
import MuxPlayer from '@mux/mux-player-react';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
type Props = {
	posts: Post[];
}

const StyledWrapper = styled.div`
  aspect-ratio: 16 / 9;
  border-radius: 6px; // Adjust as needed
  overflow: hidden; // Optional to prevent content overflow
  background-color: #ffffff;
`;

function Featured({posts}:Props) {
  return (

    <section className="mx-6 md:mx-0 ">
      {posts?.map((post) => (
        <div key={post._id}
          className='relative flex flex-col md:flex-row mb-8 md:mb-0 md:my-10 md:my-14 md:mx-10 lg:mx-32 background-card'>

          {post.categories?.map((category) => (

            <div key={category._id} className='flex w-full md:w-1/3 lg:w-1/2 flex-col md:pr-8'>
              <h2 className='text-3xl 2xl:text-4xl pt-2 uppercase font-extralight'>
                {category.title}
              </h2>
              <div className="text-sm 2xl:text-xl font-normal pb-2">
                {category.sector}
              </div>
              <div className='md:text-sm 2xl:text-xl uppercase'>
                The Challenge
              </div>
              <div className="text-sm 2xl:text-xl font-extralight mb-4 line-clamp-3 md:line-clamp-4 lg:line-clamp-7 leading-6 2xl:leading-9">
                {category.description}
              </div>
              <div className='md:text-sm 2xl:text-xl uppercase'>
                My Role
              </div>
              <div className="text-sm 2xl:text-xl font-light pb-4">
                {category.role}
              </div>

              <div className='projectButton hidden md:flex absolute bottom-[20px] py-2'>
                <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
                  <p className='text-sm flex'>Read the full story<ArrowUpRightIcon className="ml-2 mt-1 h-4 w-4" />
                    </p>
                </ClientSideRoute>
              </div>
            </div>
          ))}

            <div className='flex bottom-[-25px] md:bottom-[-17px] right-[-10px] md:right-[-14px] absolute z-10'>
                <Image
                  src={urlFor(post.mobileImage).url()}
                  alt={post.title}
                  width={155}
                  height={325}
                  quality={100}
                  className="object-cover md:w-52 h-auto rounded-lg drop-shadow-[0px_0px_10px_rgba(0,0,0,0.3)]">
            </Image>

            </div>

          <div className='flex w-full md:w-[753px] 2xl:w-[1000px] md:h-[426px] 2xl:h-[540px] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'>
                <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
                    <StyledWrapper>
                      <MuxPlayer
                        streamType="on-demand"
                        playbackId={post.playbackId}
                        metadata={{ video_title: post.title }}
                        loop
                        muted
                        autoPlay="muted"
                        >
                      </MuxPlayer>
                  </StyledWrapper>
                </ClientSideRoute>
              </div>

              <div className='projectButton md:hidden'>
                <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
              <p className='inline-flex text-base'>Read the full story<ArrowUpRightIcon className="ml-2 mt-1 h-4 w-4"></ArrowUpRightIcon></p>
                </ClientSideRoute>
              </div>
			      </div>
		      ))}

	    </section>
  )
}

export default Featured
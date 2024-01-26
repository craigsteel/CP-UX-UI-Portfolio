
'use client'
import Image from 'next/image';
import { urlFor } from './../../sanity/lib/image'
import { Post } from '../../typings';
import ClientSideRoute from './ClientSideRoute';
import MuxPlayer from '@mux/mux-player-react';

type Props = {
	posts: Post[];
}

function Featured({posts}:Props) {
  return (

    <div> {posts?.map((post) => (
      <div key={post._id} className='relative flex flex-col md:flex-row my-14 md:my-14 mx-5 md:mx-32 background-card'>

				{post.categories?.map((category) => (
					<div key={category._id}
            className='flex w-full md:w-1/3 flex-col md:pr-10'>

						{/* <h2 className='uppercase text-2xl pb-3 font-extralight'>
							{category.number}
						</h2> */}

						<h2 className='text-3xl pt-4 font-extralight'>
							{category.title}
            </h2>
            <div className="text-[14px] font-extralight mb-8 line-clamp-5 leading-6">
              {category.description}
            </div>
            <div className='md:text-[14px] font-medium uppercase'>
              Role
          </div>
						<div className="text-[14px] font-light pb-4">
							{category.role}
            </div>
            <div className='md:text-[14px] font-medium uppercase'>
              Sector
            </div>
            <div className="text-[14px] font-light pb-4">
              {category.sector}
            </div>

            <div className='hidden md:flex absolute bottom-8 opacity-70 hover:opacity-100 bg-slate-950 p-2 rounded-sm transition duration-500 ease-in-out'>
							<ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
                <p className='text-sm uppercase'>Read the full story</p>
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

        <div className='md:flex w-full md:w-2/3 rounded-lg pb-8'>

          <MuxPlayer
            streamType="on-demand"
            playbackId={post.playbackId}
            metadata={{ video_title: post.title }}
            style={
              {
                aspectRatio: 16 / 9,
                borderRadius: 8
              }}
            loop
            muted
            autoPlay="muted"
          >
          </MuxPlayer>

          {/* <Image
						src={urlFor(post.mainImage).url()}
						alt={post.title}
						width={902}
						height={508}
						quality={100}
						className="object-cover rounded-lg drop-shadow-[0px_10px_10px_rgba(0,0,0,0.8)]"
          /> */}

        </div>

        <div className='projectButton md:hidden'>
          <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
            <p className='text-sm'>Read the full story</p>
          </ClientSideRoute>
        </div>

			</div>
		))}
	</div>
  )
}

export default Featured

import 'styled-components';
import MuxPlayer from '@mux/mux-player-react'
import { client } from './../../sanity/lib/client'
import groq from "groq";
import { NodeNextRequest } from 'next/dist/server/base-http/node';
import { Post } from '../../typings';
import { useEffect } from 'react'
import { suspend } from 'suspend-react'

type Props = {
  posts: Post[];
}

function Video({posts}:Props) {

  return (

    <div> {posts?.map((post) => (
        <div key={post._id}
        className='md:flex w-full md:w-2/3 rounded-lg pb-8'>

          <MuxPlayer
            streamType="on-demand"
            playbackId={post.playbackId}
            metadata={{ video_title: post.title }}
            loop
            muted
            autoPlay="muted"
          >
          </MuxPlayer>

        </div>
        ))}
    </div>
  )
}

export default Video
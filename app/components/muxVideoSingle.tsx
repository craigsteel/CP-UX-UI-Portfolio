/* eslint-disable @next/next/no-async-client-component */
'use client'
import 'styled-components';
import MuxPlayer from '@mux/mux-player-react'
import { client } from './../../sanity/lib/client'
import groq from "groq";

    type Props = {
        params: {
            videofrontend: string;
            playbackId: string;
        }
    }

const query = groq`
        *[_type == "videofrontend"][0]{
            title,
            "playbackId": video.asset->playbackId
        }`;

export default async function videoSingle() {
  console.log

  const videofrontend = await client.fetch(query);

    return (

      <MuxPlayer
        streamType="on-demand"
        playbackId={videofrontend.playbackId}
        metadata={videofrontend.title}
        style={{
          aspectRatio: 16 / 9,
          borderRadius: 0.5,
          width: 1000,
          height: 508
        }}
        loop
        muted
        autoPlay="muted"
        >
      </MuxPlayer>

    )
}


/* eslint-disable @next/next/no-async-client-component */
// eslint-disable-next-line @next/next/no-async-client-component
'use client'
import 'styled-components';
import MuxPlayer from '@mux/mux-player-react'
import { client } from './../../sanity/lib/client'
import groq from "groq";
import mux from 'mux-embed';
import { NodeNextRequest } from 'next/dist/server/base-http/node';
// import { videofrontend } from '@/typings'

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


export default async function Video() {

    const videofrontend = await client.fetch(query);

    return (

        <MuxPlayer
            playbackId={videofrontend.playbackId}
            metadata={videofrontend.title}
            style={{ aspectRatio: 16 / 9, borderRadius: 0.5 }}
            loop
            muted
            autoPlay="muted"
            >
        </MuxPlayer>

    )
}


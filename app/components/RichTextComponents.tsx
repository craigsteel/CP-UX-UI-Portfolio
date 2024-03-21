/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from "next/link"
import React, { useEffect } from 'react'
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from './../../sanity/lib/image'

export const RichTextComponents = {

	types: {
		image: ({ value, isInline }: any) => {
			const { width, height } = getImageDimensions(value);

      return (
				<img
					src={urlFor(value).url()}
					alt={value.alt || " "}
          loading="lazy"
          className="w-full"
        />
			);
		},
    code: ({ value }: any) => {
      console.log("value: ", value);

      const code = value.code;
      const filename = value.filename;
      const language = value.language;

      return (
        <div className="bg-gray-900 rounded-lg p-4 my-4">
          <div className="flex justify-between mb-2">
            <p className="text-gray-400">{filename}</p>
            <p className="text-gray-400">
              language: <span className="text-white">{language}</span>
            </p>
          </div>
          <pre className="p-2 bg-gray-800 rounded-lg overflow-auto">
            <code className="block text-sm font-mono text-white">{code}</code>
          </pre>
        </div>
      );
    },
  },

  block: {
    // Ex. 1: customizing common block types
		h1: ({ children }: any) => (
      <h1 className="text-3xl py-5">
        {children}
      </h1>
		),
		h2: ({ children }: any) => (
      <h2 className="text-1xl py-5">
        {children}
      </h2>
		),
		h3: ({ children }: any) => (
      <h3 className="text-[30px] font-medium uppercase pt-6">
        {children}
      </h3>
		),
		h4: ({ children }: any) => (
      <h4 className="text-2xl pt-1 mt-8 mb-2 font-extralight">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-lg pt-1 mt-8 mb-2 font-extralight">
        {children}
      </h5>
    ),
		blockquote: ({ children }: any) => (
      <blockquote className="p-4 mb-4 rounded-lg w-11/12 border-l-4 border-[#F7AB0A] bg-gray-800/75 text-xl italic font-light leading-relaxed text-gray-300">
        {children}
      </blockquote>
		),
    normal: ({ children }: any) => (
      <div className="text-[16px] mb-2 font-light md:w-2/3">
        {children}
      </div>
    ),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className="mt-xl">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg">
        {children}
      </ol>
    ),
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {

				const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;

      return (
        <div className='flex bg-white-950 opacity-70 hover:opacity-100 transition duration-300 ease-in-out '>
					<a
            href={value.href}
            target="_blank"
						rel={rel}
            className="flex text-lg underline decoration-[#F7AB0A]">
						{children}
          </a>
        </div>
					);
        },
	  },
}
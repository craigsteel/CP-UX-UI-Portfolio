import Image from 'next/image';
import Link from "next/link"
import React, { useEffect } from 'react'

import { urlFor } from './../../sanity/lib/image'

export const RichTextComponents = {
	types: {
		image: ({ value }: any) => {
			return (
				<div className="w-full aspect-ratio content-center">
					<Image
						className="m-auto"
						src={urlFor(value).url()}
						alt="Blog Post Image"
						width={902}
						height={3805}
						quality={80}
					/>
				</div>
			);
		},
	},

	list: {
		// Ex. 1: customizing common list types
		bullet: ({ children }: any) => (
			<ul className="mt-xl">{children}</ul>
		),
		number: ({ children }: any) => (
			<ol className="mt-lg">{children}</ol>
		),
	},

  	block: {
    // Ex. 1: customizing common block types
		h1: ({ children }: any) => (
			<h1 className="text-3xl py-5">{children}</h1>
		),
		h2: ({ children }: any) => (
			<h2 className="text-1xl py-5">{children}</h2>
		),
		h3: ({ children }: any) => (
			<h3 className="text-lg py-2">{children}</h3>
		),
		h4: ({ children }: any) => (
			<h4 className="text-base py-2">{children}</h4>
		),
		blockquote: ({ children }: any) => (
			<blockquote className="border-l-purple-500">{children}</blockquote>
		),
	},

  		marks: {
			link: ({ children, value }: any) => {
				const rel = !value.href.startsWith('/')
					? 'noreferrer noopener'
					: undefined;

					return (
						<Link
							href={value.href}
							rel={rel}
							className="underline decoration-[#F7AB0A] hover:decoration-black"
						>
							{children}
						</Link>
					);

			},
		},

}
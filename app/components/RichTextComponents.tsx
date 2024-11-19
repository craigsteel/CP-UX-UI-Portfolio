/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from "next/link"
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from '../../sanity/lib/image'

export const RichTextComponents = {

	types: {
		image: ({ value, isInline }: any) => {
			const { width, height } = getImageDimensions(value);

      return (
				<Image
					src={urlFor(value).url()}
          alt={value.alt || ' '}
          width={width}
          height={height}
          quality={100}
          placeholder='data:image/...' // "empty" | "blur" | "data:image/..."
        />
			);
		},
    code: ({ value }: any) => {
      console.log("value: ", value);

      const code = value.code;
      const filename = value.filename;
      const language = value.language;

      return (
        <div className="bg-white p-4 my-4">
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
      <h1 className="text-3xl py-5 px-4 md:px-0">
        {children}
      </h1>
		),
		h2: ({ children }: any) => (
      <h2 className="text-1xl py-5 px-4 md:px-0">
        {children}
      </h2>
		),
		h3: ({ children }: any) => (
      <h3 className="text-2xl font-normal pt-2 px-4 md:px-12">
        {children}
      </h3>
		),
		h4: ({ children }: any) => (
      <h4 className="text-2xl mt-8 mb-2 font-light px-4 md:px-12">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-[14px] mb-2 font-medium uppercase pl-4 md:pl-12">
        {children}
      </h5>
    ),
		blockquote: ({ children }: any) => (
      <blockquote>
        {children}
      </blockquote>
		),
    normal: ({ children }: any) => (
      <div className="pl-4 space-y-{20px} md:pl-12 font-light md:w-2/3">
        {children}
      </div>
    ),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className="pl-4 md:pl-16 font-light md:w-2/3">
          {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg">
        {children}
      </ol>
    ),
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {

      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <Link className='flex text-lg pt-2 underline decoration-[#F7AB0A] bg-white-950 opacity-70 hover:opacity-100 transition duration-300 ease-in-out '
          href={value.href}
          target="_blank"
					rel={rel}>
					{children}
        </Link>
			);
    },
	},
}

import Image from 'next/image';

import { urlFor } from './../../sanity/lib/image'
import { Post } from '../../typings';
import ClientSideRoute from './ClientSideRoute';

type Props = {
	posts: Post[];
}

function AllProjects({posts}:Props) {
  return (
    <>
      <div className="grid gap-20 md:grid-cols-2">
		    {posts.map(post => (

          <div key={post._id}
            className='hover:scale-105 transition duration-500 ease-in-out bg-gradient-to-tr from-slate-800 from-30% via-blue-900 via-60% to-slate-800 opacity-70 hover:opacity-100 hover:drop-shadow-[0_0px_40px_rgba(0,0,205,0.4)] rounded-lg p-5'>

				{post.categories?.map(category => (
          <>
            <div key={category._id}
              className='uppercase text-4xl font-light'>
						  {category.title}
            </div>

						  <div className='w-full aspect-video'>
							  <Image
								  src={urlFor(post.mainImage).url()}
								  alt={post.title}
								  width={902}
								  height={508}
								  quality={100}
								  className="relative m-auto  rounded-lg my-5" />
            </div>

            <div className="text-[18px] uppercase font-semibold pb-2">
              {category.role}
            </div>

            <div className="pb-8">
              <p className='text-[18px] leading-normal'>
                {category.description}
              </p>
              </div>

            <div className="relative flex rounded uppercase text-[12px] space-x-2 opacity-60 hover:opacity-100 transition duration-300 ease-in-out">
								  <ClientSideRoute key={post._id} route={`/project/${post.slug.current}`}>
									  <p className='text-sm'>Read the full story</p>
								  </ClientSideRoute>
						  </div></>
				  ))}
			</div>
		 ))}
      </div>
    </>
  )
}

export default AllProjects
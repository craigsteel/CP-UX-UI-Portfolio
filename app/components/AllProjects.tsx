
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
      <div className="grid gap-6 md:gap-20 md:grid-cols-2">
		    {posts.map(post => (

          <div key={post._id}
            className='background-card'>

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

            <div className="text-[14px] uppercase font-light pb-2">
              {category.role}
            </div>

            <div className="pb-8">
              <div className='text-[14px] font-light leading-normal'>
                {category.description}
              </div>
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
type HeroProps = {
  heading: string;
  message: string;
  subheading: string;
};
export default function Hero(props: HeroProps) {
	const { heading, message, subheading } = props;

	return (
    <section className='mx-5 mt-4 md:mx-10 lg:mx-28 z-0 md:w-4/5 lg:w-3/4'>

      <h1 className='pb-4 leading-[3.4rem] md:leading-[4.6rem] 2xl:leading-[6.5rem]'>
				{heading}
			</h1>

      <p className='font-light text-lg 2xl:text-2xl tracking-normal md:tracking-wide md:2xl md:mr-10 lg:mr-40 2xl:leading-[2.6rem] leading-[1.9rem]'>
				{message}
      </p>

      <hr className="border-[0.5px] border-gray-700 opacity-20 my-6"></hr>

			<h2 className='font-light lg:pt-8 md:pl-10 uppercase text-lg'>
				{subheading}
      </h2>

    </section>
  )
}
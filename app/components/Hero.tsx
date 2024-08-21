type HeroProps = {
  heading: string;
  message: string;
  subheading: string;
};
export default function Hero(props: HeroProps) {
	const { heading, message, subheading } = props;

	return (
    <section className='mx-5 mt-4 md:mx-28 z-0 md:w-3/4'>

      <h1 className='pb-4 leading-[3.4rem] md:leading-[4.6rem]'>
				{heading}
			</h1>

      <p className='font-light text-[17px] tracking-normal md:tracking-wide md:2xl md:mr-[165px] leading-[1.9rem]'>
				{message}
      </p>

      <hr className="border-[0.5px] border-gray-700 opacity-20 my-6"></hr>

			<h2 className='font-light pt-8 pl-10 uppercase text-lg'>
				{subheading}
			</h2>
    </section>
  )
}
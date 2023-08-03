type HeroProps = {
	heading: string;
	message: string;
	subheading: string;
}
export default function Hero(props: HeroProps) {
	const { heading, message, subheading } = props;

	return (
      <div className='flex flex-col mx-10 mt-20 z-[1]'>
			<h1 className='text-5xl font-extrabold md:text-6xl md:mr-[65px] uppercase pb-4 leading-normal tracking-wide'>
				{heading}
			</h1>

			<p className='font-light text-2xl md:mr-[165px] leading-10'>
				{message}
			</p>

			<h2 className='mt-5 font-light text-gray-400 text-xl'>
				{subheading}
			</h2>
      </div>

  );
}
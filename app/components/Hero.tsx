type HeroProps = {
	heading: string;
	message: string;
	subheading: string;
}
export default function Hero(props: HeroProps) {
	const { heading, message, subheading } = props;

	return (
    <div className='mx-5 mt-4 md:mx-28 z-[1] md:w-3/4'>
      <h1 className='pb-4 leading-[48px] md:leading-[4.5rem]'>
				{heading}
			</h1>

			<p className='font-light text-[18px] md:2xl md:mr-[165px] leading-[1.9rem]'>
				{message}
			</p>

			<h2 className='font-light text-gray-400 mt-4 text-xl'>
				{subheading}
			</h2>
    </div>
  )
}
import Link from "next/link";

interface Props{
  title?: string;
  className?: string;
}

const Logo = ({ title, className }:Props) => {

  return (
    <div className={`flex flex-wrap space-x-2 text-[20px] font-light md:text-1xl md:opacity-70 ease-in-out duration-300 hover:opacity-100 ${className}`}>
          {title || 'Portfolio'}
    </div>

    )
}

export default Logo
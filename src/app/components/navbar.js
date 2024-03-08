import Link from "next/link";
import Image from "next/image";

export default function Navbar()
{
    return(
        <>
        <nav className="sticky z-50 top-0 left-0 w-full flex flex-row justify-between drop-shadow-md bg-white px-1 md:px-10">
        <Link className="my-auto" href={'/'}><Image src={'/onetickLogo.png'} alt="Logo" height={45} width={150}></Image></Link>
        <span className="py-6">
          <Link className="py-1 md:py-3 px-2 md:px-6 bg-dark-blue text-white rounded-2xl font-semibold font-DM Sans" href="tel:+919650076857">Call Now</Link>
        </span>
      </nav></>
    )
}
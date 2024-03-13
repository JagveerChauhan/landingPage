import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer()
{
    return (
        <>
        <footer>
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="flex flex-col m-auto md:m-0 gap-3 p-5">
            <Image src={'/onetickLogo.png'} height={45} width={150} alt="Onetick logo"></Image>
            <div className="flex flex-row gap-3 ps-2">
              <Link href={'https://api.whatsapp.com/send?phone=+919650076857&text=Hi'}><FontAwesomeIcon icon={faWhatsapp} className='text-2xl text-neutral-600'></FontAwesomeIcon></Link>
              <Link href={'https://www.facebook.com/oneticktechnologies'}><FontAwesomeIcon icon={faFacebook} className='text-2xl text-neutral-600'></FontAwesomeIcon></Link>
              <Link href={'https://www.instagram.com/oneticktechnologies?igsh=YmNnbHFsZ3F0djk5'}><FontAwesomeIcon icon={faInstagram} className='text-2xl text-neutral-600'></FontAwesomeIcon></Link>
              <Link href={'https://www.linkedin.com/company/onetick-technologies-pvt-ltd/'}><FontAwesomeIcon icon={faLinkedin} className='text-2xl text-neutral-600'></FontAwesomeIcon></Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 font-DM Sans p-5">
            <p className="text-base text-neutral-600 font-medium text-center md:text-right">Mail us at: <span className="text-black">dinesh@oneticktechnologies.com</span></p>
            <p className="text-base text-neutral-600 font-medium text-center md:text-right">Call us at: <span className="text-black">+91-9650076857</span></p>
            <p className="text-base text-neutral-600 font-medium text-center md:text-right">Address: <span className="text-black">E-1/74, Sector-11, Faridabad(Haryana), Pin Code-121006</span></p>
          </div>
        </div>
        <div className="text-center text-neutral-600 p-4 font-medium font-DM Sans border-t border-neutral-600">&#169; 2024 OneTick Technologies Pvt Ltd. All rights reserved.</div>
      </footer>
        </>
    )
}
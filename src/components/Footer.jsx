import React from 'react';
import { Link } from 'react-router-dom';
import takayaa from "../../public/assets/takayaa-logo.png";
import { Separator } from "~/components/ui/separator"

export default function Footer() {
    return(
        <div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 justify-between uppercase">
                {/* logo part */}
                <div>
                  <img src={takayaa}  alt="logo" className="mx-auto w-32 h-12"/>
                </div>
                {/* logo part */}

                {/* contacts section */}
                <div>
                  <div className="flex flex-col gap-5 items-center md:items-start">
                    <p>+228 93 29 94 94</p>
                    <p>takayaastudio@gmail.com</p>
                </div>
            </div>
                {/* contacts section */}

                {/* footer links */}
                <div>
                  <div className="flex flex-col gap-5 items-center md:items-start">
                  <Link to={"/#home"} className='hover:underline underline-offset-4'>Accueil</Link>
                  <Link to={"/#aboutus"} className='hover:underline underline-offset-4'>A propos</Link>
                  <Link to={"/#ourexpertise"} className='hover:underline underline-offset-4'>Notre expertise</Link>
                  {/* <Link to={"/#freeresources"} className='hover:underline underline-offset-4'>Free resource</Link> */}
                  <Link to={"/#contact"} className='hover:underline underline-offset-4'>Contact</Link>
                  </div>
                </div>
                {/* footer links */}
              </div>
              
              <Separator className="mt-4 md:mt-28 mb-4 bg-gray-300"/>

              {/* copyright section */}
              <div className='flex justify-center text-center uppercase'>
                <p>© {new Date().getFullYear()} Takayaa Studio. Tous droits réservés.</p>
              </div>
            {/* copyright section */}

        </div>
    )
};
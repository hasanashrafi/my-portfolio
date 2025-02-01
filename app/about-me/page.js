import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";


function AboutMe() {
    return (
        <div className="about-me p-4">
            <div>
                <Link href="/" className='inline-block hover:bg-black rounded-full p-1 text-xl hover:text-white ease-in-out transition-all'>
                    <IoMdArrowRoundBack />

                </Link>
            </div>
            <div>
                <Image
                    width={200}
                    height={100}
                    src='/images/profile.jpg'
                    alt='profile'
                    loading='lazy'
                    className='w-56 h-56 rounded shadow-xl mx-auto mb-10' />

                <p className="text-lg text- mx-auto">
                    <p className="text-lg text- mx-auto">
                        I'm a frontend developer with a passion for building innovative and user-friendly applications.
                        <br />
                        <span className="font-bold">Birthday:</span> 1996/10/15
                        <br />
                        <span className="font-bold">Education:</span> Software Diploma
                    </p>
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
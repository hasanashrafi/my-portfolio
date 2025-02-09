import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';

function Skills() {
    const skills = [
        { alt: 'HTML', src: "/images/html-5.svg" },
        { alt: 'CSS', src: "/images/css-3.svg" },
        { alt: 'JavaScript', src: "/images/javascript.svg", className: 'rounded-full' },
        { alt: 'React', src: "/images/react.svg" },
        { alt: 'Next.js', src: "/images/next.svg" },
        { alt: 'Tailwind CSS', src: "/images/tailwindcss.svg" },
        { alt: 'MongoDB', src: "/images/mongodb.svg" },
        { alt: 'GraphQL', src: "/images/graphql.svg" },
        { alt: 'Git', src: "/images/git.svg" },
        { alt: 'GitHub', src: "/images/github.svg" },
        { alt: 'API', src: "/images/api.svg" },
    ];

    return (
        <div >
           
            <div className='p-4 rounded-2xl w-full bg-black/20 shadow-lg flex flex-wrap gap-x-16 gap-y-10 justify-center items-center'>
                {skills.map((skill, index) => (
                    <div key={index} className=" hover:scale-110  overflow-hidden animate-fade-in-up   ">
                        <Image
                            alt={skill.alt}
                            priority
                            src={skill.src}
                            width={100}
                            height={100}
                            className="size-16"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
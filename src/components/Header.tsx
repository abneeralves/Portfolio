'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Anton, Fira_Code } from 'next/font/google'

const teko = Anton({ subsets: ['latin'], weight: '400' })
const FiraCode = Fira_Code({ subsets: ['latin'] })

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) }

    type Names = {
        firstName: string;
        midName: string;
        lastName: string;
        firstNameProfession: string;
        midNameProfession: string;
        lastNameProfession: string;
    }

    const firstName = "ABNER";
    const midName = "ALVES";
    const lastName = "MUNIZ";
    const firstNameProfession = "FULL";
    const midNameProfession = "STACK";
    const lastNameProfession = "DEVELOPER";
    const lastNameProfessionMobile = "DEV";

    const StyleClass =
        `text-9xl lg:text-[11rem] 2xl:text-[14rem] 
    hover:-translate-y-2 hover:text-[#ffd401] 
    hover:cursor-pointer duration-300 
    ease-in-out outline-name tracking-widest`;

    const highlightStyleClass =
        `text-9xl lg:text-[11rem] 2xl:text-[14rem] 
    text-[#ffd401] hover:-translate-y-2 
    hover:text-[#ffd401] hover:cursor-pointer 
    duration-300 ease-in-out tracking-widest `;

    return (
        <header className="h-screen bg-[#171330] relative overflow-hidden">
            <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-10 md:px-14 pt-8 border-b border-white/5 pb-5 z-20 bg-[#171330]">
            
                <div className='flex items-center hover:rotate-180 transition-transform duration-500 cursor-pointer z-20'>
                    <p className='text-sky-500 text-2xl xl:text-3xl -m-1'>&lt;</p>
                    <Image src="/imgHeader/A.png" alt='Letra A' width={30} height={30} />
                    <p className='text-sky-500 text-2xl xl:text-3xl -m-1'>/&gt;</p>
                </div>

                <ul className={`hidden md:flex items-center gap-1 ${FiraCode.className}`}>
                    {['inicio', 'Sobre', 'Projetos', 'Skills'].map((item) => (
                        <a key={item} href={item === 'inicio' ? '#' : `#${item.toLowerCase()}`}>
                            <li className="text-sm text-white/55 hover:text-[#ffd401] transition-colors px-4 py-2 rounded-lg cursor-pointer">
                                {item}
                            </li>
                        </a>
                    ))}
                    <a href="#contatos">
                        <li className="text-sm font-semibold text-[#0A0E1A] bg-[#ffd401] hover:bg-[#B39501] transition-colors px-5 py-2 rounded-lg cursor-pointer">
                            Contatos
                        </li>
                    </a>
                </ul>

                <button onClick={toggleMenu} className="md:hidden text-sky-400 z-20">
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </nav>

            <div className='flex items-center justify-center h-full w-full' data-aos="fade-right">

                <div className='mt-28 md:flex xl:hidden'>
                    <div>
                        <div className="flex">
                            {firstName.split("").map((letter, index) => (
                                <p
                                    key={index}
                                    className={`
                                        ${StyleClass}
                                        ${teko.className}
                                        auto-hover
                                    `}
                                    style={{
                                        animationDelay: `${index * 1}s`,
                                    }}
                                >
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {midName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {lastName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex">
                            {lastNameProfessionMobile.split("").map((letter) => (
                                <p key={letter} className={`${highlightStyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${highlightStyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {midNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${highlightStyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='hidden xl:flex'>
                    <div>
                        <div className="flex">
                            {lastName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstName.split("").map((letter, index) => (
                                <p
                                    key={index}
                                    className={`
                                        ${highlightStyleClass}
                                        ${teko.className}
                                        auto-hover
                                    `}
                                    style={{
                                        animationDelay: `${index * 1}s`,
                                    }}
                                >
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {midName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {lastName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstName.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className='ml-20 '>
                        <div className="flex">
                            {lastNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {midNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {lastNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${highlightStyleClass} ${teko.className} tracking-[0.5rem]`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstNameProfession.split("").map((letter) => (
                                <p key={letter} className={`${StyleClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

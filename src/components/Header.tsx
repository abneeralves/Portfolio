'use client'
import Image from 'next/image'
import LetraA from '../../public/A.png'

import Whats from '../../public/whatsapp.png'
import Instagram from '../../public/Instagram.png'
import Twitter from '../../public/twitter.png'
import Linkedin from '../../public/Linkedin.png'
import GitHub from '../../public/GitHub.png'

import { Exo_2, Anton, Fira_Code } from 'next/font/google'
import { useState } from 'react'
import { findSourceMap } from 'module'
const Exo = Exo_2({ subsets: ['latin'] })
const teko = Anton({ subsets: ['latin'], weight: '400' })
const FiraCode = Fira_Code({ subsets: ['latin'] })
const Header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const firstName = "ABNER";
    const midName = "ALVES";
    const lastName = "MUNIZ";
    const full = "FULL";
    const stack = "STACK";
    const developer = "DEVELOPER";

    const letterClass = `
    text-8xl 2xl:text-[14rem] hover:-translate-y-2 hover:text-[#ffd401] hover:cursor-pointer duration-300 ease-in-out outline-name tracking-widest`;

    const midClass = `
    text-8xl 2xl:text-[14rem] text-[#ffd401] hover:-translate-y-2 hover:text-[#ffd401] hover:cursor-pointer duration-300 ease-in-out tracking-widest`;

    return (
        <header className="h-screen bg-[#171330] relative overflow-hidden">
            <nav className="flex items-center justify-between px-10 md:px-14 pt-8 border-b border-white/5 pb-5 z-20 relative bg-[#171330]">
                <div className='flex items-center hover:rotate-180 transition-transform duration-500 cursor-pointer z-20'>
                    <p className='text-sky-500 text-2xl xl:text-3xl -m-1'>&lt;</p>
                    <Image src={LetraA} alt='Letra A' width={30} />
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

            <div className='flex items-center justify-center md:justify-normal md:ml-28 lg:ml-44 xl:ml-14 2xl:-mt-20 relative' data-aos="fade-right">

                <div className='flex'>
                    <div>
                        <div className="flex">
                            {lastName.split("").map((letter) => (
                                <p key={letter} className={`${letterClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {firstName.split("").map((letter) => (
                                <p key={letter} className={`${midClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {midName.split("").map((letter) => (
                                <p key={letter} className={`${letterClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {lastName.split("").map((letter) => (
                                <p key={letter} className={`${letterClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                        <div className="flex">
                            {firstName.split("").map((letter) => (
                                <p key={letter} className={`${letterClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className='ml-20'>
                        <div className="flex">
                            {developer.split("").map((letter) => (
                                <p key={letter} className={`${letterClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {full.split("").map((letter) => (
                                <p key={letter} className={`${letterClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {stack.split("").map((letter) => (
                                <p key={letter} className={`${letterClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {developer.split("").map((letter) => (
                                <p key={letter} className={`${midClass} ${teko.className}`}>
                                    {letter}
                                </p>
                            ))}
                        </div>

                        <div className="flex">
                            {full.split("").map((letter) => (
                                <p key={letter} className={`${letterClass} ${teko.className}`}>
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

export default Header
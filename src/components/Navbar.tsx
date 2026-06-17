'use client'

import { useState } from "react"
import Image from "next/image"
import { Fira_Code } from 'next/font/google'

const FiraCode = Fira_Code({ subsets: ['latin'] })
const NAV_ITEMS = ['inicio', 'Sobre', 'Projetos', 'Experiência', 'Skills']

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen((prev) => !prev)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav className="fixed top-0 left-0 w-full flex flex-col items-stretch px-10 md:px-14 pt-8 border-b border-white/5 pb-5 z-30 bg-[#171330]">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center hover:rotate-180 transition-transform duration-500 cursor-pointer z-20">
                    <p className="text-sky-500 text-2xl xl:text-3xl -m-1">&lt;</p>

                    <Image src="/imgHeader/A.png" alt="Letra A" width={30} height={30} />

                    <p className="text-sky-500 text-2xl xl:text-3xl -m-1">/&gt;</p>
                </div>

                <ul className={`hidden md:flex items-center gap-1 ${FiraCode.className}`}>
                    {NAV_ITEMS.map((item) => (
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <ul className={`md:hidden flex flex-col gap-1 mt-6 ${FiraCode.className}`}>
                    {NAV_ITEMS.map((item) => (
                        <a key={item} href={item === 'inicio' ? '#' : `#${item.toLowerCase()}`} onClick={closeMenu}>
                            <li className="text-sm text-white/55 hover:text-[#ffd401] transition-colors px-4 py-3 rounded-lg cursor-pointer">
                                {item}
                            </li>
                        </a>
                    ))}
                    <a href="#contatos" onClick={closeMenu}>
                        <li className="text-sm font-semibold text-[#0A0E1A] bg-[#ffd401] hover:bg-[#B39501] transition-colors px-5 py-3 rounded-lg cursor-pointer text-center mt-2">
                            Contatos
                        </li>
                    </a>
                </ul>
            )}
        </nav>
    )
}
'use client'
import Image from 'next/image'
import LetraA from '../../public/A.png'

import Whats from '../../public/whatsapp.png'
import Instagram from '../../public/Instagram.png'
import Twitter from '../../public/twitter.png'
import Linkedin from '../../public/Linkedin.png'
import GitHub from '../../public/GitHub.png'

import { Exo_2, Bebas_Neue } from 'next/font/google'
import { useState } from 'react'
const Exo = Exo_2({ subsets: ['latin'] })
const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="h-screen bg-gray-950 relative overflow-hidden">

            <nav className="flex justify-around">
                <div className='mt-28 flex items-center hover:rotate-180 transition-transform duration-500 cursor-pointer z-20'>
                    <p className='text-sky-500 text-2xl xl:text-3xl -m-2'>&lt;</p>
                    <Image src={LetraA} alt='Letra A' width={50} />
                    <p className='text-sky-500 text-2xl xl:text-3xl -m-1'>/&gt;</p>
                </div>

                <div className={`flex items-center justify-center mt-28 md:hidden ${isMenuOpen ? 'md:flex' : 'md:hidden'}`}>
                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`text-sky-500 size-10 cursor-pointer z-20 ${isMenuOpen ? 'hidden' : 'flex'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`text-sky-500 size-10 cursor-pointer z-20 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>

                <div className='hidden md:flex'>
                    <ul className={`flex items-center ${Exo.className}`}>
                        <a href="#sobre"><li className="mt-32 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Sobre</li></a>
                        <a href="#projetos"><li className="mt-32 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Projetos</li></a>
                        <a href="#skills"><li className="mt-32 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Skills</li></a>
                        <a href="#contatos"><li className="mt-32  text-xl text-white bg-blue-600 p-2 rounded-xl">Contatos</li></a>
                    </ul>
                </div>

                <div className={`absolute z-10 md:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}>
                    <div className='flex flex-col justify-center items-center w-screen h-screen rounded-xl bg-zinc-900 bg-opacity-85'>
                        <div className=''>
                            <ul className={`m-5 ${Exo.className}`}>
                                <a href="#sobre"><li className="mt-5 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Sobre</li></a>
                                <a href="#projetos"><li className="mt-5 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Projetos</li></a>
                                <a href="#skills"><li className="mt-5 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Skills</li></a>
                                <a href="#contatos"><li className="mt-5 mr-5 text-xl text-white p-1 hover:bg-blue-600 hover:rounded-md">Contatos</li></a>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center">
                            <ul className='flex mt-5'>

                                <li className='flex mx-2 flex-col items-center justify-center'>
                                    <a href="https://wa.me/5511999078219" target="_blank" rel="noopener noreferrer"><Image className="hover:-translate-y-2 duration-300 ease-in-out" src={Whats} alt='Icone Whats' width={25} /></a>
                                </li>

                                <li className='flex mx-2 flex-col items-center justify-center'>
                                    <a href="https://www.instagram.com/abneer_alves/" target="_blank" rel="noopener noreferrer"><Image className="hover:-translate-y-2 duration-300 ease-in-out" src={Instagram} alt='Icone instagram' width={25} /></a>
                                </li>

                                <li className='flex mx-2 flex-col items-center justify-center'>
                                    <a href="https://twitter.com/abneer_alves" target="_blank" rel="noopener noreferrer"><Image className="hover:-translate-y-2 duration-300 ease-in-out" src={Twitter} alt='Icone Twitter' width={25} /></a>
                                </li>

                                <li className='flex mx-2 flex-col items-center justify-center'>
                                    <a href="https://github.com/abneeralves" target="_blank" rel="noopener noreferrer"><Image className="invert hover:-translate-y-2 duration-300 ease-in-out" src={GitHub} alt='Icone GitHub' width={25} /></a>
                                </li>

                                <li className='flex mx-2 flex-col items-center justify-center'>
                                    <a href="https://www.linkedin.com/in/abner-alves-/" target="_blank" rel="noopener noreferrer"><Image className="hover:-translate-y-2 duration-300 ease-in-out" src={Linkedin} alt='Icone Linkedin' width={30} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='flex items-center justify-center md:justify-normal md:ml-28 h-2/4 lg:ml-44 xl:ml-62 2xl:ml-80 relative' data-aos="fade-right">
                <div>
                    <div className='flex items-center'>
                        <p className='text-3xl 2xl:text-4xl acena'>👋</p>
                        <p className={`text-3xl 2xl:text-3xl text-white ${Exo.className}`}>Olá, meu nome é</p>
                    </div>

                    <div className='flex'>
                        <div className='flex'>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 duration-300 ease-in-out hover:cursor-pointer hover:text-blue-700 ${BebasN.className}`}>A</p>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 hover:cursor-pointer duration-300 ease-in-out hover:text-blue-700 ${BebasN.className}`}>b</p>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 hover:cursor-pointer duration-300 ease-in-out hover:text-blue-700 ${BebasN.className}`}>n</p>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 hover:cursor-pointer duration-300 ease-in-out hover:text-blue-700 ${BebasN.className}`}>e</p>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 hover:cursor-pointer duration-300 ease-in-out hover:text-blue-700 ${BebasN.className}`}>r</p>
                        </div>

                        <div className='flex ml-5'>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 hover:cursor-pointer duration-300 ease-in-out hover:text-blue-700 ${BebasN.className}`}>A</p>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 hover:cursor-pointer duration-300 ease-in-out hover:text-blue-700 ${BebasN.className}`}>l</p>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 hover:cursor-pointer duration-300 ease-in-out hover:text-blue-700 ${BebasN.className}`}>v</p>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 hover:cursor-pointer duration-300 ease-in-out hover:text-blue-700 ${BebasN.className}`}>e</p>
                            <p className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 hover:-translate-y-2 hover:cursor-pointer duration-300 ease-in-out hover:text-blue-700 ${BebasN.className}`}>s</p>
                        </div>

                    </div>


                    <div className='flex items-end'>
                        <span className='text-white text-2xl mr-1'>&lt;</span>
                        <p className={`text-2xl 2xl:text-3xl text-white ${Exo.className}`}>e sou Desenvolvedor Front-end.</p>
                        <span className='text-white text-2xl ml-2'>/&gt;</span>
                    </div>
                </div>
            </div>

            <svg
  viewBox="0 0 1440 590"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
  className="absolute bottom-0 left-0 w-full pointer-events-none"
>
  <defs>
    <linearGradient id="blueGradientPro" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#38bdf8" />   {/* mais vibrante */}
      <stop offset="35%" stopColor="#3b82f6" />
      <stop offset="70%" stopColor="#2563eb" />
      <stop offset="100%" stopColor="#1e3a8a" />
    </linearGradient>
  </defs>

  <path
    d="M 0,600 L 0,90 C 53.34,88.83 106.68,87.67 149,82 C 191.31,76.32 222.60,66.13 265,75 C 307.39,83.86 360.87,111.80 413,115 C 465.12,118.19 515.87,96.66 567,82 C 618.12,67.33 669.62,59.55 722,69 C 774.37,78.44 827.61,105.11 870,101 C 912.38,96.88 943.89,61.96 989,53 C 1034.10,44.03 1092.79,61.00 1150,66 C 1207.20,70.99 1262.91,63.99 1311,66 C 1359.08,68.00 1399.54,79.00 1440,90 L 1440,600 Z"
    fill="url(#blueGradientPro)"
    fillOpacity="0.2"
  />

  <path
    d="M 0,600 L 0,210 C 43.07,220.72 86.14,231.45 131,223 C 175.85,214.54 222.49,186.90 278,185 C 333.50,183.09 397.87,206.92 454,227 C 510.12,247.07 557.99,263.38 594,250 C 630.00,236.61 654.12,193.51 703,190 C 751.87,186.48 825.50,222.54 881,238 C 936.49,253.45 973.86,248.30 1018,239 C 1062.13,229.69 1113.03,216.22 1162,214 C 1210.96,211.77 1257.98,220.79 1304,222 C 1350.01,223.20 1395.00,216.60 1440,210 L 1440,600 Z"
    fill="url(#blueGradientPro)"
    fillOpacity="0.4"
  />

  <path
    d="M 0,600 L 0,330 C 41.51,343.15 83.02,356.30 129,353 C 174.97,349.69 225.42,329.92 278,321 C 330.57,312.07 385.26,314.00 432,317 C 478.73,319.99 517.50,324.06 567,318 C 616.49,311.93 676.71,295.73 728,294 C 779.28,292.26 821.62,304.98 861,316 C 900.37,327.01 936.78,336.31 992,336 C 1047.21,335.68 1121.25,325.76 1167,319 C 1212.74,312.23 1230.21,308.63 1271,311 C 1311.78,313.36 1375.89,321.68 1440,330 L 1440,600 Z"
    fill="url(#blueGradientPro)"
    fillOpacity="0.65"
  />

  <path
    d="M 0,600 L 0,450 C 54.07,457.28 108.15,464.57 158,458 C 207.84,451.42 253.44,430.98 291,436 C 328.55,441.01 358.05,471.47 413,475 C 467.94,478.52 548.33,455.12 596,444 C 643.66,432.87 658.59,434.02 696,443 C 733.40,451.97 793.27,468.76 853,461 C 912.72,453.23 972.31,420.93 1022,425 C 1071.68,429.06 1111.45,469.51 1157,475 C 1202.54,480.48 1253.87,450.99 1302,441 C 1350.12,431.00 1395.06,440.50 1440,450 L 1440,600 Z"
    fill="url(#blueGradientPro)"
    fillOpacity="1"
  />
</svg>
        </header>
    )
}

export default Header
'use client'
import Image from 'next/image'
import LetraA from '../../public/A.png'

import Whats from '../../public/whatsapp.png'
import Instagram from '../../public/instagram.png'
import Twitter from '../../public/twitter.png'
import Linkedin from '../../public/Linkedin.png'
import GitHub from '../../public/GitHub.png'

import { Exo_2, Bebas_Neue } from 'next/font/google'
import { useState } from 'react'
const Exo = Exo_2({subsets: ['latin']})
const BebasN = Bebas_Neue({subsets: ['latin'], weight: '400'})

const Header: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    } 

    return (
        <header className="h-screen" style={{ backgroundImage: 'radial-gradient(circle at center, #111837 15%, #09090b 70%)'}}>

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
                                    <a href="https://wa.me/5511999078219" target="_blank" rel="noopener noreferrer"><Image className="hover:-translate-y-2 duration-300 ease-in-out" src={Whats} alt='Icone HTML' width={25} /></a>
                                </li>

                                <li className='flex mx-2 flex-col items-center justify-center'>
                                    <a href="https://www.instagram.com/abneer_alves/" target="_blank" rel="noopener noreferrer"><Image className="hover:-translate-y-2 duration-300 ease-in-out" src={Instagram} alt='Icone HTML' width={25} /></a>
                                </li>

                                <li className='flex mx-2 flex-col items-center justify-center'>
                                    <a href="https://twitter.com/abneer_alves" target="_blank" rel="noopener noreferrer"><Image className="hover:-translate-y-2 duration-300 ease-in-out" src={Twitter}  alt='Icone CSS' width={25}/></a>
                                </li>
                        
                                <li className='flex mx-2 flex-col items-center justify-center'>
                                    <a href="https://github.com/abneeralves" target="_blank" rel="noopener noreferrer"><Image className="invert hover:-translate-y-2 duration-300 ease-in-out" src={GitHub} alt='Icone JavaScript' width={25} /></a>
                                </li>

                                <li className='flex mx-2 flex-col items-center justify-center'>
                                    <a href="https://www.linkedin.com/in/abner-alves-/" target="_blank" rel="noopener noreferrer"><Image className="hover:-translate-y-2 duration-300 ease-in-out" src={Linkedin} alt='Icone TypeScript' width={30} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='flex items-center h-2/4 ml-10 lg:ml-44 xl:ml-62 2xl:ml-80 relative' data-aos="fade-right">
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
                        <p className={`text-2xl 2xl:text-3xl text-white ${Exo.className}`}>and I'm a Front-end Developer.</p>
                        <span className='text-white text-2xl ml-2'>/&gt;</span>
                    </div>
                </div>
            </div>
            
            <svg className='ondas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#2563EB" fill-opacity="10000" d="M0,320L34.3,288C68.6,256,137,192,206,181.3C274.3,171,343,213,411,224C480,235,549,213,617,170.7C685.7,128,754,64,823,64C891.4,64,960,128,1029,160C1097.1,192,1166,192,1234,160C1302.9,128,1371,64,1406,32L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </header>
    )
}

export default Header
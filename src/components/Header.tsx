'use client'
import Image from 'next/image'
import LetraA from '../../public/A.png'
import HTML from '../../public/HTML.png'
import CSS from '../../public/CSS.png'
import JS from '../../public/JS.png'
import REACT from '../../public/REACT.png'
import BT from '../../public/BOOTSTRAP.png'
import NEXT from '../../public/NEXT.png'
import TAILWIND from '../../public/TAILWIND.png'
import TS from '../../public/TS.png'

import React, { useEffect, useRef, useState } from 'react'

const AutoHideImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    const [isVisible, setIsVisible] = useState (true)
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect (() => {
        const intevalId = setInterval (() => {
            setIsVisible((prev) => !prev)
        }, 2000)

        return () => clearInterval(intevalId)
    }, [])


    return (
        <header className="h-screen bg-gray-900">
            <nav className="flex justify-between">
                <div>
                    <a href=""><Image className='mx-64 mt-28' src={LetraA} alt='Letra A' width={70} /></a>  
                </div>

                <div>
                    <ul className="flex items-center">
                        <a href=""><li className="mt-32 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md ">Sobre</li></a>
                        <a href=""><li className="mt-32 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Projetos</li></a>
                        <a href=""><li className="mt-32 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Skills</li></a>
                       <a href=""><li className="mt-32 mr-64 text-xl text-white bg-blue-600 p-2 rounded-xl">Contatos</li></a>
                    </ul>
                </div>
            </nav>

            <div className='flex items-center h-2/4 ml-64'>
                <div>
                    <p className='text-3xl text-white'>Olá, meu nome é</p>
                    <h1 className="text-6xl mt-3 text-sky-300">&lt;Abner Alves /&gt;</h1>
                    <p className='text-3xl mt-3 text-white'>e eu sou Desenvolvedor Front-end.</p>
                </div>

               
                 {/* <ul className='flex justify-end mr-56 items-center'>

                    <li>
                        <Image className={`filter ransition-opacity duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={HTML} alt='' width={50} />
                    </li>

                    <li>
                        <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} ref={imageRef} src={CSS}  alt='' width={50}/>
                    </li>

                    <li>
                        <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={JS} alt='' width={50} />
                    </li>

                    <li>
                        <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={TS} alt='' width={50}/>
                    </li>

                    <li>
                        <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={BT} alt='' width={50}/>
                    </li>

                    <li>
                        <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={REACT} alt='' width={50}/> 
                    </li>

                    <li>
                        <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={TAILWIND} alt='' width={50}/> 
                    </li>

                    <li>
                        <Image className={`invert filter brightness-50 duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={NEXT} alt='' width={50}/> 
                    </li>
                </ul>  */}
                
            </div>
            
            <svg className='ondas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path className='onda2' fill="#0099ff" fill-opacity="1" d="M0,0L30,37.3C60,75,120,149,180,154.7C240,160,300,96,360,74.7C420,53,480,75,540,101.3C600,128,660,160,720,154.7C780,149,840,107,900,90.7C960,75,1020,85,1080,96C1140,107,1200,117,1260,106.7C1320,96,1380,64,1410,48L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>

            <path className='onda1' fill="#2563eb" fill-opacity="10000" d="M0,320L34.3,288C68.6,256,137,192,206,181.3C274.3,171,343,213,411,224C480,235,549,213,617,170.7C685.7,128,754,64,823,64C891.4,64,960,128,1029,160C1097.1,192,1166,192,1234,160C1302.9,128,1371,64,1406,32L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </header>
    )
}

export default AutoHideImage
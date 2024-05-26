'use client'
import Image from 'next/image'
import HTML from '../../public/HTML.png'
import CSS from '../../public/CSS.png'
import JS from '../../public/JS.png'
import REACT from '../../public/REACT.png'
import NEXT from '../../public/NEXT.png'
import TAILWIND from '../../public/TAILWIND.png'
import TS from '../../public/TS.png'
import GIT from '../../public/GIT.png'
import React, { useEffect, useRef, useState } from 'react'
import { Bebas_Neue } from "next/font/google"

const BebasN = Bebas_Neue({subsets: ['latin'], weight: '400'})

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
        <div className="flex flex-col items-center bg-zinc-900 h-full" style={{ backgroundImage: 'radial-gradient(circle at center, #111837 15%, #09090b 70%)'}}>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#172554" fill-opacity="1" d="M0,160L34.3,186.7C68.6,213,137,267,206,245.3C274.3,224,343,128,411,128C480,128,549,224,617,224C685.7,224,754,128,823,101.3C891.4,75,960,117,1029,160C1097.1,203,1166,245,1234,218.7C1302.9,192,1371,96,1406,48L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg> 

            <div className=''>
            <div className="relative flex justify-center items-end">
                <div className="flex justify-center items-center mt-32">
                    <div className="z-20 absolute">
                        <h1 className={`text-7xl text-blue-300 mt-16 ${BebasN.className}`}>Habilidades.</h1>
                    </div>

                    <div className="z-10 absolute flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-blue-900 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                        </svg>

                        <h2 className={`text-9xl text-blue-900 ${BebasN.className}`}>Skills</h2>
                    </div>
                </div>  
            </div>

                <div className='flex flex-col items-center justify-center mt-32'>
                    <ul className='grid grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-5 '>

                        <li className='flex items-center justify-center rounded-lg border border-blue-600'>
                            <Image className={`filter ransition-opacity duration-1000 mx-16 xl:mx-32 my-5 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={HTML} alt='' width={45} />
                        </li>

                        <li className='flex items-center justify-center rounded-lg border border-blue-600'>
                            <Image className={`filter duration-1000 mx-16 xl:mx-32 my-5 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} ref={imageRef} src={CSS}  alt='' width={50}/>
                        </li>

                        <li className='flex items-center justify-center rounded-lg border border-blue-600'>
                            <Image className={`filter duration-1000 mx-16 xl:mx-32 my-5 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={JS} alt='' width={50} />
                        </li>

                        <li className='flex items-center justify-center rounded-lg border border-blue-600'>
                            <Image className={`filter duration-1000 mx-16 xl:mx-32 my-5 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={TS} alt='' width={50}/>
                        </li>

                        <li className='flex items-center justify-center rounded-lg border border-blue-600'>
                            <Image className={`filter duration-1000 mx-16 xl:mx-32 my-5 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={GIT} alt='' width={50}/> 
                        </li>

                        <li className='flex items-center justify-center rounded-lg border border-blue-600'>
                            <Image className={`filter duration-1000 mx-16 xl:mx-32 my-5 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={REACT} alt='' width={50}/> 
                        </li>

                        <li className='flex items-center justify-center rounded-lg border border-blue-600'>
                            <Image className={`filter duration-1000 mx-16 xl:mx-32 my-5 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={TAILWIND} alt='' width={50}/> 
                        </li>

                        <li className='flex items-center justify-center rounded-lg border border-blue-600'>
                            <Image className={`invert filter brightness-50 duration-1000 mx-16 xl:mx-32 my-5 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={NEXT} alt='' width={50}/> 
                        </li>
                    </ul>  
                </div>
            </div>    
        </div>
    )
}

export default AutoHideImage
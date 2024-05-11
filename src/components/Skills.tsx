'use client'
import Image from 'next/image'
import HTML from '../../public/HTML.png'
import CSS from '../../public/CSS.png'
import JS from '../../public/JS.png'
import REACT from '../../public/REACT.png'
import BT from '../../public/BOOTSTRAP.png'
import NEXT from '../../public/NEXT.png'
import TAILWIND from '../../public/TAILWIND.png'
import TS from '../../public/TS.png'
import GIT from '../../public/GIT.png'

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
        <div className="flex flex-col items-center bg-zinc-900 h-full">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#2563EB" fill-opacity="1" d="M0,160L34.3,186.7C68.6,213,137,267,206,245.3C274.3,224,343,128,411,128C480,128,549,224,617,224C685.7,224,754,128,823,101.3C891.4,75,960,117,1029,160C1097.1,203,1166,245,1234,218.7C1302.9,192,1371,96,1406,48L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg> 

            <div className=''>
                <div className='flex justify-center '>
                    <h1 className='text-white text-5xl '>Habilidades.</h1>
                </div>

                <div className='flex flex-col items-center justify-center mt-5'>
                    <ul className='grid grid-cols-5 '>

                        <li className='p-10 rounded-lg border m-2'>
                            <Image className={`filter ransition-opacity duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={HTML} alt='' width={45} />
                        </li>

                        <li className='p-10 rounded-lg border m-2'>
                            <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} ref={imageRef} src={CSS}  alt='' width={50}/>
                        </li>

                        <li className='p-10 rounded-lg border m-2'>
                            <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={JS} alt='' width={50} />
                        </li>

                        <li className='p-10 rounded-lg border m-2'>
                            <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={TS} alt='' width={50}/>
                        </li>

                        <li className='p-10 rounded-lg border m-2'>
                            <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={GIT} alt='' width={50}/> 
                        </li>

                        <li className='p-10 rounded-lg border m-2'>
                            <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={BT} alt='' width={50}/>
                        </li>

                        <li className='p-10 rounded-lg border m-2'>
                            <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={REACT} alt='' width={50}/> 
                        </li>

                        <li className='p-10 rounded-lg border m-2'>
                            <Image className={`filter duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={TAILWIND} alt='' width={50}/> 
                        </li>

                        <li className='p-10 rounded-lg border m-2'>
                            <Image className={`invert filter brightness-50 duration-1000 ${isVisible ? 'filter brightness-50' : 'filter brightness-100'}`} src={NEXT} alt='' width={50}/> 
                        </li>
                    </ul>  
                </div>
            </div>    
        </div>
    )
}

export default AutoHideImage

import Image from 'next/image'
import HTML from '../../public/HTML.png'
import CSS from '../../public/CSS.png'
import JS from '../../public/JS.png'
import REACT from '../../public/REACT.png'
import NEXT from '../../public/NEXT.png'
import TAILWIND from '../../public/TAILWIND.png'
import TS from '../../public/TS.png'
import GIT from '../../public/GIT.png'
import LINUX from '../../public/LINUX.png'
import { Bebas_Neue } from "next/font/google"

const BebasN = Bebas_Neue({subsets: ['latin'], weight: '400'})

export default function skills () {
    return (
        <div id='skills' className='flex flex-col items-center bg-blue-950 h-full'>
            <div className="relative flex justify-center items-end" data-aos="fade-right">
                <div className="flex justify-center items-center mt-32">
                    <div className="z-20 absolute">
                        <h1 className={`sm:text-7xl text-6xl text-blue-300 mt-16 ${BebasN.className}`}>Habilidades.</h1>
                    </div>

                    <div className="z-10 absolute flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-blue-900 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                        </svg>

                        <h2 className={`sm:text-9xl text-8xl text-blue-900 ${BebasN.className}`}>Skills</h2>
                    </div>
                </div>  
            </div>

            <div className='flex flex-col items-center justify-center mt-32 mb-5'>
                <ul className='grid grid-cols-2 gap-3 2xl:grid-cols-4 2xl:gap-5 '>

                    <li className='flex flex-col items-center justify-center rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-700' data-aos="fade-up">
                        <Image className={`filter ransition-opacity duration-1000 mx-16 xl:mx-32 my-2`} src={HTML} alt='Icone HTML' width={45} />
                        <h3 className={`text-zinc-200 font-bold filter ransition-opacity duration-1000`}>HTML</h3>
                    </li>

                    <li className='flex flex-col items-center justify-center rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-700' data-aos="fade-up">
                        <Image className={`filter duration-1000 mx-16 md:mx-44 2xl:mx-32 my-2`} src={CSS}  alt='Icone CSS' width={50}/>
                        <h3 className={`text-zinc-200 font-bold filter ransition-opacity duration-1000`}>CSS</h3>
                    </li>

                    <li className='flex flex-col items-center justify-center rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-700' data-aos="fade-up">
                        <Image className={`filter duration-1000 mx-16 xl:mx-32 my-2`} src={JS} alt='Icone JavaScript' width={50} />
                        <h3 className={`text-zinc-200 font-bold filter ransition-opacity duration-1000`}>JavaScript</h3>
                    </li>

                    <li className='flex flex-col items-center justify-center rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-700' data-aos="fade-up">
                        <Image className={`filter duration-1000 mx-16 xl:mx-32 my-2`} src={TS} alt='Icone TypeScript' width={50}/>
                        <h3 className={`text-zinc-200 font-bold filter ransition-opacity duration-1000`}>TypeScript</h3>
                    </li>

                    <li className='flex flex-col items-center justify-center rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-700' data-aos="fade-up">
                        <Image className={`filter duration-1000 mx-16 xl:mx-32 `} src={GIT} alt='Icone GIT' width={50}/> 
                        <h3 className={`text-zinc-200 font-bold filter ransition-opacity duration-1000`}>Git</h3>
                    </li>

                    <li className='flex flex-col items-center justify-center rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-700' data-aos="fade-up">
                        <Image className={`filter duration-1000 mx-16 xl:mx-32 my-2`} src={REACT} alt='Icone React' width={50}/>
                        <h3 className={`text-zinc-200 font-bold filter ransition-opacity duration-1000`}>React</h3>
                    </li>

                    <li className='flex flex-col items-center justify-center rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-700' data-aos="fade-up">
                        <Image className={`filter duration-1000 mx-16 xl:mx-32 my-2`} src={TAILWIND} alt='Icone Tailwind' width={50}/>
                        <h3 className={`text-zinc-200 font-bold filter ransition-opacity duration-1000 mt-2`}>Tailwind</h3>
                    </li>

                    <li className='flex flex-col items-center justify-center rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-700' data-aos="fade-up">
                        <Image className={`invert filter brightness-50 duration-1000 mx-16 xl:mx-32 mt-3`} src={NEXT} alt='Icone Nextjs' width={50}/>
                        <h3 className={`text-zinc-200 font-bold filter ransition-opacity duration-1000 my-1`}>Next js</h3>
                    </li>

                    <li className='flex flex-col items-center justify-center rounded-lg bg-gray-900 hover:shadow-lg hover:shadow-blue-700' data-aos="fade-up">
                        <Image className={`filter duration-1000 mx-16 xl:mx-32 mt-3`} src={LINUX} alt='Icone Nextjs' width={50}/>
                        <h3 className={`text-zinc-200 font-bold filter ransition-opacity duration-1000 my-1`}>Linux</h3>
                    </li>
                </ul>  
            </div>
        </div>
    )
}
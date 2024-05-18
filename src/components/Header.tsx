'use client'
import Image from 'next/image'
import LetraA from '../../public/A.png'

import { Exo_2, Bebas_Neue } from 'next/font/google'
const Exo = Exo_2({subsets: ['latin']})
const BebasN = Bebas_Neue({subsets: ['latin'], weight: '400'})

export default function Header () {

    return (
        <header className="h-screen"  style={{ backgroundImage: 'radial-gradient(circle at center, #111837 15%, #09090b 70%)'}}>

            <nav className="flex justify-around">
                <div className=' mt-28 flex items-center hover:rotate-180 transition-transform duration-300 cursor-pointer'>
                    <p className='text-sky-500 text-2xl xl:text-3xl -m-2'>&lt;</p>
                    <Image className='' src={LetraA} alt='Letra A' width={50} />
                    <p className='text-sky-500 text-2xl xl:text-3xl -m-1'>/&gt;</p>
                </div>

                <div>
                    <ul className={`flex items-center ${Exo.className}`}>
                        <a href=""><li className="mt-32 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md ">Sobre</li></a>
                        <a href=""><li className="mt-32 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Projetos</li></a>
                        <a href=""><li className="mt-32 mr-5 text-xl text-white rounded-md p-1 hover:bg-blue-600 hover:rounded-md">Skills</li></a>
                       <a href=""><li className="mt-32  text-xl text-white bg-blue-600 p-2 rounded-xl">Contatos</li></a>
                    </ul>
                </div>
            </nav>

            <div className='flex items-center h-2/4 ml-10 lg:ml-44 xl:ml-62 2xl:ml-80 relative'>
                <div>
                    <div className='flex items-center'>
                        <p className='text-3xl 2xl:text-4xl acena'>👋</p>
                        <p className={`text-3xl 2xl:text-3xl text-white ${Exo.className}`}>Olá, meu nome é</p>
                    </div>
                        <h1 className={`text-8xl 2xl:text-9xl mt-2 text-sky-500 ${BebasN.className}`}>Abner Alves.</h1>
                    <div className='flex items-end'>
                        <span className='text-white text-2xl mr-1'>&lt;</span>
                        <p className={`text-2xl 2xl:text-3xl text-white ${Exo.className}`}>and I'm a Frond-end Developer.</p>
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
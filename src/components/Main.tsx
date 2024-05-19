import Image from 'next/image'
import FtAbner from '../../public/FtAbner.jpg'

import { Exo_2 } from 'next/font/google'
const Exo = Exo_2({subsets: ['latin'], weight: '400'})

export default function Main () {
    return (
        <main className="flex flex-col items-center justify-center bg-blue-600 h-full">
            
            <div className='md:grid grid-cols-2 2xl:grid-cols-2 2xl:gap-4 bg-gray-900 lg:h-6/6 w-4/6  rounded-2xl hover:shadow-md hover:shadow-gray-300'>
                <div className='col-span-1 flex items-center justify-center p-5'>
                    <Image className='w-full h-full 2xl:h-[625px] rounded-xl' src={FtAbner} alt='Foto Abner'/>
                </div>

                <div className='col-span-1 flex flex-col items-center mt-5'>
                    <h1 className={`text-white text-2xl xl:text-3xl 2xl:mt-5 ${Exo.className}`}>Deixa-me Apresentar.</h1>
                    <p className={`text-white text-md lg:text-xl 2xl:text-2xl lg:mt-5 p-5 md:pl-0 2xl:mt-10 ${Exo.className}`}>Meu nome é Abner, um entusiasta da tecnologia de 19 anos, atualmente imerso no mundo do desenvolvimento front-end. Sou um estudante dedicado do 3º semestre na UNIVOVE, buscando constantemente expandir meus horizontes e mergulhar nas complexidades do desenvolvimento web.
                    <br />
                    <br />
                    Com um olhar curioso e uma paixão pela resolução de problemas, estou sempre pronto para abraçar novos desafios e aprender com cada experiência. Meu objetivo é não apenas dominar as tecnologias atuais, mas também explorar novas áreas, especialmente no desenvolvimento back-end.</p>
                </div>
            </div>
        </main>
    )
}
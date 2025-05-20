import Image from 'next/image'
import FtAbner from '../../public/FtAbner.jpg'
import { Exo_2, Bebas_Neue } from 'next/font/google'

const Exo = Exo_2({subsets: ['latin'], weight: '400'})
const BebasN = Bebas_Neue({subsets: ['latin'], weight: '400'})

export default function Main () {
    return (
        <main id='sobre' className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-600 to-blue-950 h-full pt-10">
            
            <div className='xl:grid grid-cols-2 2xl:grid-cols-2 2xl:gap-4 bg-gray-900 lg:h-6/6 w-4/6 rounded-2xl hover:shadow-lg hover:shadow-blue-600'  data-aos="fade-up">
                <div className='col-span-1 flex items-center justify-center p-5'>
                    <Image className='w-full h-full 2xl:h-[625px] rounded-xl' src={FtAbner} alt='Foto Abner'/>
                </div>

                <div className='col-span-1'>
                    <div className="relative flex justify-center items-end" data-aos="fade-right">
                        <div className="flex justify-center items-center mt-20">
                            <div className="z-20 absolute">
                                <h1 className={`sm:text-7xl text-4xl text-blue-300 mt-16 ${BebasN.className}`}>Sobre Mim.</h1>
                            </div>

                            <div className="z-10 absolute flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-blue-900 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>

                                <h2 className={`sm:text-9xl text-6xl  text-blue-900 ${BebasN.className}`}>About</h2>
                            </div>
                        </div>  
                    </div>

                    <div className='mt-24' data-aos="fade-up">
                        <p className={`text-white text-md lg:text-xl xl:mt-5 p-5 pb-0 xl:pl-0 2xl:mt-5 ${Exo.className}`}>Meu nome é Abner, um entusiasta da tecnologia de 20 anos, atualmente imerso no mundo do desenvolvimento front-end. Sou um estudante dedicado do 5º semestre na UNIVOVE, buscando constantemente expandir meus horizontes e mergulhar nas complexidades do desenvolvimento web.
                        <br />
                        <br />
                        Com um olhar curioso e uma paixão pela resolução de problemas, estou sempre pronto para abraçar novos desafios e aprender com cada experiência. Meu objetivo é não apenas dominar as tecnologias atuais, mas também explorar novas áreas, especialmente no desenvolvimento back-end.</p>
                    </div> 
                    
                    <div className='flex flex-col m-5 xl:ml-0 2xl:ml-0 xl:mr-8 2xl:mt-10' data-aos="fade-up">
                        <p className={`text-zinc-500 text-lg mb-2 ${Exo.className}`}>OBS: Você pode encontrar este projeto no <span className='text-blue-200 underline decoration-1'><a href="https://github.com/abneeralves/Portfolio" target="_blank" rel="noopener noreferrer">GitHub.</a></span></p>
                        <a className={`flex items-center justify-center p-2 w-full rounded-md text-center text-white border-2 border-blue-500 hover:shadow-lg hover:shadow-blue-400 hover:bg-white hover:text-black ${Exo.className}`} href="/CurriculoAbner.pdf" download="CurriculoAbner.pdf"><span className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                            <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                            <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                        </svg></span>Download Curriculo.</a>
                    </div>
                </div>
            </div>
        </main>
    )
}
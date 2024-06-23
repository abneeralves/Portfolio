import Image from "next/image"
import Porscher from '../../public/imgPorsche.png'
import Mario from '../../public/imgMario.png'
import Netflix from '../../public/imgNetflix.png'
import IMC from '../../public/ImgIMC.png'
import Cep from '../../public/imgCep.png'
import Calc from '../../public/ImgCalc.png'
import HTML from '../../public/HTML.png'
import CSS from '../../public/CSS.png'
import JS from '../../public/JS.png'
import REACT from '../../public/REACT.png'
import NEXT from '../../public/NEXT.png'
import TAILWIND from '../../public/TAILWIND.png'
import TS from '../../public/TS.png'
import GitHub from '../../public/GitHub.png'
import { Exo_2, Bebas_Neue } from "next/font/google"

const Exo = Exo_2({subsets: ['latin'], weight: '400'})
const BebasN = Bebas_Neue({subsets: ['latin'], weight: '400'})

export default function Projetos () {
    return (
        <div className="bg-blue-950 h-full">
            <div className="relative flex justify-center items-end" data-aos="fade-right">
                <div className="flex justify-center items-center mt-64">
                    <div className="z-20 absolute">
                        <h1 className={`sm:text-7xl text-6xl text-blue-300 mt-16 ${BebasN.className}`}>Projetos.</h1>
                    </div>

                    <div id="projetos" className="z-10 absolute flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-20 text-blue-900 mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                        <h2 className={`sm:text-9xl text-7xl text-blue-900 ${BebasN.className}`}>Projects</h2>
                    </div>
                </div>  
            </div>

            <div  className="flex flex-col items-center justify-center mt-24">
                <ul className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5">
                    <li className="bg-gray-900 w-96 xl:w-[415px] h-96 rounded-xl hover:shadow-lg hover:shadow-blue-600" data-aos="fade-up">

                        <Image className="rounded-md" src={Porscher} alt="Imagem principal Porsche" />

                        <div className="mt-5">
                            <h1 className={`text-blue-600 text-2xl ml-5 ${Exo.className}`}>Site Porsche.</h1>
                            <p className={`text-white mt-2 ml-5 text-left ${Exo.className}`}>"Não há nada como criar um projeto inspirado na minha marca de carros favorita, a Porsche."</p>
                        </div>

                        <div className="flex justify-between mx-5 my-4">
                            <div className="flex items-center gap-1">
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={HTML} alt="Icone HTML" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={CSS} alt="Icone CSS" width={25}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={TS} alt="Icone TypeScript" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={REACT} alt="Icone React" width={20}/>
                                <Image className="invert cursor-pointer transition-transform hover:-translate-y-2" src={NEXT} alt="Icone Nextjs" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={TAILWIND} alt="Icone Tailwind" width={20}/>
                            </div>

                            <div className="flex items-center">
                                <p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                    <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" /></svg>
                                </span></p>
                            </div>
                        </div>
                    </li>
                    
                    <li className="bg-gray-900 w-96 xl:w-[415px] h-96 rounded-xl hover:shadow-lg hover:shadow-blue-600" data-aos="fade-up">
                        <Image className="rounded-md" src={Mario} alt="Imagem principal Mario" />

                        <div className="mt-5">
                            <h1 className={`text-blue-600 text-2xl ml-5 ${Exo.className}`}>Site Mario.</h1>
                            <p className="text-white mt-2 ml-5 text-left">"Inspirado pelo design do site do Mario, a maior relíquia dos jogos."</p>
                        </div>

                        <div className="flex justify-between mx-5 my-4">
                            <div className="flex items-center gap-1">
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={HTML} alt="Icone HTML" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={CSS} alt="Icone Css" width={25}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={JS} alt="Icone JavaSript" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={REACT} alt="Icone React" width={20}/>
                            </div>

                            <div className="flex items-center">
                                <p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                    <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" /></svg>
                                </span></p>
                            </div>
                        </div>
                        
                    </li>

                    <li className="bg-gray-900 w-96 xl:w-[415px] h-96 rounded-xl hover:shadow-lg hover:shadow-blue-600" data-aos="fade-up">
                        <Image className="rounded-md" src={Netflix} alt="Imagem principal Netflix" />

                        <div className="mt-5">
                            <h1 className={`text-blue-600 text-2xl ml-5 ${Exo.className}`}>Site Netflix.</h1>
                            <p className={`text-white mt-2 ml-5 text-left ${Exo.className}`}>"Clone do site da maior plataforma de streaming de filmes e series, a Netflix."</p>
                        </div>

                        <div className="flex justify-between mx-5 my-4">
                            <div className="flex items-center gap-1">
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={HTML} alt="Icone HTML" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={CSS} alt="Icone CSS" width={25}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={JS} alt="Icone JavaScript" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={REACT} alt="Icone React" width={20}/>
                            </div>

                            <div className="flex items-center">
                                <p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                    <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" /></svg>
                                </span></p>
                            </div>
                        </div>
                        
                    </li>

                    <li className="bg-gray-900 w-96 xl:w-[415px] h-96 rounded-xl hover:shadow-lg hover:shadow-blue-600" data-aos="fade-up">
                        <Image className="rounded-md" src={IMC} alt="Imagem projeto Calculadora IMC" />
                        
                        <div className="mt-5">
                            <h1 className={`text-blue-600 text-2xl ml-5 ${Exo.className}`}>Calculadora IMC.</h1>
                            <p className={`text-white mt-2 ml-5 text-left ${Exo.className}`}>"Nada melhor do que uma calculadora IMC para descobrir se você está dentro do peso ideal."</p>   
                        </div>

                        <div className="flex justify-between mx-5 my-4">
                            <div className="flex items-center gap-1">
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={HTML} alt="Icone HTML" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={CSS} alt="Icone CSS" width={25}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={JS} alt="Icone JavaScript" width={20}/>
                            </div>

                            <div className="flex items-center">
                                <p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                    <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" /></svg>
                                </span></p>
                            </div>
                        </div>
                        
                    </li>

                    <li className="bg-gray-900 w-96 xl:w-[415px] h-96 rounded-xl hover:shadow-lg hover:shadow-blue-600" data-aos="fade-up">
                        <Image className="rounded-md" src={Cep} alt="Imagem Porjeto Cep" />

                        <div className="mt-5">
                            <h1 className={`text-blue-600 text-2xl ml-5 ${Exo.className}`}>Buscador de CEP.</h1>
                            <p className={`text-white mt-2 ml-5 text-left ${Exo.className}`}>"Fornece informações precisas sobre seu endereço."</p>
                        </div>

                        <div className="flex justify-between mx-5 my-4 xl:my-11">
                            <div className="flex items-center gap-1">
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={HTML} alt="Icone HTML" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={CSS} alt="Icono CSS" width={25}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={JS} alt="Icone JavaSript" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={REACT} alt="Icone React" width={20}/>
                            </div>

                            <div className="flex items-center">
                                <p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                    <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" /></svg>
                                </span></p>
                            </div>
                        </div>
                    </li>

                    <li className="bg-gray-900 w-96 xl:w-[415px] h-96 rounded-xl mb-32 hover:shadow-lg hover:shadow-blue-600" data-aos="fade-up">
                        <Image className="rounded-md" src={Calc} alt="Imagem Porjeto Calculadora" />

                        <div className="mt-5">
                            <h1 className={`text-blue-600 text-2xl ml-5 ${Exo.className}`}>Calculadora.</h1>
                            <p className={`text-white mt-2 ml-5 text-left ${Exo.className}`}>"Já fez as contas do dia? Aqui está a sua calculadora pronta para ajudar."</p>
                        </div>

                        <div className="flex justify-between mx-5 my-4">
                            <div className="flex items-center gap-1">
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={HTML} alt="Icone HTML" width={20}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={CSS} alt="Icone CSS" width={25}/>
                                <Image className="cursor-pointer transition-transform hover:-translate-y-2" src={JS} alt="Icone JavaScript" width={20}/>
                            </div>

                            <div className="flex items-center">
                                <p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                                    <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" /></svg>
                                </span></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
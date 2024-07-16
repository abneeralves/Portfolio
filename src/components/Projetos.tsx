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
                                    <a href="https://github.com/abneeralves/SitePorsche" target="_blank" rel="noopener noreferrer"><p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" className="size-6 invert">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                                </span></p></a>
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
                                    <a href="https://github.com/abneeralves/Site-Mario" target="_blank" rel="noopener noreferrer"><p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" className="size-6 invert">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                                </span></p></a>
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
                                    <a href="https://github.com/abneeralves/CloneNetflix" target="_blank" rel="noopener noreferrer"><p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" className="size-6 invert">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                                </span></p></a>
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
                                    <a href="https://github.com/abneeralves/CalculadoraIMC" target="_blank" rel="noopener noreferrer"><p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" className="size-6 invert">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                                </span></p></a>
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
                                    <a href="https://github.com/abneeralves/BuscadorCep" target="_blank" rel="noopener noreferrer"><p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" className="size-6 invert">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                                </span></p></a>
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
                                    <a href="https://github.com/abneeralves/Calculadora" target="_blank" rel="noopener noreferrer"><p className={`flex items-center px-2 hover:-translate-y-2 duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-blue-400 border border-blue-600 rounded-md text-white ${Exo.className}`}>Ver mais <span className="ml-1"><svg xmlns="http://www.w3.org/2000/svg" className="size-6 invert">
                                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>
                                </span></p></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
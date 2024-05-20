import Image from "next/image"
import Porscher from '../../public/imgPorsche.png'
import Mario from '../../public/imgMario.png'
import Netflix from '../../public/imgNetflix.png'
import Cep from '../../public/imgCep.png'

import { Exo_2 } from "next/font/google"
const Exo = Exo_2({subsets: ['latin'], weight: '400'})

export default function Projetos () {
    return (
        <div className="bg-blue-950 h-full">
            <div className="flex justify-center items-end">
                <span className=" border-l-4 border-zinc-950 mr-2 h-10"></span>
                <h1 className={`text-4xl text-white mt-10 ${Exo.className}`}>Projetos.</h1>
            </div>

            <div className="flex flex-col items-center justify-center mt-20">
                <ul className="grid grid-cols-3 gap-5">
                    <li className="bg-gray-900 w-[415px] h-96 rounded-xl">
                        <Image className="rounded-md" src={Porscher} alt="" />
                        <div className="mt-10">
                            <h1 className={`text-white text-2xl ml-2 ${Exo.className}`}>Site Porsche</h1>
                            <p className={`text-white ml-2 mt-2 ${Exo.className}`}>"Não há nada como criar um projeto inspirado na minha marca de carros favorita, a Porsche."</p>
                        </div>
                    </li>
                    
                    <li className="bg-gray-900 w-[415px] h-96 rounded-xl">
                        <Image className="rounded-md" src={Mario} alt="" />
                        <h1 className={`text-white text-2xl mt-10 ml-2 ${Exo.className}`}>Site Mario.</h1>
                        <p className="text-white ml-2 mt-2">"Inspirado pelo design do site do Mario, a maior relíquia dos jogos"</p>
                    </li>

                    <li className="bg-gray-900 w-[415px] h-96 rounded-xl">
                        <Image className="rounded-md" src={Netflix} alt="" />
                        <h1 className={`text-white text-2xl mt-10 ml-2 ${Exo.className}`}>Site Netflix</h1>
                        <p className={`text-white ml-2 mt-2 ${Exo.className}`}>"Clone do site da maior plataforma de streaming de filmes e series, a Netflix."</p>
                    </li>

                    <li className="bg-gray-900 w-[415px] h-96 rounded-xl">
                        <Image className="rounded-md" src={Cep} alt="" />
                        <h1 className={`text-white text-2xl mt-10 ml-2 ${Exo.className}`}>Busca CEP</h1>
                        <p className={`text-white ml-2 mt-2 ${Exo.className}`}>"Buscador de CEP"</p>
                    </li>

                    <li className="bg-gray-900 w-[415px] h-96 rounded-xl">
                        <Image className="rounded-md" src={Cep} alt="" />
                        <h1 className={`text-white text-2xl mt-10 ml-2 ${Exo.className}`}>Busca CEP</h1>
                        <p className={`text-white ml-2 mt-2 ${Exo.className}`}>"Buscador de CEP"</p>
                    </li>

                    <li className="bg-gray-900 w-[415px] h-96 rounded-xl">
                        <Image className="rounded-md" src={Cep} alt="" />
                        <h1 className={`text-white text-2xl mt-10 ml-2 ${Exo.className}`}>Busca CEP</h1>
                        <p className={`text-white ml-2 mt-2 ${Exo.className}`}>"Buscador de CEP"</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}
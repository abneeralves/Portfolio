import Image from "next/image"
import Porscher from '../../public/imgPorsche.png'

import { Exo_2 } from "next/font/google"
const Exo = Exo_2({subsets: ['latin'], weight: '400'})

export default function Projetos () {
    return (
        <div className="bg-blue-600 h-full">
            <div className="flex justify-center items-end">
                <span className=" border-l-4 border-zinc-950 mr-2 h-10"></span>
                <h1 className={`text-4xl text-white mt-10 ${Exo.className}`}>Projetos.</h1>
            </div>

            <div className="flex flex-col items-center justify-center mt-20">
                <ul className="grid grid-cols-3 gap-10">
                    <li className="bg-gray-900 w-96 h-96 rounded-xl">
                        <Image className="rounded-md" src={Porscher} alt="" />
                        <h1 className="text-white text-2xl mt-5 ml-2">Site Porsche</h1>
                        <p className="text-white">Descrição projeto</p>
                    </li>
                    
                    <li className="bg-gray-900 w-96 h-96 rounded-xl">
                        <h1 className="text-white">Nome do Projeto</h1>
                        <p className="text-white">Descrição projeto</p>
                    </li>

                    <li className="bg-gray-900 w-96 h-96 rounded-xl">
                        <h1 className="text-white">Nome do Projeto</h1>
                        <p className="text-white">Descrição projeto</p>
                    </li>

                    <li className="bg-gray-900 w-96 h-96 rounded-xl">
                        <h1 className="text-white">Nome do Projeto</h1>
                        <p className="text-white">Descrição projeto</p>
                    </li>

                    <li className="bg-gray-900 w-96 h-96 rounded-xl">
                        <h1 className="text-white">Nome do Projeto</h1>
                        <p className="text-white">Descrição projeto</p>
                    </li>

                    <li className="bg-gray-900 w-96 h-96 rounded-xl">
                        <h1 className="text-white">Nome do Projeto</h1>
                        <p className="text-white">Descrição projeto</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}
import Image from "next/image"

import { Exo_2 } from "next/font/google"

const Exo = Exo_2({subsets: ['latin'], weight: '400'})

export default function Projetos () {
    return (
        <div className="bg-blue-600 h-full">
            <div className="flex justify-center items-end">
                <span className=" border-l-4 border-zinc-950 mr-2 h-10"></span>
                <h1 className={`text-4xl text-white mt-10 ${Exo.className}`}>Projetos.</h1>
            </div>

            <div className="grid">

            </div>
            
        </div>
    )
}
import Image from 'next/image'
import FtAbner from '../../public/FtAbner.jpg'
import Skill from "@/components/Skills"

export default function Main () {
    return (
        <main className="flex flex-col items-center justify-center bg-blue-600 h-full">
            
            <div className='grid grid-cols-3 gap-4 bg-gray-900 h-3/6 w-5/6 rounded-2xl'>
                <div className='col-span-1 flex items-center justify-center p-5'>
                    <Image className='w-full h-full rounded-xl' src={FtAbner} alt='Foto Abner'/>
                </div>

                <div className='col-span-2 flex flex-col items-center mt-5'>
                    <h1 className='text-white text-3xl '>Deixa-me Apresentar.</h1>
                    <p className='text-white text-2xl mt-10 mr-10'>Meu nome é Abner, um entusiasta da tecnologia de 19 anos, atualmente imerso no mundo do desenvolvimento front-end. Sou um estudante dedicado do 3º semestre na UNIVOVE, buscando constantemente expandir meus horizontes e mergulhar nas complexidades do desenvolvimento web.
                    <br />
                    <br />
                    Com um olhar curioso e uma paixão pela resolução de problemas, estou sempre pronto para abraçar novos desafios e aprender com cada experiência. Meu objetivo é não apenas dominar as tecnologias atuais, mas também explorar novas áreas, especialmente no desenvolvimento back-end.</p>
                </div>
            </div>
        </main>
    )
}
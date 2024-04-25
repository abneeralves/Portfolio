import Image from 'next/image'
import LetraA from '../../public/A.png'

export default function Header () {
    return (
        <header className=" h-screen ">
            <nav className="flex justify-between ">
                <div>
                    <Image className='ml-64 mt-11' src={LetraA} alt='Letra A' width={50} />
                </div>

                <div>
                    <ul className="flex">
                        <li className="mt-14 mr-5 text-xl text-blue-600">Sobre</li>
                        <li className="mt-14 mr-5 text-xl text-blue-600">Projetos</li>
                        <li className="mt-12 mr-64 text-xl text-white bg-blue-600 p-1 rounded-md">Contatos</li>
                    </ul>
                </div>
            </nav>


            <h1 className="text-6xl mt-64 ml-64 text-blue-400">Abner Alves</h1>

            <svg className='ondas' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path className='onda2 text-blue-400' fill="#2563eb" fill-opacity="10000" d="M0,320L34.3,288C68.6,256,137,192,206,181.3C274.3,171,343,213,411,224C480,235,549,213,617,170.7C685.7,128,754,64,823,64C891.4,64,960,128,1029,160C1097.1,192,1166,192,1234,160C1302.9,128,1371,64,1406,32L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </header>
    )
}
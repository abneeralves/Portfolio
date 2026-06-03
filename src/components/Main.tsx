import { Exo_2, Bebas_Neue } from 'next/font/google'

const Exo = Exo_2({ subsets: ['latin'], weight: '400' })
const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const squares = [1, 2, 3, 4]

export default function Main() {
    return (
        <main id="sobre" className="relative flex flex-col justify-center w-full h-full bg-[#171330] h-full py-20 overflow-hidden lg:pl-10 2xl:pl-20 -mt-1">
            <div className='flex justify-end absolute w-full h-full z-0 right-10 top-20 hidden lg:flex'>
                {squares.map((squares) => (
                    <svg key={squares} width="100" height="100">
                        <rect 
                        x="10" 
                        y="10" 
                        width="100" 
                        height="100" 
                        stroke="black" 
                        stroke-width="3" 
                        fill="white" />
                    </svg>
                ))}
            </div>

            <div className='relative z-10 my-10 md:px-10' data-aos="fade-up">
                
                <div>
                    <div className="relative mt-5" data-aos="fade-right">
                        <div className="flex items-center ml-5">

                            <div className="z-20 absolute">
                                <h1 className={`sm:text-8xl text-6xl text-[#ffd401] mt-16 ${BebasN.className}`}>Sobre Mim.</h1>
                            </div>

                            <div className="z-10 absolute flex items-center">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                                className="size-14 2xl:size-32 text-blue-900 mr-3"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                </svg>

                                <h2 className={`sm:text-[10rem] text-8xl text-blue-900 ${BebasN.className}`}>About</h2>
                            </div>
                        </div>
                    </div>

                    <div className='mt-20 2xl:pr-64 ' data-aos="fade-up">
                        <p className={`text-white text-xl p-5 pb-0 md:text-2xl xl:mt-5 xl:pl-0 2xl:mt-5 ${Exo.className}`}>
                            Meu nome é Abner, tenho 21 anos e sou Desenvolvedor Full Stack apaixonado por tecnologia e inovação. Sou graduado em Análise e Desenvolvimento de Sistemas pela UNINOVE e estou sempre em busca de novos conhecimentos para evoluir minhas habilidades e aprofundar minha atuação no desenvolvimento de software.

                            <br /> <br />

                            Ao longo da minha jornada, adquiri experiência no desenvolvimento de aplicações web completas, atuando tanto no front-end quanto no back-end. Gosto de transformar ideias em soluções funcionais, escaláveis e bem estruturadas, sempre priorizando boas práticas, performance e uma excelente experiência para o usuário.

                            <br /> <br />

                            Tenho um perfil curioso e orientado à resolução de problemas, encarando cada projeto como uma oportunidade de aprendizado e crescimento. Meu objetivo é continuar evoluindo como profissional, explorando novas tecnologias e contribuindo para o desenvolvimento de produtos que gerem valor real para pessoas e negócios.
                        </p>
                    </div>

                    <div className='flex flex-col m-5 xl:ml-0 2xl:ml-0 xl:mr-8 2xl:mt-10' data-aos="fade-up">
                        <p className={`text-zinc-500 text-lg mb-2 ${Exo.className}`}>
                            OBS: Você pode encontrar esse projeto no <span className='text-white underline decoration-1'><a href="https://github.com/abneeralves/Portfolio" target="_blank" rel="noopener noreferrer">GitHub.</a></span>
                        </p>
                        
                        <a className={`flex items-center justify-center p-2 w-full rounded-md text-center text-[#0A0E1A] w-full md:w-fit md:px-52 lg:px-32 xl:px-64 bg-[#ffd401] hover:bg-[#B39501] ${Exo.className}`} href="/CurriculoAbner.pdf" download="CurriculoAbner.pdf"
                        >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                                <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                            </svg>
                        </span>Download do Curriculo.</a>
                    </div>
                </div>
            </div>

            <svg
                className="absolute bottom-0 left-0 w-full z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#FFFFFF"
                    fillOpacity="1"
                    d="M0,288L80,293.3C160,299,320,309,480,298.7C640,288,800,256,960,202.7C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                />
            </svg>
        </main>
    )
}
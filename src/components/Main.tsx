'use client'

import { useState, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Exo_2, Bebas_Neue } from 'next/font/google'
import { Files, Search, GitFork, Play, Container, User, Settings, } from "lucide-react"

const Exo = Exo_2({ subsets: ['latin'], weight: '400' })
const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const aboutParagraphs = [
    "Meu nome é Abner, tenho 21 anos e sou Desenvolvedor Full Stack apaixonado por tecnologia e inovação. Sou graduado em Análise e Desenvolvimento de Sistemas pela UNINOVE e estou sempre em busca de novos conhecimentos para evoluir minhas habilidades.",
    "Ao longo da minha jornada, adquiri experiência no desenvolvimento de aplicações web completas, atuando tanto no front-end quanto no back-end. Gosto de transformar ideias em soluções funcionais, escaláveis e bem estruturadas. Sempre priorizando boas práticas, performance e uma excelente experiência para o usuário.",
    "Tenho um perfil curioso e orientado à resolução de problemas, encarando cada projeto como uma oportunidade de aprendizado e crescimento. Meu objetivo é continuar evoluindo como profissional, explorando novas tecnologias e contribuindo para o desenvolvimento de produtos que gerem valor real para pessoas e negócios.",
]

export default function Main() {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false)
    const [isPublicOpen, setIsPublicOpen] = useState(false)
    const [isSrcOpen, setIsSrcOpen] = useState(true)
    const [isAppOpen, setIsAppOpen] = useState(false)
    const [isComponentsOpen, setIsComponentsOpen] = useState(true)
    const glowRef = useRef<HTMLDivElement>(null)

    return (
        <main id="sobre" className="relative flex flex-col justify-center w-full h-full bg-[#171330] py-12 sm:py-16 lg:py-20 overflow-hidden px-4 sm:px-6 lg:pl-10 2xl:pl-14 lg:pr-10 -mt-1">
            <div className='relative z-10 w-full' data-aos="fade-up">
                <div data-aos="fade-up">
                    <h2 className={`text-[#ffd401] text-6xl md:text-7xl lg:text-9xl ${BebasN.className}`}>
                        Sobre mim<span className="text-[#ffd401]">.</span>
                    </h2>

                    <p className={`text-[#22d3ee]/60 text-xs sm:text-sm mt-2 sm:mt-3 tracking-widest uppercase ${Exo.className}`}>
                        <TypeAnimation
                            sequence={[
                                'Desenvolvedor Full Stack.',
                                1500,
                                'Apaixonado por tecnologia.',
                                1500,
                                'Transformando ideias em soluções.',
                            ]}
                            speed={40}
                            repeat={Infinity}
                        />
                    </p>
                </div>

                <div className="group relative w-full max-w-[1300px] mt-8 sm:mt-10 mb-24 sm:mb-32 lg:mb-44 overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_30px_80px_rgba(34,211,238,0.12)]"
                    onMouseMove={(e) => {
                        if (!glowRef.current) return
                        const rect = e.currentTarget.getBoundingClientRect()
                        const x = ((e.clientX - rect.left) / rect.width) * 100
                        const y = ((e.clientY - rect.top) / rect.height) * 100
                        glowRef.current.style.background = `radial-gradient(50px circle at ${x}% ${y}%, rgba(34,211,238,0.10), transparent 60%), linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)`
                        glowRef.current.style.backgroundSize = 'auto, 40px 40px, 40px 40px'
                    }}
                >
                    <div ref={glowRef} className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                        <div className="relative flex items-center justify-between border-b border-white/10 bg-white/5 px-3 sm:px-6 py-3 sm:py-4">
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <span className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#FF5F57]" />

                                <span className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#FEBC2E]" />
                                
                                <span className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-[#28C840]" />
                            </div>

                            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 sm:gap-2 rounded-t-lg bg-white/10 px-2.5 sm:px-4 py-1.5 sm:py-2">
                                <svg className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE" />
                                    </g>
                                </svg>

                                <span className="text-xs sm:text-sm text-zinc-300">
                                    About.tsx
                                </span>
                            </div>

                            <div className="w-[40px] sm:w-[58px]" />
                        </div>

                        <div className="flex">
                            <aside className="hidden lg:flex w-14 flex-col items-center justify-between border-r border-white/10 bg-[#1b1b2f] py-3">
                                <div className="flex flex-col items-center">
                                    <button className="relative flex h-12 w-14 items-center justify-center border-l-2 border-cyan-400 bg-white/5 text-white transition-all duration-200">
                                        <Files size={22} />
                                    </button>

                                    <button className="flex h-12 w-14 items-center justify-center text-[#6b79c9] transition-all duration-200 hover:bg-white/5 hover:text-white">
                                        <Search size={22} />
                                    </button>

                                    <button className="relative flex h-12 w-14 items-center justify-center text-[#6b79c9] transition-all duration-200 hover:bg-white/5 hover:text-white">
                                        <GitFork size={22} />
                                        
                                        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] text-white">
                                            1
                                        </span>
                                    </button>

                                    <button className="flex h-12 w-14 items-center justify-center text-[#6b79c9] transition-all duration-200 hover:bg-white/5 hover:text-white">
                                        <Play size={22} />
                                    </button>

                                    <button className="flex h-12 w-14 items-center justify-center text-[#6b79c9] transition-all duration-200 hover:bg-white/5 hover:text-white">
                                        <Container size={22} />
                                    </button>
                                </div>

                                <div className="flex flex-col items-center">
                                    <button className="flex h-12 w-14 items-center justify-center text-[#6b79c9] transition-all duration-200 hover:bg-white/5 hover:text-white">
                                        <User size={22} />
                                    </button>

                                    <button className="flex h-12 w-14 items-center justify-center text-[#6b79c9] transition-all duration-200 hover:bg-white/5 hover:text-white">
                                        <Settings size={22} />
                                    </button>
                                </div>
                            </aside>

                            <aside className="hidden lg:block w-48 xl:w-52 shrink-0 border-r border-white/10 bg-white/[0.02] p-4">
                                <p className="mb-4 text-xs tracking-[0.25em] text-zinc-500">
                                    EXPLORER
                                </p>
                                
                                <div className="space-y-1 text-sm">
                                    <div>
                                        <div onClick={() => setIsPublicOpen(!isPublicOpen)} className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                            <span>{isPublicOpen ? "▼" : "▸"} public</span>

                                            <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                •
                                            </span>
                                        </div>

                                        {isPublicOpen && (
                                            <div className="ml-4 mt-1 space-y-1">
                                                <div className="rounded-md px-2 py-1 text-zinc-400">
                                                    CurriculoAbner.pdf
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <div onClick={() => setIsSrcOpen(!isSrcOpen)} className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                            <span>{isSrcOpen ? "▼" : "▸"} src</span>

                                            <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                •
                                            </span>
                                        </div>

                                        {isSrcOpen && (
                                            <div className="ml-4 space-y-1">
                                                <div>
                                                    <div onClick={() => setIsAppOpen(!isAppOpen)} className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                                        <span>{isAppOpen ? "▼" : "▸"} app</span>

                                                        <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                            •
                                                        </span>
                                                    </div>

                                                    {isAppOpen && (
                                                        <div className="ml-4 mt-1 space-y-1">
                                                            {["globals.css", "layout.tsx", "page.tsx"].map((file) => (
                                                                <div key={file} className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                                                    <span>{file}</span>
                                                                    
                                                                    <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                                        •
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                <div>
                                                    <div onClick={() => setIsComponentsOpen(!isComponentsOpen)} className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                                        <span>{isComponentsOpen ? "▼" : "▸"} components</span>

                                                        <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                            •
                                                        </span>
                                                    </div>

                                                    {isComponentsOpen && (
                                                        <div className="ml-4 mt-1 space-y-1">
                                                            {["Footer.tsx", "Header.tsx"].map((file) => (
                                                                <div key={file} className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                                                    <span>{file}</span>

                                                                    <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                                        •
                                                                    </span>
                                                                </div>
                                                            ))}

                                                            <div className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                                                <span>Main.tsx</span>

                                                                <div className="flex items-center gap-2">
                                                                    <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                                        •
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="rounded-md border-l-2 border-cyan-400 bg-[#37373D] px-2 py-1 text-white cursor-pointer transition-all duration-200 hover:bg-[#45454D] hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                                                                About.tsx

                                                                <span className="text-cyan-400 text-xs pl-10">
                                                                    M
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {[".gitignore"].map((file) => (
                                        <div key={file} className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                            <span>{file}</span>

                                            <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                •
                                            </span>
                                        </div>
                                    ))}

                                    <div className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                        <span>package-lock.json</span>

                                        <div className="flex items-center gap-2">
                                            <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                •
                                            </span>
                                        </div>
                                    </div>

                                    <div className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                        <span>package.json</span>

                                        <div className="flex items-center gap-2">
                                            <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                •
                                            </span>
                                        </div>
                                    </div>

                                    {["README.md", "tailwind.config.ts", "tsconfig.json"].map((file) => (
                                        <div key={file} className="group flex items-center justify-between rounded-md px-2 py-1 text-zinc-300 cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white hover:translate-x-1">
                                            <span>{file}</span>

                                            <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                                                •
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </aside>

                            <div className="hidden lg:block flex-1 p-1 min-w-0 overflow-hidden">
                                <pre className={`overflow-x-auto text-sm xl:text-base leading-9 ${Exo.className}`}>
                                    <code className="block min-w-max">
                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">1</span>

                                            <span>
                                                <span className="text-[#569CD6]">export default function</span>{" "}

                                                <span className="text-[#3BFD27]">About</span>

                                                <span className="text-white">() {"{"}</span>
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">2</span>

                                            <span className="ml-6">
                                                <span className="text-[#569CD6]">return</span>{" "}

                                                <span className="text-white">(</span>
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">3</span>

                                            <span className="ml-12 text-[#808080]">{"<"}</span>

                                            <span className="ml-[1px] text-[#FF1AF0]">{"div"}</span>

                                            <span className="ml-2 text-[#3BFD27]">{"className=''"}</span>

                                            <span className="text-[#808080]">{">"}</span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">4</span>

                                            <span className="ml-[72px] text-[#808080]">{"<"}</span>

                                            <span className="ml-[1px] text-[#FF1AF0]">{"p"}</span>

                                            <span className="ml-2 text-[#3BFD27]">{"className='text-white text-base'"}</span>

                                            <span className="text-[#808080]">{">"}</span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">5</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                Meu nome é Abner, tenho 21 anos e sou Desenvolvedor Full Stack apaixonado por
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">6</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                tecnologia e inovação. Sou graduado em Análise e Desenvolvimento de Sistemas pela
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">7</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                UNINOVE e estou sempre em busca de novos conhecimentos para evoluir minhas habilidades.
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">8</span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">9</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                Ao longo da minha jornada, adquiri experiência no desenvolvimento de aplicações web
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">10</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                completas, atuando tanto no front-end quanto no back-end. Gosto de transformar ideias
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">11</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                em soluções funcionais, escaláveis e bem estruturadas. Sempre priorizando boas práticas,
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">12</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                performance e uma excelente experiência para o usuário.
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">13</span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">14</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                Tenho um perfil curioso e orientado à resolução de problemas, encarando cada projeto
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">15</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                como uma oportunidade de aprendizado e crescimento. Meu objetivo é continuar
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">16</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                evoluindo como profissional, explorando novas tecnologias e contribuindo para o
                                            </span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">17</span>

                                            <span className="ml-[104px] text-zinc-300">
                                                desenvolvimento de produtos que gerem valor real para pessoas e negócios.
                                            </span>

                                            <span
                                                className="ml-1 inline-block h-5 w-[2px] bg-cyan-400"
                                                style={{ animation: 'blink 1s step-end infinite' }}
                                            />
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">18</span>

                                            <span className="ml-[72px] text-[#808080]">{"</"}</span>

                                            <span className="ml-[1px] text-[#FF1AF0]">{"p"}</span>

                                            <span className="text-[#808080]">{">"}</span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">19</span>

                                            <span className="ml-12 text-[#808080]">{"</"}</span>

                                            <span className="ml-[1px] text-[#FF1AF0]">{"div"}</span>

                                            <span className="text-[#808080]">{">"}</span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">20</span>

                                            <span className="ml-6 text-white">)</span>
                                        </div>

                                        <div className="flex">
                                            <span className="w-10 text-right pr-4 text-zinc-500">21</span>

                                            <span className="text-white">{"}"}</span>
                                        </div>
                                    </code>
                                </pre>
                            </div>

                            <div className={`lg:hidden flex-1 min-w-0 p-5 sm:p-7 space-y-4 ${Exo.className}`}>
                                {aboutParagraphs.map((paragraph, index) => (
                                    <p key={index} className="text-sm sm:text-base leading-relaxed text-zinc-300">
                                        {paragraph}

                                        {index === aboutParagraphs.length - 1 && (
                                            <span
                                                className="ml-1 inline-block h-4 w-[2px] align-middle bg-cyan-400"
                                                style={{ animation: 'blink 1s step-end infinite' }}
                                            />
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>
                        
                        <div className="border-t border-white/10">
                            <div className="flex items-center justify-between px-3 sm:px-6 py-3 text-[10px] sm:text-xs uppercase tracking-wider text-zinc-500 bg-white/[0.03]">
                                <div className="flex gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
                                    <span className="shrink-0">Problems</span>

                                    <span className="shrink-0">Output</span>

                                    <span className="shrink-0">Console</span>

                                    <span className="text-white border-b border-cyan-400 pb-1 shrink-0">
                                        Terminal
                                    </span>

                                    <span className="shrink-0">Ports</span>
                                </div>

                                <button
                                    onClick={() => setIsTerminalOpen(!isTerminalOpen)}
                                    className="flex items-center justify-center h-6 w-6 shrink-0 rounded-md transition-all duration-200 hover:bg-white/10 hover:text-white"
                                    aria-label={isTerminalOpen ? "Fechar terminal" : "Abrir terminal"}
                                >
                                    {isTerminalOpen ? (
                                        <span className="text-sm">▴</span>
                                    ) : (
                                        <span className="text-sm">▾</span>
                                    )}
                                </button>
                            </div>

                            {isTerminalOpen && (
                                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-5 sm:space-y-6">
                                    <div>
                                        <p className="text-zinc-400 break-all">
                                            <span className="text-cyan-400">~/portfolio</span>{" "}
                                            $ git remote -v
                                        </p>

                                        <p className="mt-2 text-zinc-300 break-all">
                                            github&nbsp;
                                            <a
                                                href="https://github.com/abneeralves/Portfolio"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-cyan-400 hover:underline"
                                            >
                                                https://github.com/abneeralves/Portfolio
                                            </a>
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="font-mono text-xs sm:text-sm text-zinc-400 break-all">
                                            <span className="text-cyan-400">~/abner</span>{" "}
                                            $

                                            <span className="ml-2 text-white">
                                                wget CurriculoAbner.pdf
                                            </span>
                                        </p>

                                        <div className="font-mono text-xs sm:text-sm space-y-1 pl-2 sm:pl-4">
                                            <p className="text-zinc-500">Resolving localhost...</p>

                                            <p className="text-zinc-500">Connecting...</p>
                                            
                                            <p className="text-green-400">Download ready ✓</p>
                                        </div>

                                        <a
                                            href="/CurriculoAbner.pdf"
                                            download="CurriculoAbner.pdf"
                                            className="group inline-flex items-center gap-2 rounded-md border border-green-400/30 bg-green-400/5 px-4 py-2 font-mono text-xs sm:text-sm text-green-400 transition-all duration-200 hover:bg-green-400/10 hover:border-green-400/60 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]"
                                        >
                                            <span className="text-zinc-500 group-hover:text-green-400 transition-colors">
                                                $
                                            </span>
                                            ./download-curriculo.sh
                                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
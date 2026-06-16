'use client'

import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Exo_2, Bebas_Neue } from 'next/font/google'

const Exo = Exo_2({ subsets: ['latin'], weight: '400' })
const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Main() {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false)
    const [isPublicOpen, setIsPublicOpen] = useState(false)
    const [isSrcOpen, setIsSrcOpen] = useState(true)
    const [isAppOpen, setIsAppOpen] = useState(false)
    const [isComponentsOpen, setIsComponentsOpen] = useState(true)

    return (
        <main id="sobre" className="relative flex flex-col justify-center w-full h-full bg-[#171330] h-full py-20 overflow-hidden lg:pl-10 2xl:pl-14 -mt-1">

            <div className='relative z-10' data-aos="fade-up">
                <div className="" data-aos="fade-up">
                    <span className={`text-[#22d3ee]/60 text-sm tracking-[0.4em] uppercase mb-4 ${Exo.className}`}>
                        About me
                    </span>

                    <h2 className={`text-[#ffd401] sm:text-9xl text-5xl ${BebasN.className}`}>
                        Sobre mim<span className="text-[#ffd401]">.</span>
                    </h2>

                    <p className={`text-[#22d3ee]/60 text-sm mt-3 tracking-widest uppercase ${Exo.className}`}>
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

                <div className="max-w-[1250px] mt-10 mb-44 overflow-hidden rounded-3xl border border-zinc-200/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.2)]" data-aos="fade-up">
                    <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">

                        <div className="flex items-center gap-2">
                            <span className="h-3.5 w-3.5 rounded-full bg-[#FF5F57]" />
                            <span className="h-3.5 w-3.5 rounded-full bg-[#FEBC2E]" />
                            <span className="h-3.5 w-3.5 rounded-full bg-[#28C840]" />
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2">
                            <span className="rounded-t-lg bg-white/10 px-4 py-2 text-sm text-zinc-300">
                                About.tsx
                            </span>
                        </div>

                        <div className="w-[58px]" />
                    </div>

                    <div className="flex">
                        <aside className="hidden md:block w-52 border-r border-white/10 bg-white/[0.02] p-4">

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

                        <div className="flex-1 p-1">
                            <pre
                                className={`overflow-x-auto text-sm md:text-base leading-9 ${Exo.className}`}>
                                <code className="block min-w-max">

                                    <div className="flex">
                                        <span className="w-10 text-right pr-4 text-zinc-500">1</span>

                                        <span>
                                            <span className="text-[#569CD6]">export default function</span>{" "}
                                            <span className="text-[#DCDCAA]">About</span>
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

                                        <span className="ml-12 text-[#808080]">
                                            {"<div>"}
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <span className="w-10 text-right pr-4 text-zinc-500">4</span>

                                        <span className="ml-[72px] text-[#808080]">
                                            {"<p className='text-white text-base'>"}
                                        </span>
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
                                    </div>

                                    <div className="flex">
                                        <span className="w-10 text-right pr-4 text-zinc-500">18</span>

                                        <span className="ml-[72px] text-[#808080]">
                                            {"</p>"}
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <span className="w-10 text-right pr-4 text-zinc-500">19</span>

                                        <span className="ml-12 text-[#808080]">
                                            {"</div>"}
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <span className="w-10 text-right pr-4 text-zinc-500">20</span>

                                        <span className="ml-6 text-white">
                                            )
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <span className="w-10 text-right pr-4 text-zinc-500">21</span>

                                        <span className="text-white">
                                            {"}"}
                                        </span>
                                    </div>
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="border-t border-white/10">

                        <div className="flex items-center justify-between px-6 py-3 text-xs uppercase tracking-wider text-zinc-500 bg-white/[0.03]">

                            <div className="flex gap-6">
                                <span>Problems</span>

                                <span>Output</span>

                                <span>Debug Console</span>

                                <span className="text-white border-b border-cyan-400 pb-1">
                                    Terminal
                                </span>

                                <span>Ports</span>
                            </div>

                            <button
                                onClick={() => setIsTerminalOpen(!isTerminalOpen)} className="flex items-center justify-center h-6 w-6 rounded-md transition-all duration-200 hover:bg-white/10 hover:text-white" aria-label={isTerminalOpen ? "Fechar terminal" : "Abrir terminal"}
                            >
                                {isTerminalOpen ? (
                                    <span className="text-sm">▴</span>
                                ) : (
                                    <span className="text-sm">▾</span>
                                )}
                            </button>

                        </div>

                        {isTerminalOpen && (
                            <div className="p-6 font-mono text-sm space-y-6">

                                <div>
                                    <p className="text-zinc-400">
                                        <span className="text-cyan-400">
                                            ~/portfolio
                                        </span>{" "}
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

                                    <p className="font-mono text-sm text-zinc-400">
                                        <span className="text-cyan-400">
                                            ~/abner
                                        </span>{" "}
                                        $
                                        <span className="ml-2 text-white">
                                            wget CurriculoAbner.pdf
                                        </span>
                                    </p>

                                    <div className="font-mono text-sm space-y-1 pl-4">
                                        <p className="text-zinc-500">
                                            Resolving localhost...
                                        </p>

                                        <p className="text-zinc-500">
                                            Connecting...
                                        </p>

                                        <p className="text-green-400">
                                            Download ready ✓
                                        </p>
                                    </div>

                                    <a
                                        href="/CurriculoAbner.pdf"
                                        download="CurriculoAbner.pdf"
                                        className="group inline-flex items-center gap-2 rounded-md border border-green-400/30 bg-green-400/5 px-4 py-2 font-mono text-sm text-green-400 transition-all duration-200 hover:bg-green-400/10 hover:border-green-400/60 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]">
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
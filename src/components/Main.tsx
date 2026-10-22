'use client'

import { Fira_Code, Bebas_Neue } from 'next/font/google'
import {
    ArrowDown,
    Download,
    GraduationCap,
    Layers,
    Mail,
    Rocket,
} from 'lucide-react'

const firaCode = Fira_Code({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const display = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

const highlights = [
    {
        icon: GraduationCap,
        title: 'Formação',
        text: 'Graduado em Análise e Desenvolvimento de Sistemas pela UNINOVE, com estudo contínuo para evoluir a cada projeto.',
    },
    {
        icon: Layers,
        title: 'Atuação',
        text: 'Desenvolvimento de aplicações web completas, cobrindo front-end e back-end do início ao fim.',
    },
    {
        icon: Rocket,
        title: 'Entrega',
        text: 'Produtos funcionais, escaláveis e bem estruturados, pensados para gerar valor real.',
    },
]

export default function Main() {
    return (
        <main
            id="sobre"
            className={`
                relative
                z-10
                flex
                min-h-screen
                w-full
                flex-col
                bg-[#171330]
                text-[#e9e7f5]
                ${firaCode.className}
            `}
        >
            {/* Conteúdo */}
            <div className="flex w-full flex-1 items-center px-5 py-24 sm:px-10 lg:px-16 lg:py-32">
                <div className="mx-auto w-full max-w-7xl">
                    {/* Apresentação */}
                    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                        <h2
                            className={`
                                text-4xl
                                font-normal
                                leading-none
                                tracking-wide
                                sm:text-5xl
                                lg:col-span-7
                                lg:text-6xl
                                xl:text-7xl
                                ${display.className}
                            `}
                        >
                            Transformo ideias em produtos web que funcionam e
                            escalam.
                        </h2>

                        <div className="space-y-5 text-sm leading-7 text-[#c9c6e0] lg:col-span-5 lg:pt-2">
                            <p className="text-base leading-7 text-[#e9e7f5]">
                                Sou Abner, desenvolvedor Full Stack. Construo
                                aplicações web do front-end ao back-end, com
                                foco em soluções que resolvem problemas reais.
                            </p>

                            <p>
                                Para mim, bom software é aquele que continua
                                simples de manter e de evoluir. Por isso cuido
                                da estrutura com o mesmo rigor da interface e
                                sigo estudando para entregar cada projeto melhor
                                que o anterior.
                            </p>
                        </div>
                    </div>

                    {/* Destaques */}
                    <div className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-24 lg:gap-6">
                        {highlights.map(({ icon: Icon, title, text }) => (
                            <section
                                key={title}
                                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm lg:p-9"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#a9b4ff]">
                                    <Icon
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    />
                                </span>

                                <h3
                                    className={`text-3xl font-normal tracking-wide ${display.className}`}
                                >
                                    {title}
                                </h3>

                                <p className="text-[13px] leading-7 text-[#c9c6e0]">
                                    {text}
                                </p>
                            </section>
                        ))}
                    </div>

                    {/* Ações */}
                    <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/CurriculoAbner.pdf"
                                download="CurriculoAbner.pdf"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-[#a9b4ff]
                                    px-6
                                    py-3
                                    text-sm
                                    font-medium
                                    text-[#171330]
                                    transition-colors
                                    hover:bg-[#c2c9ff]
                                    focus-visible:outline
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-2
                                    focus-visible:outline-[#a9b4ff]
                                "
                            >
                                <Download
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                />
                                Baixar currículo
                            </a>

                            <a
                                href="mailto:seuemail@email.com"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-[#3a3470]
                                    px-6
                                    py-3
                                    text-sm
                                    font-medium
                                    transition-colors
                                    hover:border-[#a9b4ff]
                                    focus-visible:outline
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-2
                                    focus-visible:outline-[#a9b4ff]
                                "
                            >
                                <Mail aria-hidden="true" className="h-4 w-4" />
                                Entrar em contato
                            </a>
                        </div>

                        <a
                            href="#projetos"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                text-[#a8a4c8]
                                transition-colors
                                hover:text-white
                                focus-visible:outline
                                focus-visible:outline-2
                                focus-visible:outline-offset-4
                                focus-visible:outline-[#a9b4ff]
                            "
                        >
                            Ver projetos
                            <ArrowDown aria-hidden="true" className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Onda decorativa (por último, colada embaixo e nas laterais) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="block h-24 w-full sm:h-40 lg:h-56"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,90.7C672,75,768,85,864,101.3C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>
        </main>
    )
}
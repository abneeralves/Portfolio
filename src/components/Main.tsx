'use client'

import { Fira_Code, Bebas_Neue } from 'next/font/google'
import {
    ArrowRight,
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
        category: 'Formação',
        title: 'Análise e Desenvolvimento de Sistemas',
        text: 'Graduado pela UNINOVE, com estudo contínuo para evoluir a cada projeto.',
    },
    {
        icon: Layers,
        category: 'Atuação',
        title: 'Aplicações web completas',
        text: 'Front-end e back-end do início ao fim, cuidando de cada camada do produto.',
    },
    {
        icon: Rocket,
        category: 'Entrega',
        title: 'Produtos escaláveis e bem estruturados',
        text: 'Software funcional, pensado para gerar valor real e continuar fácil de evoluir.',
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
                items-center
                bg-[#171330]
                px-5
                py-24
                text-[#e9e7f5]
                sm:px-10
                lg:px-16
                lg:py-32
                ${firaCode.className}
            `}
        >
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
                            aplicações web do front-end ao back-end, com foco em
                            soluções que resolvem problemas reais.
                        </p>

                        <p>
                            Para mim, bom software é aquele que continua simples
                            de manter e de evoluir. Por isso cuido da estrutura
                            com o mesmo rigor da interface e sigo estudando para
                            entregar cada projeto melhor que o anterior.
                        </p>
                    </div>
                </div>

                {/* Cabeçalho dos destaques */}
                <div className="mt-16 flex items-center justify-between gap-4 lg:mt-24">
                    <h3
                        className={`text-4xl font-normal tracking-wide text-[#a9b4ff] sm:text-5xl ${display.className}`}
                    >
                        Em resumo
                    </h3>

                    <a
                        href="#projetos"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-medium
                            text-[#e9e7f5]
                            transition-colors
                            hover:text-[#a9b4ff]
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[#a9b4ff]
                        "
                    >
                        Ver projetos
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                </div>

                {/* Destaques */}
                <div className="mt-8 grid gap-5 md:grid-cols-3 lg:gap-6">
                    {highlights.map(
                        ({ icon: Icon, category, title, text }) => (
                            <article
                                key={category}
                                className="overflow-hidden rounded-2xl bg-[#232433]"
                            >
                                <div className="relative flex h-44 items-end bg-gradient-to-br from-[#3f3880] via-[#2a2459] to-[#1d1840] p-6 lg:h-52">
                                    <Icon
                                        aria-hidden="true"
                                        className="absolute right-6 top-6 h-14 w-14 text-[#a9b4ff]/60"
                                        strokeWidth={1.25}
                                    />

                                    <span
                                        className={`text-4xl tracking-wide text-[#e9e7f5] ${display.className}`}
                                    >
                                        {category}
                                    </span>
                                </div>

                                <div className="p-6 lg:p-8">
                                    <h4 className="max-w-[26ch] text-base font-semibold leading-7 text-[#e9e7f5]">
                                        {title}
                                    </h4>

                                    <p className="mt-4 text-[13px] leading-7 text-[#a8a4c8]">
                                        {text}
                                    </p>
                                </div>
                            </article>
                        )
                    )}
                </div>

                {/* Ações */}
                <div className="mt-12 flex flex-wrap gap-3">
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
                        <Download aria-hidden="true" className="h-4 w-4" />
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
            </div>
        </main>
    )
}
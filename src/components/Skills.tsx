'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Exo_2, Anton } from 'next/font/google'

const Exo = Exo_2({ subsets: ['latin'], weight: ['400', '600'] })
const TitleFont = Anton({ subsets: ['latin'], weight: '400' })

type Category = 'Frontend' | 'Backend' | 'Infra' | 'Tools'

type Skill = {
    name: string
    icon: string
    category: Category
    blurb: string
}

const skills: Skill[] = [
    { name: 'HTML', icon: '/SVGs/html.svg', category: 'Frontend', blurb: 'Estrutura semântica e acessível em todo projeto.' },
    { name: 'CSS', icon: '/SVGs/css.svg', category: 'Frontend', blurb: 'Layouts responsivos e design fiel ao Figma.' },
    { name: 'JavaScript', icon: '/SVGs/javascript.svg', category: 'Frontend', blurb: 'Lógica e interatividade no núcleo da aplicação.' },
    { name: 'TypeScript', icon: '/SVGs/typescript.svg', category: 'Frontend', blurb: 'Tipagem estática para código seguro e escalável.' },
    { name: 'Tailwind', icon: '/SVGs/tailwind.svg', category: 'Frontend', blurb: 'Estilização rápida e consistente no markup.' },
    { name: 'React', icon: '/SVGs/react.svg', category: 'Frontend', blurb: 'Interfaces reativas baseadas em componentes.' },
    { name: 'Next.js', icon: '/SVGs/nextjs.svg', category: 'Frontend', blurb: 'SSR, rotas e performance para apps React.' },
    { name: 'Node.js', icon: '/SVGs/nodejs.svg', category: 'Backend', blurb: 'APIs e serviços JavaScript no servidor.' },
    { name: 'NestJS', icon: '/SVGs/nestjs.svg', category: 'Backend', blurb: 'Arquitetura modular para back-end Node.' },
    { name: 'Prisma', icon: '/SVGs/prisma.svg', category: 'Backend', blurb: 'ORM type-safe para modelar e consultar dados.' },
    { name: 'PostgreSQL', icon: '/SVGs/postgresql.svg', category: 'Backend', blurb: 'Banco relacional robusto e estruturado.' },
    { name: 'Google Cloud', icon: '/SVGs/google-cloude.svg', category: 'Infra', blurb: 'Deploy e infraestrutura escalável na nuvem.' },
    { name: 'Postman', icon: '/SVGs/postman.svg', category: 'Tools', blurb: 'Testes e documentação de endpoints de API.' },
    { name: 'Git', icon: '/SVGs/git.svg', category: 'Tools', blurb: 'Versionamento e colaboração no código.' },
    { name: 'Linux', icon: '/SVGs/linux.svg', category: 'Tools', blurb: 'Terminal e ambiente de desenvolvimento.' },
]

const CATEGORIES: Category[] = ['Frontend', 'Backend', 'Infra', 'Tools']

const FOCUS_RING =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd401]'

export default function Skills() {
    const [selected, setSelected] = useState<Category | null>(null)
    const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null)
    const [hoveredSkill, setHoveredSkill] = useState<Category | null>(null)

    const focus = hoveredCategory ?? hoveredSkill ?? selected

    function toggle(category: Category) {
        setSelected((current) => (current === category ? null : category))
    }

    return (
        <section
            id="habilidades"
            className="relative bg-[#171330] px-5 py-24 sm:px-10 lg:px-16 lg:py-32"
        >
            <header
                data-aos="fade-up"
                className="mx-auto mb-14 flex w-full max-w-[1650px] flex-col items-center gap-5 text-center lg:mb-20"
            >
                <h2
                    className={`
                        text-4xl
                        uppercase
                        leading-none
                        tracking-widest
                        sm:text-6xl
                        lg:text-8xl
                        ${TitleFont.className}
                    `}
                >
                    <span className="text-[#ffd401]">05</span>
                    <span aria-hidden="true" className="mx-3 text-[#ffd401] sm:mx-5">
                        /
                    </span>
                    <span className="text-white">Habilidades</span>
                </h2>
            </header>

            <div className="mx-auto grid w-full max-w-[1650px] gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="flex flex-col items-start justify-center lg:col-span-4 lg:h-full">
                    <p className={`mb-8 text-sm leading-6 text-white/50 ${Exo.className}`}>
                        {selected
                            ? 'Clique de novo na categoria para ver todas.'
                            : 'Passe o mouse ou clique numa categoria para destacá-la.'}
                    </p>

                    <div
                        role="group"
                        aria-label="Destacar categoria"
                        className="flex flex-wrap items-start gap-x-8 gap-y-2 lg:flex-col lg:gap-y-3"
                    >
                        {CATEGORIES.map((category) => {
                            const isSelected = selected === category
                            const isLit = focus === null || focus === category
                            const count = skills.filter((s) => s.category === category).length

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => toggle(category)}
                                    onMouseEnter={() => setHoveredCategory(category)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                    onFocus={() => setHoveredCategory(category)}
                                    onBlur={() => setHoveredCategory(null)}
                                    className={`flex items-start gap-3 text-left transition-colors duration-300 ${FOCUS_RING} ${
                                        isLit ? 'text-[#ffd401]' : 'text-white/25'
                                    }`}
                                >
                                    <span
                                        className={`text-6xl uppercase leading-[0.95] sm:text-7xl lg:text-7xl xl:text-8xl ${TitleFont.className}`}
                                    >
                                        {category}
                                    </span>
                                    <span className={`mt-2 text-sm font-semibold ${Exo.className}`}>
                                        {count}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                <ul className="grid gap-x-10 sm:grid-cols-2 xl:grid-cols-3 lg:col-span-8">
                    {skills.map((skill) => {
                        const isLit = focus === null || focus === skill.category

                        return (
                            <li
                                key={skill.name}
                                onMouseEnter={() => setHoveredSkill(skill.category)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                className={`flex items-start gap-4 border-b border-white/15 py-6 transition-opacity duration-300 ${
                                    isLit ? 'opacity-100' : 'opacity-20'
                                }`}
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06]">
                                    <Image
                                        src={skill.icon}
                                        alt={`Ícone ${skill.name}`}
                                        width={28}
                                        height={28}
                                        className="h-7 w-7 object-contain"
                                    />
                                </span>

                                <div className={`min-w-0 ${Exo.className}`}>
                                    <h3 className="text-lg font-semibold leading-tight text-white">
                                        {skill.name}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-6 text-white/60">
                                        {skill.blurb}
                                    </p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
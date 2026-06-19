"use client"

import Image from "next/image"
import { Exo_2, Bebas_Neue, Anton } from "next/font/google"
import { useCallback, useEffect, useRef, useState } from "react"

const Exo = Exo_2({ subsets: ['latin'], weight: '400' })
const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const anton = Anton({ subsets: ['latin'], weight: '400' })

type Project = {
    image: string,
    title: string,
    describe: string,
    skill: string[],
    linkProject: string
}

const projects: Project[] = [
    {
        image: '/imgExperience/experiencia-que-conecta.png',
        title: 'Assistente de Tecnologia | Grupo UAU',
        describe: 'Desenvolvedor do Grupo UAU, com experiência na criação de soluções web e atuação em diferentes produtos da empresa. Participei do desenvolvimento das landing pages da Scarlet e da UAUBox, sendo responsável pela construção do front-end e pela implementação de interfaces modernas, responsivas e alinhadas às necessidades do negócio. \n\n  Atualmente, atuo no desenvolvimento da UAUTeam, plataforma de afiliados do Grupo UAU, trabalhando como Desenvolvedor Full Stack. No dia a dia, desenvolvo e evoluo funcionalidades no front-end e no back-end, criando interfaces intuitivas e responsivas, realizando integrações com APIs, implementando regras de negócio, consumindo e disponibilizando serviços, além de apoiar a análise de builds, execução de aplicações e monitoramento de logs em ambiente de cloud.',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/javascript.svg', '/SVGs/typescript.svg', '/SVGs/tailwind.svg', '/SVGs/react.svg', '/SVGs/nextjs.svg', '/SVGs/nodejs.svg', '/SVGs/nestjs.svg', '/SVGs/prisma.svg', '/SVGs/google-cloude.svg', '/SVGs/postman.svg'],
        linkProject: 'https://www.grupouau.com/'
    },
    {
        image: '/imgExperience/landing-page-scarlet.jpeg',
        title: 'Landing Page Scarlet',
        describe: 'Landing page desenvolvida para a Scarlet, box de beleza premium por assinatura do Grupo UAU. Fui responsável pelo desenvolvimento do front-end, criando interfaces responsivas e alinhadas à identidade da marca. Também realizei a integração das imagens utilizando o Google Cloud Storage, garantindo uma entrega eficiente dos recursos e uma melhor experiência de navegação.',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/typescript.svg', '/SVGs/react.svg', '/SVGs/nextjs.svg', '/SVGs/tailwind.svg', '/SVGs/google-cloude.svg'],
        linkProject: 'https://scarletbox.com.br/'
    },
    {
        image: '/imgExperience/landing-page-uau.jpeg',
        title: 'Landing Page UauBox',
        describe: 'Landing page desenvolvida para a UAUBox, serviço de assinatura de beleza personalizada do Grupo UAU, que oferece recomendações de produtos de acordo com o perfil de cada assinante. Fui responsável pelo desenvolvimento do front-end, criando interfaces responsivas e alinhadas à identidade da marca. Também realizei a integração das imagens utilizando o Google Cloud Storage, garantindo uma entrega eficiente dos recursos e uma melhor experiência de navegação.',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/typescript.svg', '/SVGs/react.svg', '/SVGs/nextjs.svg', '/SVGs/tailwind.svg', '/SVGs/google-cloude.svg'],
        linkProject: 'https://uaubox.com.br/'
    },
    {
        image: '/imgExperience/uau-team.png',
        title: 'UauTeam',
        describe: 'Atualmente atuo no desenvolvimento da UAUTeam, infraestrutura completa para marcas operarem programas de afiliados com recursos como cupons em massa, social analytics, gamificação, seeding, métricas em tempo real e pagamento automático via Pix, tudo na sua marca e no seu domínio. Participo ativamente tanto do desenvolvimento front-end quanto back-end, contribuindo na criação de novas funcionalidades, integrações e manutenção da aplicação, sempre com foco em performance, escalabilidade e experiência do usuário.',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/javascript.svg', '/SVGs/typescript.svg', '/SVGs/tailwind.svg', '/SVGs/react.svg', '/SVGs/nextjs.svg', '/SVGs/nodejs.svg', '/SVGs/nestjs.svg', '/SVGs/prisma.svg', '/SVGs/google-cloude.svg', '/SVGs/postman.svg'],
        linkProject: 'https://uauteam.vercel.app/'
    }
]

const codeSymbols = [
    { symbol: '</>', top: '8%', left: '6%', size: '2.5rem', duration: '9s', delay: '0s' },
    { symbol: '{ }', top: '22%', left: '88%', size: '2rem', duration: '11s', delay: '1.5s' },
    { symbol: ';', top: '35%', left: '14%', size: '3.5rem', duration: '7s', delay: '0.5s' },
    { symbol: '</>', top: '55%', left: '92%', size: '2rem', duration: '10s', delay: '2s' },
    { symbol: '( )', top: '68%', left: '4%', size: '2.25rem', duration: '8.5s', delay: '1s' },
    { symbol: '#', top: '80%', left: '90%', size: '3rem', duration: '9.5s', delay: '0.8s' },
    { symbol: '</>', top: '78%', left: '20%', size: '2rem', duration: '12s', delay: '2.5s' },

    { symbol: '{ }', top: '12%', left: '42%', size: '2.25rem', duration: '8s', delay: '0.7s' },
    { symbol: ';', top: '30%', left: '60%', size: '2.75rem', duration: '10.5s', delay: '1.8s' },
    { symbol: '</>', top: '44%', left: '45%', size: '2rem', duration: '9.2s', delay: '0.3s' },
    { symbol: '( )', top: '58%', left: '72%', size: '2.5rem', duration: '11.5s', delay: '2.2s' },
    { symbol: '#', top: '72%', left: '52%', size: '2.75rem', duration: '8.8s', delay: '1.2s' },
    { symbol: '#', top: '88%', left: '45%', size: '2rem', duration: '10.8s', delay: '2.8s' },

    { symbol: '{ }', top: '5%', left: '28%', size: '2rem', duration: '9.3s', delay: '1.4s' },
    { symbol: ';', top: '10%', left: '56%', size: '2.75rem', duration: '8.4s', delay: '2.1s' },
    { symbol: '</>', top: '6%', left: '76%', size: '2.25rem', duration: '10.1s', delay: '0.6s' },
    { symbol: '( )', top: '24%', left: '8%', size: '2rem', duration: '11.2s', delay: '1.9s' },
    { symbol: '#', top: '30%', left: '46%', size: '3rem', duration: '8.7s', delay: '0.8s' },
    { symbol: '</>', top: '38%', left: '70%', size: '2rem', duration: '12s', delay: '2.4s' },


]

export default function Experience() {
    const timelineRef = useRef<HTMLDivElement>(null)
    const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
    const [progress, setProgress] = useState(0)
    const [nodePercents, setNodePercents] = useState<number[]>([])
    const [activeCount, setActiveCount] = useState(0)
    const [justArrived, setJustArrived] = useState<number | null>(null)
    const measureNodes = useCallback(() => {
        if (!timelineRef.current) return
        const timelineRect = timelineRef.current.getBoundingClientRect()
        const percents = nodeRefs.current.map((node) => {
            if (!node) return 0
            const nodeRect = node.getBoundingClientRect()
            const offset = nodeRect.top - timelineRect.top + nodeRect.height / 2
            return (offset / timelineRect.height) * 100
        })
        setNodePercents(percents)
    }, [])

    useEffect(() => {
        measureNodes()
        window.addEventListener('resize', measureNodes)
        return () => window.removeEventListener('resize', measureNodes)
    }, [measureNodes])

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return
            const rect = timelineRef.current.getBoundingClientRect()
            const windowHeight = window.innerHeight
            const start = windowHeight * 0.5
            const total = rect.height
            const scrolled = start - rect.top
            const percent = Math.min(Math.max((scrolled / total) * 100, 0), 100)
            setProgress(percent)
            setActiveCount((prevCount) => {
                const reached = nodePercents.filter((p) => percent >= p).length
                if (reached === prevCount) return prevCount
                if (reached > prevCount) {
                    setJustArrived(reached - 1)
                    window.clearTimeout((window as any).__arrivalTimeout)
                        ; (window as any).__arrivalTimeout = window.setTimeout(() => setJustArrived(null), 800)
                }
                return reached
            })
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [nodePercents])

    return (
        <div id="experiencia" className="relative overflow-hidden bg-white h-full before:absolute before:inset-0 before:bg-[linear-gradient(rgba(23,19,48,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,19,48,0.03)_1px,transparent_1px)] before:bg-[size:50px_50px] before:pointer-events-none">
            <style>{`
                @keyframes driftBlobOne {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(60px, 40px) scale(1.1); }
                }
                @keyframes driftBlobTwo {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-50px, -30px) scale(1.08); }
                }
                @keyframes floatSymbol {
                    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.05; }
                    50% { transform: translateY(-22px) rotate(6deg); opacity: 0.12; }
                }
                .drift-blob-1 { animation: driftBlobOne 14s ease-in-out infinite; }
                .drift-blob-2 { animation: driftBlobTwo 16s ease-in-out infinite; }
                .float-symbol { animation: floatSymbol ease-in-out infinite; }
            `}</style>

            <div className="absolute inset-0 pointer-events-none hidden md:block">
                {codeSymbols.map((item, i) => (
                    <span
                        key={i}
                        className={`float-symbol absolute text-[#171330] ${anton.className}`}
                        style={{
                            top: item.top,
                            left: item.left,
                            fontSize: item.size,
                            animationDuration: item.duration,
                            animationDelay: item.delay,
                            opacity: 0.05,
                        }}
                    >
                        {item.symbol}
                    </span>
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center mt-32" data-aos="fade-up">
                <span className={`text-[#171330]/50 text-xs tracking-[0.4em] uppercase mb-4 ${Exo.className}`}>
                    meu trabalho
                </span>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-[2px] bg-[#ffd401]" />
                    <h2 className={`text-[#171330] sm:text-9xl text-5xl ${BebasN.className}`}>
                        Experiências<span className="text-[#ffd401]">.</span>
                    </h2>
                    <div className="w-12 h-[2px] bg-[#ffd401]" />
                </div>
                <p className={`text-[#171330]/40 text-sm mt-3 tracking-widest uppercase ${Exo.className}`}>
                    Trajetória profissional e projetos de destaque
                </p>
            </div>

            <div ref={timelineRef} className="relative z-10 mt-24 max-w-[1700px] mx-auto pb-20 px-5">
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#171330]/10 to-transparent -translate-x-1/2 hidden md:block" />
                <div className="absolute left-1/2 top-0 w-[3px] rounded-full bg-gradient-to-b from-[#ffd401] to-[#ffd401]/40 -translate-x-1/2 hidden md:block transition-[height] duration-150 ease-out shadow-[0_0_12px_rgba(255,212,1,0.5)]" style={{ height: `${progress}%` }} />
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:block transition-[top] duration-150 ease-out" style={{ top: `${progress}%` }}>

                    <span className="absolute inset-0 -m-4 rounded-full bg-[#ffd401]/25 blur-xl animate-pulse" />

                    <span className="absolute inset-0 -m-1.5 rounded-full border border-[#ffd401]/40 animate-[spin_4s_linear_infinite]" />

                    <div className="relative w-7 h-7 rounded-full bg-[#ffd401] ring-[5px] ring-white shadow-[0_0_22px_rgba(255,212,1,0.8)]" />
                </div>
                <ul className="flex flex-col gap-20 md:gap-28">
                    {projects.map((project, index) => {
                        const isLeft = index % 2 === 0
                        const isActive = index < activeCount
                        const isArriving = justArrived === index

                        return (
                            <li key={index} className="relative flex w-full">
                                <div ref={(el) => { nodeRefs.current[index] = el }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
                                    {isArriving && (
                                        <>
                                            <span className="absolute w-3 h-3 rounded-full bg-[#ffd401] animate-[ping_0.8s_ease-out]" />

                                            <span className="absolute w-3 h-3 rounded-full bg-[#ffd401]/70 animate-[ping_0.8s_ease-out_0.15s]" />
                                        </>
                                    )}
                                    <div className={`relative rounded-full transition-all duration-300 ${isActive
                                        ? 'w-4 h-4 bg-[#ffd401] shadow-[0_0_14px_rgba(255,212,1,0.9)] scale-110'
                                        : 'w-3 h-3 bg-white border-2 border-[#ffd401]'
                                        }`}
                                    />
                                </div>

                                <div className={`absolute top-1/2 -translate-y-1/2 hidden md:block h-[2px] bg-gradient-to-r transition-opacity duration-300 $`}/>
                                
                                <span className={`pointer-events-none select-none absolute inset-y-0 hidden md:flex items-center justify-center w-1/2 text-[650px] leading-none transition-all duration-700 ${anton.className} ${isLeft ? 'right-0' : 'left-0 pr-20'
                                    } ${isActive ? 'text-[#171330]/60 scale-105' : 'text-[#171330]/[0.05]'} ${isArriving ? 'scale-110' : ''
                                    }`}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div className={`relative w-full md:w-1/2 ${isLeft ? 'md:pr-16 md:mr-auto' : 'md:pl-16 md:ml-auto'}`}
                                    data-aos={isLeft ? 'fade-right' : 'fade-left'} data-aos-offset="150" data-aos-duration="700">
                                    <div className={`relative rounded-2xl overflow-hidden border shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#171330]/10 hover:border-[#ffd401]/40 ${isActive
                                        ? '-translate-y-2 border-[#ffd401]/50 shadow-2xl shadow-[#ffd401]/15'
                                        : 'border-[#171330]/5 shadow-[#171330]/5'
                                        } ${isArriving ? 'scale-[1.015]' : ''}`}
                                    >
                                        <div className="relative overflow-hidden h-[300px]">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={1000}
                                                height={1000}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#171330] via-[#171330]/10 to-transparent" />
                                        </div>

                                        <div className="bg-[#171330] p-6 md:p-8">
                                            <div className="w-32 h-[2px] bg-[#ffd401] mb-4" />

                                            <h1 className={`text-white text-2xl md:text-3xl mb-3 leading-tight ${anton.className}`}>
                                                {project.title}
                                            </h1>

                                            {project.describe && (
                                                <p className={`text-white/60 text-sm mb-6 leading-relaxed whitespace-pre-line ${Exo.className}`}>
                                                    {project.describe}
                                                </p>
                                            )}

                                            <div className="flex gap-2 mb-6 flex-wrap">
                                                {project.skill.map((icon, i) => (
                                                    <div
                                                        key={i}
                                                        className="bg-white/5 rounded-lg p-1.5 border border-white/10 transition-colors duration-300 hover:border-[#ffd401]/50 hover:bg-[#ffd401]/10"
                                                    >
                                                        <Image src={icon} alt="icon" width={22} height={22} />
                                                    </div>
                                                ))}
                                            </div>

                                            <a
                                                href={project.linkProject}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group flex items-center justify-center w-full py-3 bg-[#ffd401] text-[#0A0E1A] font-semibold hover:bg-[#B39501] transition-colors duration-300 rounded-xl gap-2 text-sm tracking-wide ${Exo.className}`}
                                            >
                                                Saiba mais
                                                <svg
                                                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12" />
                                                    <polyline points="12 5 19 12 12 19" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Exo_2, Bebas_Neue, Anton } from 'next/font/google'

const Exo = Exo_2({ subsets: ['latin'], weight: ['400', '600'] })
const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const TitleFont = Anton({ subsets: ['latin'], weight: '400' })

type Project = {
    image: string
    title: string
    describe: string
    skill: string[]
    mediaType: 'image' | 'video'
    linkProject: string
}

const projects: Project[] = [
    {
        image: '/imageProjects/video-porsche.mp4',
        title: 'Projeto Porsche',
        describe:
            'Site inspirado na Porsche, com vídeo em destaque e uma interface moderna e responsiva.',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/typescript.svg', '/SVGs/tailwind.svg', '/SVGs/react.svg', '/SVGs/nextjs.svg'],
        mediaType: 'video',
        linkProject: 'https://github.com/abneeralves/SitePorsche',
    },
    {
        image: '/imageProjects/image-mario.png',
        title: 'Projeto Mario Bros',
        describe:
            'Página temática do Mario Bros, construída com React e Vite e foco em visual e interação.',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/javascript.svg', '/SVGs/react.svg', '/SVGs/vite.svg'],
        mediaType: 'image',
        linkProject: 'https://github.com/abneeralves/Site-Mario',
    },
    {
        image: '/imageProjects/image-netflix.png',
        title: 'Projeto Netflix',
        describe:
            'Clone da Netflix que consome uma API para listar filmes e séries em uma interface fluida.',
        skill: ['/SVGs/html.svg', '/SVGs/css.svg', '/SVGs/javascript.svg', '/SVGs/react.svg', '/SVGs/vite.svg', '/SVGs/api.svg'],
        mediaType: 'image',
        linkProject: 'https://github.com/abneeralves/CloneNetflix',
    },
]

const skillName = (path: string) =>
    (path.split('/').pop() ?? '').replace('.svg', '')

export default function Projects() {
    const total = String(projects.length).padStart(2, '0')

    return (
        <section
            id="projetos"
            className="relative overflow-clip bg-[#2f2e55] px-5 pb-10 pt-24 sm:px-10 lg:px-16 lg:pt-32"
        >
            <header
                data-aos="fade-up"
                className="mx-auto mb-14 flex w-full max-w-[1650px] justify-center lg:mb-20"
            >
                <h2
                    className={`
                        text-center
                        text-4xl
                        uppercase
                        leading-none
                        tracking-widest
                        sm:text-6xl
                        lg:text-8xl
                        ${TitleFont.className}
                    `}
                >
                    <span className="text-[#ffd401]">03</span>
                    <span className="text-white"> Projetos</span>
                </h2>
            </header>

            <ul className="relative mx-auto flex w-full max-w-[1650px] flex-col gap-10 [--stack-top:5.5rem] sm:[--stack-top:6.5rem] lg:gap-16 lg:[--stack-top:8rem]">
                {projects.map((project, index) => (
                    <li
                        key={project.title}
                        className="sticky"
                        style={{
                            top: `calc(var(--stack-top) + ${index * 1.25}rem)`,
                        }}
                    >
                        <a
                            href={project.linkProject}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver ${project.title} no GitHub`}
                            className="group relative block h-[520px] overflow-hidden rounded-[28px] bg-[#171330] shadow-[0_-18px_40px_-14px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd401] sm:h-[540px] lg:h-[clamp(480px,calc(100svh-12rem),650px)] lg:rounded-[36px]"
                        >
                            {project.mediaType === 'video' ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    aria-hidden="true"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                >
                                    <source
                                        src={project.image}
                                        type="video/mp4"
                                    />
                                </video>
                            ) : (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(min-width: 1400px) 1650px, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                />
                            )}

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171330]/90 via-[#171330]/40 to-[#171330]/10 md:from-[#171330]/60 md:via-transparent md:to-transparent" />
                            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-[#171330]/80 via-[#171330]/25 to-transparent md:block" />

                            <span
                                aria-hidden="true"
                                className={`absolute right-6 top-6 flex items-center gap-3 sm:right-10 sm:top-10 lg:right-14 lg:top-14 ${Exo.className}`}
                            >
                                <span className="hidden text-sm text-white/80 sm:inline">
                                    Ver no GitHub
                                </span>
                                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#171330]/40 text-white backdrop-blur-sm transition-colors duration-300 group-hover:border-[#ffd401] group-hover:bg-[#ffd401] group-hover:text-[#171330] motion-reduce:transition-none">
                                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                                </span>
                            </span>

                            <div className="absolute inset-0 flex items-end p-6 sm:p-10 md:justify-end lg:p-14">
                                <div className="w-full max-w-md lg:max-w-lg">
                                    <p
                                        className={`flex items-center gap-3 text-xl tracking-wider text-[#ffd401] ${BebasN.className}`}
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="h-px w-8 bg-[#ffd401]"
                                        />
                                        {String(index + 1).padStart(2, '0')} /{' '}
                                        {total}
                                    </p>

                                    <h3
                                        className={`mt-3 text-5xl leading-none tracking-wide text-white sm:text-6xl lg:text-7xl ${BebasN.className}`}
                                    >
                                        {project.title}
                                    </h3>

                                    <p
                                        className={`mt-4 text-base leading-7 text-white/90 ${Exo.className}`}
                                    >
                                        {project.describe}
                                    </p>

                                    <ul
                                        className="mt-5 flex flex-wrap gap-2"
                                        aria-label="Tecnologias usadas"
                                    >
                                        {project.skill.map((icon) => (
                                            <li
                                                key={icon}
                                                title={skillName(icon)}
                                                className="rounded-lg border border-white/15 bg-white/10 p-1.5 backdrop-blur-sm"
                                            >
                                                <Image
                                                    src={icon}
                                                    alt={skillName(icon)}
                                                    width={22}
                                                    height={22}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
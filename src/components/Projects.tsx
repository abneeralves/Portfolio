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
    return (
        <section
            id="projetos"
            className="relative bg-[#FFFFFF] px-5 py-24 sm:px-10 lg:px-16 lg:py-32"
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
                    <span
                        aria-hidden="true"
                        className="mx-3 text-[#ffd401] sm:mx-5"
                    >
                        /
                    </span>
                    <span className="text-[#1d1840]">Projetos</span>
                </h2>
            </header>

            <ul className="mx-auto flex w-full max-w-[1650px] flex-col gap-6 lg:gap-10">
                {projects.map((project, index) => {
                    return (
                        <li
                            key={project.title}
                            data-aos="fade-up"
                            className="group relative h-[520px] overflow-hidden rounded-[28px] bg-[#1d1840] sm:h-[540px] lg:h-[650px] lg:rounded-[36px]"
                        >
                            {project.mediaType === 'video' ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    aria-hidden="true"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                                    sizes="(min-width: 1400px) 1400px, 100vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            )}

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171330]/90 via-[#171330]/40 to-[#171330]/10 md:from-[#171330]/60 md:via-transparent md:to-transparent" />
                            <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-l from-[#171330]/80 via-[#171330]/25 to-transparent md:block" />

                            <div className="absolute inset-0 flex items-end p-6 sm:p-10 md:justify-end lg:p-14">
                                <div className="w-full max-w-md lg:max-w-lg">
                                    <p
                                        className={`text-xl tracking-wider text-[#ffd401] ${BebasN.className}`}
                                    >
                                        Projeto{' '}
                                        {String(index + 1).padStart(2, '0')}
                                    </p>

                                    <h3
                                        className={`mt-1 text-5xl leading-none tracking-wide text-white sm:text-6xl lg:text-7xl ${BebasN.className}`}
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

                                    <a
                                        href={project.linkProject}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            mt-7
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            bg-[#ffd401]
                                            px-7
                                            py-3.5
                                            text-base
                                            font-semibold
                                            text-[#171330]
                                            transition-colors
                                            hover:bg-[#ffe45c]
                                            focus-visible:outline
                                            focus-visible:outline-2
                                            focus-visible:outline-offset-2
                                            focus-visible:outline-white
                                            ${Exo.className}
                                        `}
                                    >
                                        Ver no GitHub
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        />
                                    </a>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
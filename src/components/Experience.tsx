import Image from 'next/image'
import { Exo_2, Bebas_Neue, Anton } from 'next/font/google'

const Exo = Exo_2({ subsets: ['latin'], weight: ['400', '600'] })
const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const TitleFont = Anton({ subsets: ['latin'], weight: '400' })

type Product = { name: string; describe: string }

type TimelineItem = {
    kind: string
    period: string
    title: string
    subtitle: string
    description: string[]
    current?: boolean
    products?: Product[]
    skills?: string[]
}

const TIMELINE: TimelineItem[] = [
    {
        kind: 'Experiência atual',
        period: '2026 – Atual',
        title: 'Grupo UAU',
        subtitle: 'Assistente de Tecnologia',
        current: true,
        description: [
            'Desenvolvedor no Grupo UAU, atuando na criação de soluções web para diferentes produtos da empresa. Participei do desenvolvimento das landing pages da Scarlet e da UAUBox, cuidando do front-end e de interfaces modernas, responsivas e alinhadas à identidade de cada marca.',
            'Hoje, como Desenvolvedor Full Stack na UAUTeam, evoluo funcionalidades no front-end e no back-end, integro APIs, implemento regras de negócio e apoio a análise de builds, a execução das aplicações e o monitoramento de logs em ambiente de cloud.',
        ],
        products: [
            {
                name: 'Scarlet',
                describe: 'Desenvolvimento da landing page da box de beleza premium por assinatura',
            },
            {
                name: 'UAUBox',
                describe: 'Desenvolvimento da landing page do serviço de assinatura de beleza personalizada',
            },
            {
                name: 'UAUTeam',
                describe: 'Evolução da plataforma de afiliados com cupons, analytics, gamificação e pagamento via Pix',
            },
        ],
        skills: [
            '/SVGs/html.svg',
            '/SVGs/css.svg',
            '/SVGs/javascript.svg',
            '/SVGs/typescript.svg',
            '/SVGs/tailwind.svg',
            '/SVGs/react.svg',
            '/SVGs/nextjs.svg',
            '/SVGs/nodejs.svg',
            '/SVGs/nestjs.svg',
            '/SVGs/prisma.svg',
            '/SVGs/google-cloude.svg',
            '/SVGs/postman.svg',
            '/SVGs/postgresql.svg',
        ],
    },
    {
        kind: 'Formação',
        period: '2023 – 2025',
        title: 'UNINOVE',
        subtitle: 'Análise e Desenvolvimento de Sistemas',
        description: [
            'Graduação em Análise e Desenvolvimento de Sistemas, onde construí a base de programação, banco de dados e engenharia de software que sustenta o meu trabalho hoje.',
        ],
    },
]

const SKILL_LABELS: Record<string, string> = {
    html: 'HTML',
    css: 'CSS',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    tailwind: 'Tailwind',
    react: 'React',
    nextjs: 'Next.js',
    nodejs: 'Node.js',
    nestjs: 'NestJS',
    prisma: 'Prisma',
    'google-cloude': 'Google Cloud',
    postman: 'Postman',
    postgresql: 'PostgreSQL',
}

const skillName = (path: string) => {
    const key = (path.split('/').pop() ?? '').replace('.svg', '')
    return SKILL_LABELS[key] ?? key
}

export default function Experience() {
    return (
        <section
            id="experiencia"
            className="relative overflow-hidden bg-[#171330] px-5 pb-28 sm:px-10 lg:px-16 lg:pb-36"
        >
            <style>{`
                @keyframes exp-spark {
                    0% { top: -84px; opacity: 0; }
                    12% { opacity: 1; }
                    88% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .exp-spark {
                    animation: exp-spark 3.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .exp-spark { display: none; }
                }
            `}</style>

            <header
                data-aos="fade-up"
                className="relative mx-auto mb-14 flex w-full max-w-[1650px] flex-col items-center gap-5 lg:mb-20"
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
                    <span className="text-[#ffd401]">04</span>
                    <span aria-hidden="true" className="mx-3 text-[#ffd401] sm:mx-5">
                        /
                    </span>
                    <span className="text-white">Experiência</span>
                </h2>

                <p
                    className={`max-w-xl text-center text-base leading-7 text-white/60 ${Exo.className}`}
                >
                    Minha trajetória, do que faço hoje até onde tudo começou,
                    na faculdade.
                </p>
            </header>

            <ol className="relative mx-auto w-full max-w-[1650px]">
                {TIMELINE.map((item, index) => {
                    const isLast = index === TIMELINE.length - 1
                    const isRich = Boolean(item.products || item.skills)

                    return (
                        <li
                            key={`${item.title}-${item.period}`}
                            data-aos="fade-up"
                            className={`relative ${isLast ? '' : 'pb-6 lg:pb-10'}`}
                        >
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -left-10 bottom-0 top-0 hidden w-4 lg:block"
                            >
                                {!isLast && (
                                    <span
                                        className="absolute -bottom-[92px] left-1/2 top-[92px] z-0 w-[2px] -translate-x-1/2 overflow-hidden rounded-full bg-white/20"
                                    >
                                        {item.current && (
                                            <span className="exp-spark absolute inset-x-0 h-[84px] bg-gradient-to-b from-transparent via-white/70 to-transparent" />
                                        )}
                                    </span>
                                )}

                                <span
                                    className={`absolute left-0 top-[84px] z-10 h-4 w-4 rounded-full border-2 ring-4 ring-[#171330] ${
                                        item.current
                                            ? 'border-[#ffd401] bg-[#ffd401]'
                                            : 'border-white/40 bg-[#171330]'
                                    }`}
                                />
                            </div>

                            <article
                                className={`relative flex overflow-hidden rounded-[28px] bg-[#1d1840] lg:rounded-[36px] ${
                                    isRich
                                        ? 'min-h-[520px] sm:min-h-[540px] lg:min-h-[650px]'
                                        : 'min-h-[340px] lg:min-h-[420px]'
                                }`}
                            >
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(169,180,255,0.14),transparent_60%)]" />

                                <div className="relative grid w-full gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_minmax(0,34rem)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:p-14">
                                    <p
                                        className={`text-5xl leading-none tracking-wide text-white/70 sm:text-6xl lg:col-start-1 lg:row-start-1 lg:text-7xl ${BebasN.className}`}
                                    >
                                        {item.period}
                                    </p>

                                    <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-end">
                                        <p
                                            className={`text-xl tracking-wider text-[#ffd401] ${BebasN.className}`}
                                        >
                                            {item.kind}
                                        </p>

                                        <h3
                                            className={`mt-1 text-5xl leading-none tracking-wide text-white sm:text-6xl lg:text-7xl ${BebasN.className}`}
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className={`mt-3 text-lg font-semibold text-white/80 ${Exo.className}`}
                                        >
                                            {item.subtitle}
                                        </p>

                                        <div
                                            className={`mt-5 space-y-4 ${Exo.className}`}
                                        >
                                            {item.description.map(
                                                (paragraph, i) => (
                                                    <p
                                                        key={i}
                                                        className={`text-base leading-7 ${
                                                            i === 0
                                                                ? 'text-white/90'
                                                                : 'text-white/65'
                                                        }`}
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ),
                                            )}
                                        </div>

                                        {item.skills && (
                                            <ul
                                                className="mt-6 flex flex-wrap gap-2"
                                                aria-label="Tecnologias usadas"
                                            >
                                                {item.skills.map((icon) => (
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
                                        )}
                                    </div>

                                    {item.products && (
                                        <div className="lg:col-start-1 lg:row-start-2 lg:self-end">
                                            <p
                                                className={`text-xl tracking-wider text-[#ffd401] ${BebasN.className}`}
                                            >
                                                O que fiz
                                            </p>

                                            <ul className="mt-4 grid max-w-xl gap-6">
                                                {item.products.map((product) => (
                                                    <li key={product.name}>
                                                        <span
                                                            className={`block text-4xl leading-none tracking-wide text-white ${BebasN.className}`}
                                                        >
                                                            {product.name}
                                                        </span>
                                                        <span
                                                            className={`mt-2 block text-base leading-7 text-white/70 ${Exo.className}`}
                                                        >
                                                            {product.describe}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </article>
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}
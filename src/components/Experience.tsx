import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Exo_2, Bebas_Neue, Anton } from 'next/font/google'

const Exo = Exo_2({ subsets: ['latin'], weight: ['400', '600'] })
const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const TitleFont = Anton({ subsets: ['latin'], weight: '400' })

const COMPANY = {
    name: 'Grupo UAU',
    role: 'Assistente de Tecnologia',
    image: '/imgExperience/grupouau.png',
    link: 'https://www.grupouau.com/',
    description: [
        'Desenvolvedor no Grupo UAU, atuando na criação de soluções web para diferentes produtos da empresa. Participei do desenvolvimento das landing pages da Scarlet e da UAUBox, cuidando do front-end e de interfaces modernas, responsivas e alinhadas à identidade de cada marca.',
        'Hoje, como Desenvolvedor Full Stack na UAUTeam, evoluo funcionalidades no front-end e no back-end, integro APIs, implemento regras de negócio e apoio a análise de builds, a execução das aplicações e o monitoramento de logs em ambiente de cloud.',
    ],
}

const PRODUCTS = [
    {
        name: 'Scarlet',
        describe: 'Landing page da box de beleza premium por assinatura',
        href: 'https://scarletbox.com.br/',
    },
    {
        name: 'UAUBox',
        describe: 'Landing page do serviço de assinatura de beleza personalizada',
        href: 'https://uaubox.com.br/',
    },
    {
        name: 'UAUTeam',
        describe: 'Plataforma de afiliados com cupons, analytics, gamificação e pagamento via Pix',
        href: 'https://uauteam.vercel.app/',
    },
]

const SKILLS = [
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
]

const skillName = (path: string) =>
    (path.split('/').pop() ?? '').replace('.svg', '')

const FOCUS_RING =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

export default function Experience() {
    return (
        <section
            id="experiencia"
            className="relative overflow-hidden bg-[#171330] px-5 pb-24 pt-32 sm:px-10 sm:pt-48 lg:px-16 lg:pb-32 lg:pt-64"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute -top-px left-0 block h-24 w-full -scale-y-100 sm:h-40 lg:h-56"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,90.7C672,75,768,85,864,101.3C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>

            <header
                data-aos="fade-up"
                className="relative mx-auto mb-14 flex w-full max-w-[1650px] justify-center lg:mb-20"
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
            </header>

            <div className="relative mx-auto flex w-full max-w-[1650px] flex-col gap-6 lg:gap-8">
                {/* Card principal */}
                <article
                    data-aos="fade-up"
                    className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#1d1840] lg:grid-cols-[5fr_7fr] lg:rounded-[36px]"
                >
                    {/* Imagem */}
                    <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[560px]">
                        <Image
                            src={COMPANY.image}
                            alt={`Grupo UAU: ${COMPANY.role}`}
                            fill
                            sizes="(min-width: 1024px) 42vw, 100vw"
                            className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171330] via-[#171330]/40 to-transparent" />

                        <span
                            className={`absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#171330]/70 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm lg:left-8 lg:top-8 ${Exo.className}`}
                        >
                            <span
                                aria-hidden="true"
                                className="block h-1.5 w-1.5 animate-pulse rounded-full bg-[#28c840] motion-reduce:animate-none"
                            />
                            Atualmente na empresa
                        </span>

                        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
                            <p
                                className={`text-xl tracking-wider text-[#ffd401] ${BebasN.className}`}
                            >
                                {COMPANY.role}
                            </p>
                            <h3
                                className={`mt-1 text-5xl leading-none tracking-wide text-white sm:text-6xl lg:text-7xl ${BebasN.className}`}
                            >
                                {COMPANY.name}
                            </h3>
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                        <div className={`space-y-5 ${Exo.className}`}>
                            <p className="text-lg leading-8 text-white/90">
                                {COMPANY.description[0]}
                            </p>
                            <p className="text-base leading-7 text-white/65">
                                {COMPANY.description[1]}
                            </p>
                        </div>

                        <div className="my-8 h-px w-full bg-white/10" />

                        <p
                            className={`text-xs uppercase tracking-[0.2em] text-white/40 ${Exo.className}`}
                        >
                            Tecnologias
                        </p>
                        <ul
                            className="mt-4 flex flex-wrap gap-2.5"
                            aria-label="Tecnologias usadas"
                        >
                            {SKILLS.map((icon) => (
                                <li
                                    key={icon}
                                    title={skillName(icon)}
                                    className="rounded-xl border border-white/15 bg-white/10 p-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffd401]/50 hover:bg-[#ffd401]/10 motion-reduce:transition-none"
                                >
                                    <Image
                                        src={icon}
                                        alt={skillName(icon)}
                                        width={26}
                                        height={26}
                                    />
                                </li>
                            ))}
                        </ul>

                        <a
                            href={COMPANY.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#ffd401] px-7 py-3.5 text-base font-semibold text-[#171330] transition-colors hover:bg-[#ffe45c] ${FOCUS_RING} ${Exo.className}`}
                        >
                            Conhecer o Grupo UAU
                            <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                        </a>
                    </div>
                </article>

                {/* Produtos */}
                <div data-aos="fade-up">
                    <p
                        className={`mb-4 text-xs uppercase tracking-[0.2em] text-white/40 ${Exo.className}`}
                    >
                        Produtos
                    </p>

                    <ul className="grid gap-4 md:grid-cols-3 lg:gap-6">
                        {PRODUCTS.map((product, index) => (
                            <li key={product.name}>
                                <a
                                    href={product.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex h-full flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[#ffd401]/60 hover:bg-white/[0.07] lg:p-8 ${FOCUS_RING}`}
                                >
                                    <div className="flex items-start justify-between">
                                        <span
                                            className={`text-xl tracking-wider text-[#ffd401] ${BebasN.className}`}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            className="h-6 w-6 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#ffd401] motion-reduce:transition-none"
                                        />
                                    </div>

                                    <div>
                                        <h4
                                            className={`text-4xl leading-none tracking-wide text-white lg:text-5xl ${BebasN.className}`}
                                        >
                                            {product.name}
                                        </h4>
                                        <p
                                            className={`mt-3 text-sm leading-6 text-white/60 ${Exo.className}`}
                                        >
                                            {product.describe}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
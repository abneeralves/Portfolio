'use client'

import { useEffect, useState } from 'react'
import type { PointerEvent } from 'react'
import {
    AnimatePresence,
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
} from 'motion/react'
import type { Variants } from 'motion/react'
import { ArrowUp, ArrowUpRight, Check, Copy } from 'lucide-react'
import { Bebas_Neue, Exo_2, Anton } from 'next/font/google'

const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const Exo = Exo_2({ subsets: ['latin'], weight: ['400', '600'] })
const TitleFont = Anton({ subsets: ['latin'], weight: '400' })

const FOOTER_BG = '#2f2e55'

const FOCUS_RING =
    'outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f2e55]'

const PREVIOUS_SECTION_BG = '#171330'

const EMAIL = 'abneralvesmuniz76@gmail.com'
const WHATSAPP = 'https://wa.me/5511999078219'
const EASE = [0.22, 1, 0.36, 1] as const

type FooterLink = {
    label: string
    href: string
    external?: boolean
    download?: string
}

const navigation: FooterLink[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Contatos', href: '#contatos' },
]

const socials: FooterLink[] = [
    { label: 'Whatsapp', href: WHATSAPP, external: true },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/abneer_alves/',
        external: true,
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/abneer_alves',
        external: true,
    },
    {
        label: 'Github',
        href: 'https://github.com/abneeralves',
        external: true,
    },
    {
        label: 'Linkedin',
        href: 'https://www.linkedin.com/in/abner-alves-/',
        external: true,
    },
]

const contacts: FooterLink[] = [
    { label: 'E-mail', href: `mailto:${EMAIL}` },
    { label: 'Whatsapp', href: WHATSAPP, external: true },
    {
        label: 'Currículo',
        href: '/CurriculoAbner.pdf',
        download: 'CurriculoAbner.pdf',
    },
]

const columns = [
    { title: 'Navegação', links: navigation },
    { title: 'Redes', links: socials },
    { title: 'Contato', links: contacts },
]

const listVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 120, damping: 18 },
    },
}

function setSpotlight(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty(
        '--x',
        `${event.clientX - rect.left}px`,
    )
    event.currentTarget.style.setProperty(
        '--y',
        `${event.clientY - rect.top}px`,
    )
}

function CopyField({ reduce }: { reduce: boolean }) {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (!copied) return
        const id = setTimeout(() => setCopied(false), 1800)
        return () => clearTimeout(id)
    }, [copied])

    async function copy() {
        try {
            await navigator.clipboard.writeText(EMAIL)
            setCopied(true)
        } catch {
            setCopied(false)
        }
    }

    const swap = reduce
        ? {}
        : {
              initial: { y: 10, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: -10, opacity: 0 },
              transition: { duration: 0.18 },
          }

    return (
        <div className="flex w-full max-w-sm items-center justify-between gap-2 rounded-full border border-white/15 bg-white/[0.04] py-1.5 pl-5 pr-1.5 transition-colors duration-300 focus-within:border-[#ffd401] hover:border-white/30">
            <span className={`truncate text-sm text-white/70 ${Exo.className}`}>
                {EMAIL}
            </span>

            <button
                type="button"
                onClick={copy}
                className={`relative flex h-10 min-w-[7rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#ffd401] px-4 text-sm font-semibold text-[#171330] transition-colors duration-300 hover:bg-white ${FOCUS_RING} ${Exo.className}`}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                        <motion.span
                            key="ok"
                            {...swap}
                            className="inline-flex items-center gap-1.5"
                        >
                            <Check aria-hidden="true" className="h-4 w-4" />
                            Copiado!
                        </motion.span>
                    ) : (
                        <motion.span
                            key="copy"
                            {...swap}
                            className="inline-flex items-center gap-1.5"
                        >
                            <Copy aria-hidden="true" className="h-4 w-4" />
                            Copiar
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>

            <span role="status" className="sr-only">
                {copied ? 'E-mail copiado' : ''}
            </span>
        </div>
    )
}

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
    return (
        <motion.nav variants={itemVariants} aria-label={title}>
            <p className={`text-sm text-white/50 ${Exo.className}`}>{title}</p>

            <ul className="mt-5 space-y-3.5">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            download={link.download}
                            target={link.external ? '_blank' : undefined}
                            rel={
                                link.external
                                    ? 'noopener noreferrer'
                                    : undefined
                            }
                            className={`group relative inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#ffd401] after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 motion-reduce:after:transition-none ${FOCUS_RING} ${Exo.className}`}
                        >
                            {link.label}
                            {link.external && (
                                <ArrowUpRight
                                    aria-hidden="true"
                                    className="h-3.5 w-3.5 -translate-x-1 translate-y-0.5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                                />
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    )
}

function BackToTop({ reduce }: { reduce: boolean }) {
    const { scrollYProgress } = useScroll()
    const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

    return (
        <a
            href="#inicio"
            className={`group inline-flex items-center gap-3 rounded-full text-xs text-white/60 transition-colors duration-300 hover:text-white ${FOCUS_RING} ${Exo.className}`}
        >
            Voltar ao topo
            <span className="relative flex h-11 w-11 items-center justify-center">
                <svg
                    viewBox="0 0 44 44"
                    aria-hidden="true"
                    className="absolute inset-0 -rotate-90"
                >
                    <circle
                        cx="22"
                        cy="22"
                        r="20"
                        fill="none"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="2"
                    />
                    <motion.circle
                        cx="22"
                        cy="22"
                        r="20"
                        fill="none"
                        stroke="#ffd401"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{
                            pathLength: reduce ? scrollYProgress : smooth,
                        }}
                    />
                </svg>
                <ArrowUp
                    aria-hidden="true"
                    className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
            </span>
        </a>
    )
}

function Wordmark({ reduce }: { reduce: boolean }) {
    return (
        <motion.div
            aria-hidden="true"
            onPointerMove={setSpotlight}
            initial={reduce ? false : { opacity: 0, y: '30%' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: EASE }}
            className="group relative mt-10 h-[0.56em] select-none overflow-hidden text-[clamp(5rem,19vw,20rem)] [-webkit-mask-image:linear-gradient(to_bottom,black_30%,transparent_98%)] [mask-image:linear-gradient(to_bottom,black_30%,transparent_98%)]"
        >
            <span
                className={`block bg-clip-text text-center leading-[0.8] text-transparent [background-image:linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] ${TitleFont.className}`}
            >
                ABNER ALVES
            </span>

            <span
                className={`absolute inset-0 block bg-clip-text text-center leading-[0.8] text-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background-image:radial-gradient(circle_260px_at_var(--x,50%)_var(--y,50%),rgba(255,212,1,1),rgba(255,255,255,0.1)_70%)] ${TitleFont.className}`}
            >
                ABNER ALVES
            </span>
        </motion.div>
    )
}

export default function Footer() {
    const reduce = Boolean(useReducedMotion())

    return (
        <footer
            id="contatos"
            className="relative overflow-hidden"
            style={{ backgroundColor: FOOTER_BG }}
        >
            <div style={{ backgroundColor: PREVIOUS_SECTION_BG }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="block h-24 w-full sm:h-40 lg:h-56"
                >
                    <path
                        fill={FOOTER_BG}
                        fillOpacity="1"
                        d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,90.7C672,75,768,85,864,101.3C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="px-5 pt-4 sm:px-10 lg:px-16 lg:pt-8">
                <div className="mx-auto w-full max-w-[1650px]">
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
                            <span className="text-[#ffd401]">06</span>
                            <span
                                aria-hidden="true"
                                className="mx-3 text-[#ffd401] sm:mx-5"
                            >
                                /
                            </span>
                            <span className="text-white">Contatos</span>
                        </h2>
                    </header>

                    <motion.div
                        variants={listVariants}
                        initial={reduce ? false : 'hidden'}
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-16"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col items-start sm:col-span-2 lg:col-span-1"
                        >
                            <p
                                className={`text-4xl leading-none tracking-wide text-white ${BebasN.className}`}
                            >
                                Abner Alves
                            </p>

                            <p
                                className={`mt-4 max-w-xs text-sm leading-6 text-white/60 ${Exo.className}`}
                            >
                                Desenvolvedor Full Stack. Construo aplicações
                                web do front-end ao back-end, com foco em
                                soluções que resolvem problemas reais.
                            </p>

                            <p
                                className={`mb-3 mt-8 text-sm text-white/50 ${Exo.className}`}
                            >
                                Prefere copiar o e-mail?
                            </p>

                            <CopyField reduce={reduce} />
                        </motion.div>

                        {columns.map((column) => (
                            <LinkColumn
                                key={column.title}
                                title={column.title}
                                links={column.links}
                            />
                        ))}
                    </motion.div>

                    <div className="mt-16 flex items-center justify-between gap-6 border-t border-white/10 pt-8">
                        <p className={`text-sm text-white/60 ${Exo.className}`}>
                            © 2026 Abner Alves
                        </p>

                        <BackToTop reduce={reduce} />
                    </div>

                    <Wordmark reduce={reduce} />
                </div>
            </div>
        </footer>
    )
}
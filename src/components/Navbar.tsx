'use client'

import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    type ReactNode,
} from 'react'
import Image from 'next/image'
import { Fira_Code, Bebas_Neue } from 'next/font/google'

const firaCode = Fira_Code({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const display = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

const NAV_ITEMS = [
    { href: '#inicio' },
    { href: '#sobre' },
    { href: '#projetos' },
    { href: '#experiencia' },
    { href: '#habilidades' },
]

const CONTACT_ITEM = { href: '#contatos' }
const MENU_ITEMS = [...NAV_ITEMS, CONTACT_ITEM]

const FOCUS_RING = 'outline-none focus-visible:ring-2 focus-visible:ring-white/60'

const NAV_LABELS: Record<string, string> = {
    '#inicio': 'Início',
    '#sobre': 'Sobre',
    '#projetos': 'Projetos',
    '#experiencia': 'Experiência',
    '#habilidades': 'Habilidades',
    '#contatos': 'Contatos',
}

type Stat = { label: string } & (
    | { value: string }
    | { steps: string[]; stepMs?: number }
)

const STATS: Stat[] = [
    {
        steps: ['+5', '+6', '+7', '+8', '+9', '+10'],
        stepMs: 520,
        label: 'projetos concluídos',
    },
    {
        steps: ['8 meses', '9 meses', '10 meses', '11 meses', '1 ano'],
        stepMs: 650,
        label: 'de experiência',
    },
]

const GITHUB_USERNAME = 'abneeralves'
const REPO_URL = `https://github.com/${GITHUB_USERNAME}/portfolio`
const CV_URL = '/curriculo-abner-alves.pdf'
const CV_FILENAME = 'Curriculo-Abner-Alves.pdf'

const SOCIALS: { label: string; href: string; icon: ReactNode }[] = [
    {
        label: 'Email',
        href: 'mailto:abneralvesmuniz76@gmail.com',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 16 16"
            >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        href: 'https://github.com/abneeralves',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/abner-alves-/',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com/abneralvesr',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-6 w-6"
            >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/abneer_alves',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 16 16"
            >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
        ),
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/5511999078219',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 16 16"
            >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
        ),
    },
]

const GITHUB_ICON = SOCIALS.find((social) => social.label === 'GitHub')?.icon

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeHref, setActiveHref] = useState(NAV_ITEMS[0].href)

    const toggleMenu = () => setIsMenuOpen((previous) => !previous)
    const closeMenu = useCallback(() => setIsMenuOpen(false), [])

    useEffect(() => {
        if (!isMenuOpen) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeMenu()
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isMenuOpen, closeMenu])

    useEffect(() => {
        const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(
            (el): el is Element => el !== null,
        )
        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`)
                })
            },
            { rootMargin: '-40% 0px -55% 0px' },
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <TopBar
                isMenuOpen={isMenuOpen}
                onToggle={toggleMenu}
                onLogoClick={closeMenu}
            />
            <MenuOverlay
                isOpen={isMenuOpen}
                activeHref={activeHref}
                onClose={closeMenu}
            />
        </>
    )
}

type TopBarProps = {
    isMenuOpen: boolean
    onToggle: () => void
    onLogoClick: () => void
}

function TopBar({ isMenuOpen, onToggle, onLogoClick }: TopBarProps) {
    return (
        <header
            className={`pointer-events-none fixed left-0 top-0 z-40 w-full bg-transparent ${firaCode.className}`}
        >
            <nav
                aria-label="Navegação principal"
                className="px-4 pt-4 sm:px-8 sm:pt-5 lg:px-24"
            >
                <div className="pointer-events-auto flex items-center justify-between rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 backdrop-blur-md sm:px-4 sm:py-1">
                    <Logo onClick={onLogoClick} />

                    <button
                        type="button"
                        onClick={onToggle}
                        aria-label="Abrir menu de navegação"
                        aria-expanded={isMenuOpen}
                        aria-controls="site-menu"
                        className={`group flex h-9 w-10 flex-col items-end justify-center gap-[6px] rounded-full ${FOCUS_RING}`}
                    >
                        <span className="h-[3px] w-6 rounded-full bg-white transition-all duration-300 group-hover:w-5" />
                        <span className="h-[3px] w-6 rounded-full bg-white transition-all duration-300 group-hover:w-6" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

type LogoProps = {
    onClick?: () => void
    className?: string
}

function Logo({ onClick, className = '' }: LogoProps) {
    return (
        <a
            href="#inicio"
            onClick={onClick}
            aria-label="Ir para o início"
            className={`group flex items-center rounded-full transition-transform duration-300 hover:scale-[1.06] ${FOCUS_RING} ${className}`}
        >
            <Image
                src="/imgHeader/A.png"
                alt=""
                width={40}
                height={40}
                priority
                className="h-auto w-7 object-contain transition-transform duration-500 group-hover:rotate-6 sm:w-8"
            />
        </a>
    )
}

type MenuOverlayProps = {
    isOpen: boolean
    activeHref: string
    onClose: () => void
}

function MenuOverlay({ isOpen, activeHref, onClose }: MenuOverlayProps) {
    const [lang, setLang] = useState<Lang>('pt')
    const [theme, setTheme] = useState<Theme>('dark')
    const toggleTheme = () => setTheme((previous) => (previous === 'dark' ? 'light' : 'dark'))

    return (
        <div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className={`fixed inset-0 z-50 ${firaCode.className} ${isOpen ? 'visible' : 'invisible delay-500'
                }`}
        >
            <button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                onClick={onClose}
                className={`absolute inset-0 h-full w-full cursor-default bg-black/60 backdrop-blur-[2px] transition-opacity duration-500 motion-reduce:transition-none ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            <style>{`
                .x-in { animation: x-in 550ms cubic-bezier(0.22, 1, 0.36, 1) 450ms both; }
                .x-out { animation: x-out 350ms ease-in both; }
                .x-ring { animation: x-ring 600ms ease-out both; }
                @keyframes x-in {
                    from { opacity: 0; transform: rotate(-180deg) scale(0.3); }
                    to { opacity: 1; transform: none; }
                }
                @keyframes x-out {
                    to { opacity: 0; transform: rotate(180deg) scale(0.4); }
                }
                @keyframes x-ring {
                    from { opacity: 0.9; transform: scale(1); }
                    to { opacity: 0; transform: scale(1.7); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .x-in, .x-out, .x-ring { animation: none; }
                }
            `}</style>

            <LeftPanel
                isOpen={isOpen}
                lang={lang}
                onLangChange={setLang}
                theme={theme}
                onThemeToggle={toggleTheme}
            />

            <aside
                className={`absolute right-0 top-0 flex h-full w-full flex-col bg-[#171330] px-6 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-6 shadow-[-20px_0_60px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-14 sm:pt-8 md:w-[42%] md:min-w-[460px] md:pb-6 md:[@media(min-height:800px)]:pb-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div
                    className={`flex items-center justify-between transition-all duration-500 motion-reduce:transition-none ${isOpen ? 'translate-y-0 opacity-100 delay-300' : '-translate-y-3 opacity-0'
                        }`}
                >
                    <span className="hidden text-xl font-medium text-white/80 md:block">
                        Abner Alves Muniz
                    </span>

                    <div className="flex min-w-0 items-center gap-2 md:hidden">
                        <LanguageSwitcher
                            lang={lang}
                            onChange={setLang}
                            menuOpen={isOpen}
                            buttonClassName={CHIP}
                            compact
                        />
                        <ThemeToggle
                            theme={theme}
                            onToggle={toggleTheme}
                            buttonClassName={CHIP}
                            labelClassName="hidden min-[360px]:inline"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar menu de navegação"
                        className={`group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f2e55] sm:h-14 sm:w-14 text-[#8b86f0] transition-all duration-300 hover:scale-105 hover:bg-[#3a3965] hover:text-white active:scale-90 ${FOCUS_RING}`}
                    >
                        <span
                            aria-hidden="true"
                            className={`pointer-events-none absolute inset-0 rounded-full border-2 border-[#8b86f0] ${isOpen ? 'opacity-0' : 'x-ring'
                                }`}
                        />
                        <span className="flex transition-transform duration-300 ease-out group-hover:rotate-90 motion-reduce:transition-none">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                                className={`h-5 w-5 ${isOpen ? 'x-in' : 'x-out'}`}
                            >
                                <path
                                    d="M5 5l14 14M19 5L5 19"
                                    stroke="currentColor"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="mt-6 flex min-h-0 flex-1 flex-col overflow-hidden sm:mt-8 sm:[@media(min-height:800px)]:mt-14 md:pb-0">
                    <ul className="mb-4 flex flex-1 flex-col justify-center gap-1 md:mb-8 md:flex-none md:justify-start">
                        {MENU_ITEMS.map((item, index) => {
                            const isActive = item.href === activeHref
                            return (
                                <li
                                    key={item.href}
                                    style={{
                                        transitionDelay: isOpen
                                            ? `${150 + index * 60}ms`
                                            : `${(MENU_ITEMS.length - 1 - index) * 30}ms`,
                                    }}
                                    className={`transition-all duration-500 motion-reduce:transition-none ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                                        }`}
                                >
                                    <a
                                        href={item.href}
                                        onClick={onClose}
                                        aria-current={isActive ? 'true' : undefined}
                                        className={`${display.className} block rounded-lg text-[clamp(2.25rem,6vh,3.25rem)] md:text-[clamp(1.6rem,min(5.5vw,6.8vh),5rem)] uppercase leading-[1.02] tracking-wider transition-colors duration-300 ${FOCUS_RING} ${isActive
                                                ? 'text-[#ffd401]'
                                                : 'text-[#e4e1ff] hover:text-white focus-visible:text-white'
                                            }`}
                                    >
                                        {NAV_LABELS[item.href]}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>

                    <ProfileInfo isOpen={isOpen} />
                </div>
            </aside>
        </div>
    )
}

function ProfileInfo({ isOpen }: { isOpen: boolean }) {
    const reveal = `transition-all duration-500 motion-reduce:transition-none ${isOpen ? 'translate-y-0 opacity-100 delay-[600ms]' : 'translate-y-3 opacity-0'
        }`

    return (
        <>
            <section aria-label="Resumo e GitHub" className={`shrink-0 ${reveal}`}>
                <div className="[@media(max-height:699px)]:hidden md:[@media(max-height:879px)]:hidden mt-9">
                    <ContributionGraph isOpen={isOpen} />
                </div>

                <div className="mt-2 md:hidden">
                    <ProfileStats isOpen={isOpen} variant="cards" />
                </div>
            </section>

            <div className={`mt-auto shrink-0 pt-6 ${reveal}`}>
                <ProfileActions />
                <SocialLinks variant="dock" className="mt-3 md:hidden" />
            </div>
        </>
    )
}

function SequenceText({
    steps,
    active,
    stepMs = 650,
    delayMs = 500,
}: {
    steps: string[]
    active: boolean
    stepMs?: number
    delayMs?: number
}) {
    const last = steps.length - 1
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (!active) return

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setIndex(last)
            return
        }

        let current = 0
        let interval: ReturnType<typeof setInterval> | undefined
        setIndex(0)

        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                current += 1
                setIndex(current)
                if (current >= last && interval) clearInterval(interval)
            }, stepMs)
        }, delayMs)

        return () => {
            clearTimeout(timeout)
            if (interval) clearInterval(interval)
        }
    }, [active, last, stepMs, delayMs])

    return (
        <>
            <style>{`
                .seq-in {
                    display: inline-block;
                    animation: seq-in 450ms cubic-bezier(0.22, 1, 0.36, 1) both;
                }
                .seq-final {
                    animation:
                        seq-in 450ms cubic-bezier(0.22, 1, 0.36, 1) both,
                        seq-glow 1600ms ease-out 150ms both;
                }
                @keyframes seq-in {
                    from { opacity: 0; transform: translateY(70%); filter: blur(6px); }
                    to { opacity: 1; transform: none; filter: blur(0); }
                }
                @keyframes seq-glow {
                    0% { text-shadow: 0 0 0 rgba(230, 223, 174, 0); }
                    35% { text-shadow: 0 0 28px rgba(230, 223, 174, 0.95), 0 0 6px rgba(255, 255, 255, 0.6); }
                    100% { text-shadow: 0 0 14px rgba(230, 223, 174, 0.35); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .seq-in, .seq-final { animation: none; }
                }
            `}</style>
            <span key={index} className={index === last && last > 0 ? 'seq-in seq-final' : 'seq-in'}>
                {steps[index]}
            </span>
        </>
    )
}

function ProfileStats({
    isOpen,
    variant = 'inline',
}: {
    isOpen: boolean
    variant?: 'inline' | 'cards'
}) {
    const isCards = variant === 'cards'

    return (
        <dl className={isCards ? 'grid grid-cols-2 gap-2' : 'flex flex-wrap gap-x-12 gap-y-4'}>
            {STATS.map((stat) => (
                <div
                    key={stat.label}
                    className={isCards ? 'rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5' : undefined}
                >
                    <dd
                        className={`${display.className} uppercase leading-none tracking-wide text-[#ffd401] ${isCards ? 'text-[1.75rem]' : 'text-5xl lg:text-6xl'
                            }`}
                    >
                        {'value' in stat ? (
                            stat.value
                        ) : (
                            <>
                                <span className="sr-only">{stat.steps[stat.steps.length - 1]}</span>
                                <span aria-hidden="true">
                                    <SequenceText
                                        steps={stat.steps}
                                        stepMs={stat.stepMs}
                                        active={isOpen}
                                    />
                                </span>
                            </>
                        )}
                    </dd>
                    <dt className={isCards ? 'mt-0.5 truncate text-[11px] text-white/60' : 'mt-1 text-xs text-white/60'}>
                        {stat.label}
                    </dt>
                </div>
            ))}
        </dl>
    )
}

function ProfileActions() {
    return (
        <div>
            <p className="mb-3 truncate text-[11px] text-white/60 md:mb-4 md:whitespace-normal md:text-xs md:leading-relaxed md:[@media(max-height:819px)]:hidden">
                <span className="md:hidden">Confira o código deste projeto no GitHub!</span>
                <span className="hidden md:inline">
                    Este projeto também se encontra no GitHub. Dá uma olhada no código!
                </span>
            </p>

            <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3">
                <a
                    href={CV_URL}
                    download={CV_FILENAME}
                    className={`inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black md:py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 md:gap-2.5 md:px-6 ${FOCUS_RING}`}
                >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0">
                        <path
                            d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="md:hidden">Currículo</span>
                    <span className="hidden md:inline">Baixar currículo</span>
                </a>

                <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/25 px-4 py-2.5 text-xs font-semibold text-white/90 md:py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:text-white md:gap-2.5 md:px-6 ${FOCUS_RING}`}
                >
                    <span className="[&>svg]:h-4 [&>svg]:w-4">{GITHUB_ICON}</span>
                    <span className="md:hidden">GitHub</span>
                    <span className="hidden md:inline">Código no GitHub</span>
                </a>
            </div>
        </div>
    )
}

type Level = 0 | 1 | 2 | 3 | 4
type Contribution = { date: string; count: number; level: Level }
type LoadStatus = 'idle' | 'loading' | 'ready' | 'error'

const WEEKS = 53
const MOBILE_WEEKS = 30
const LEVEL_CLASSES: Record<Level, string> = {
    0: 'bg-white/[0.05]',
    1: 'bg-[#3f3891]',
    2: 'bg-[#8b86f0]',
    3: 'bg-[#22d3ee]',
    4: 'bg-[#ffd401]',
}

const PLACEHOLDER_CELLS: Contribution[] = Array.from({ length: WEEKS * 7 }, () => ({
    date: '',
    count: 0,
    level: 0,
}))

function buildCells(contributions: Contribution[]): (Contribution | null)[] {
    if (contributions.length === 0) return []
    const firstWeekday = new Date(`${contributions[0].date}T00:00:00`).getDay()
    const padding = Array.from({ length: firstWeekday }, () => null)
    return [...padding, ...contributions]
}

function formatDate(isoDate: string) {
    return new Date(`${isoDate}T00:00:00`).toLocaleDateString('pt-BR')
}

function ContributionGraph({ isOpen }: { isOpen: boolean }) {
    const [status, setStatus] = useState<LoadStatus>('idle')
    const [contributions, setContributions] = useState<Contribution[]>([])
    const [isNarrow, setIsNarrow] = useState(false)
    const hasRequested = useRef(false)

    useEffect(() => {
        const query = window.matchMedia('(max-width: 767px)')
        const update = () => setIsNarrow(query.matches)
        update()
        query.addEventListener('change', update)
        return () => query.removeEventListener('change', update)
    }, [])

    useEffect(() => {
        if (!isOpen || hasRequested.current) return
        hasRequested.current = true
        setStatus('loading')

        fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`)
            .then((response) => {
                if (!response.ok) throw new Error('Falha ao buscar contribuições')
                return response.json()
            })
            .then((data: { contributions?: { date: string; count: number; level: number }[] }) => {
                const list = (data.contributions ?? []).map(({ date, count, level }) => ({
                    date,
                    count,
                    level: Math.min(4, Math.max(0, level)) as Level,
                }))
                if (list.length === 0) throw new Error('Sem dados')
                setContributions(list)
                setStatus('ready')
            })
            .catch(() => setStatus('error'))
    }, [isOpen])

    const visible = useMemo(
        () => (isNarrow ? contributions.slice(-MOBILE_WEEKS * 7) : contributions),
        [isNarrow, contributions],
    )
    const cells = useMemo(
        () =>
            status === 'ready'
                ? buildCells(visible)
                : PLACEHOLDER_CELLS.slice(-(isNarrow ? MOBILE_WEEKS : WEEKS) * 7),
        [status, visible, isNarrow],
    )
    const columns = Math.ceil(cells.length / 7)
    const total = useMemo(
        () => visible.reduce((sum, item) => sum + item.count, 0),
        [visible],
    )

    const animate = isOpen && status === 'ready'

    const caption =
        status === 'ready'
            ? `${total} contribuições ${isNarrow ? 'em 7 meses' : 'no último ano'}`
            : status === 'error'
                ? 'Contribuições indisponíveis no momento'
                : 'Carregando contribuições…'

    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 md:rounded-2xl md:p-5">
            <style>{`
                .cell-in { animation: cell-in 420ms cubic-bezier(0.22, 1, 0.36, 1) both; }
                @keyframes cell-in {
                    from { opacity: 0; transform: scale(0.3); }
                    to { opacity: 1; transform: none; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .cell-in { animation: none; }
                }
            `}</style>
            <div className="mb-2 flex items-center justify-between gap-3 md:mb-4 md:gap-4">
                <p className="truncate text-[11px] text-white/50 md:text-xs" aria-live="polite">
                    {caption}
                </p>

                <div aria-hidden="true" className="flex shrink-0 gap-1">
                    {([1, 2, 3, 4] as Level[]).map((level) => (
                        <span key={level} className={`h-2.5 w-2.5 rounded-[2px] md:h-3 md:w-3 ${LEVEL_CLASSES[level]}`} />
                    ))}
                </div>
            </div>

            <div
                role="img"
                aria-label={caption}
                className={`grid grid-flow-col gap-[2px] md:gap-[3px] [mask-image:linear-gradient(to_right,rgba(0,0,0,0.35),#000_45%)] ${status === 'loading' ? 'animate-pulse' : ''
                    }`}
                style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    gridTemplateRows: 'repeat(7, auto)',
                }}
            >
                {cells.map((cell, index) =>
                    cell === null ? (
                        <span key={index} aria-hidden="true" className="aspect-square" />
                    ) : (
                        <span
                            key={index}
                            title={
                                cell.date
                                    ? `${cell.count} contribuições em ${formatDate(cell.date)}`
                                    : undefined
                            }
                            className={`aspect-square rounded-[2px] ${LEVEL_CLASSES[cell.level]} ${animate ? 'cell-in' : ''}`}
                            style={
                                animate
                                    ? {
                                        animationDelay: `${450 + Math.floor(index / 7) * 16 + (index % 7) * 12}ms`,
                                    }
                                    : undefined
                            }
                        />
                    ),
                )}
            </div>
        </div>
    )
}

type Lang = 'pt' | 'en'
type Theme = 'dark' | 'light'

const LANGUAGES: { code: Lang; label: string; short: string }[] = [
    { code: 'pt', label: 'Português', short: 'PT-BR' },
    { code: 'en', label: 'English', short: 'EN' },
]

const CHIP = 'h-9 gap-2 border border-white/10 bg-white/[0.04] py-0'

const PILL_BUTTON = `inline-flex items-center gap-2.5 rounded-full px-3 py-2 text-sm font-semibold text-[#b9b4e8] transition-colors duration-300 hover:bg-white/5 hover:text-white ${FOCUS_RING}`

type LanguageSwitcherProps = {
    lang: Lang
    onChange: (lang: Lang) => void
    menuOpen: boolean
    buttonClassName?: string
    compact?: boolean
}

function LanguageSwitcher({
    lang,
    onChange,
    menuOpen,
    buttonClassName = '',
    compact = false,
}: LanguageSwitcherProps) {
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const current = LANGUAGES.find((item) => item.code === lang) ?? LANGUAGES[0]

    useEffect(() => {
        if (!menuOpen) setOpen(false)
    }, [menuOpen])

    useEffect(() => {
        if (!open) return

        const handlePointerDown = (event: PointerEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener('pointerdown', handlePointerDown)
        return () => document.removeEventListener('pointerdown', handlePointerDown)
    }, [open])

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                onClick={() => setOpen((previous) => !previous)}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label="Mudar idioma"
                className={`${PILL_BUTTON} ${buttonClassName}`}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-5 w-5"
                >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
                </svg>
                <span>{compact ? current.short : current.label}</span>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            <ul
                role="listbox"
                aria-label="Idioma"
                className={`absolute left-0 top-full z-20 mt-2 flex w-[min(18rem,calc(100vw-4rem))] origin-top-left flex-col gap-2 rounded-2xl border border-white/10 bg-[#171330]/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur transition-all duration-300 motion-reduce:transition-none ${open
                        ? 'visible translate-y-0 scale-100 opacity-100'
                        : 'invisible -translate-y-1 scale-95 opacity-0'
                    }`}
            >
                {LANGUAGES.map((item) => {
                    const selected = item.code === lang
                    return (
                        <li key={item.code} role="presentation">
                            <button
                                type="button"
                                role="option"
                                aria-selected={selected}
                                onClick={() => {
                                    onChange(item.code)
                                    setOpen(false)
                                }}
                                className={`flex w-full items-center justify-between rounded-xl bg-white/[0.04] px-5 py-4 text-left text-sm font-semibold transition-colors duration-300 hover:bg-white/[0.08] ${FOCUS_RING} ${selected ? 'text-white' : 'text-[#b9b4e8]'
                                    }`}
                            >
                                {item.label}
                                <span
                                    aria-hidden="true"
                                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors duration-300 ${selected ? 'border-[#8b86f0]' : 'border-white/25'
                                        }`}
                                >
                                    <span
                                        className={`h-2 w-2 rounded-full bg-[#8b86f0] transition-transform duration-300 ${selected ? 'scale-100' : 'scale-0'
                                            }`}
                                    />
                                </span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

type ThemeToggleProps = {
    theme: Theme
    onToggle: () => void
    labelClassName?: string
    buttonClassName?: string
}

function ThemeToggle({ theme, onToggle, labelClassName = '', buttonClassName = '' }: ThemeToggleProps) {
    const isDark = theme === 'dark'

    return (
        <button
            type="button"
            onClick={onToggle}
            aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            className={`${PILL_BUTTON} ${buttonClassName}`}
        >
            <span className="relative h-5 w-5">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`absolute inset-0 h-5 w-5 transition-all duration-500 motion-reduce:transition-none ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
                        }`}
                >
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={`absolute inset-0 h-5 w-5 transition-all duration-500 motion-reduce:transition-none ${isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
                        }`}
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
            </span>
            <span className={labelClassName}>{isDark ? 'Escuro' : 'Claro'}</span>
        </button>
    )
}

function SocialLinks({
    className = '',
    variant = 'plain',
}: {
    className?: string
    variant?: 'plain' | 'dock'
}) {
    const isDock = variant === 'dock'

    return (
        <ul
            aria-label="Redes sociais"
            className={`flex items-center ${isDock ? 'h-11 justify-around rounded-full border border-white/10 bg-white/[0.03] px-2' : ''} ${className}`}
        >
            {SOCIALS.map((social) => (
                <li key={social.label}>
                    <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        title={social.label}
                        className={`flex items-center justify-center rounded-full transition-all duration-300 hover:text-white ${FOCUS_RING} ${isDock
                                ? 'h-9 w-9 text-white/55 hover:bg-white/[0.06] active:scale-90 [&>svg]:h-[17px] [&>svg]:w-[17px]'
                                : 'h-10 w-10 text-white/80 hover:-translate-y-0.5'
                            }`}
                    >
                        {social.icon}
                    </a>
                </li>
            ))}
        </ul>
    )
}

type LeftPanelProps = {
    isOpen: boolean
    lang: Lang
    onLangChange: (lang: Lang) => void
    theme: Theme
    onThemeToggle: () => void
}

function LeftPanel({ isOpen, lang, onLangChange, theme, onThemeToggle }: LeftPanelProps) {
    return (
        <div
            className={`pointer-events-none absolute inset-y-0 left-0 hidden flex-col justify-between bg-black/30 px-10 pb-10 pt-8 transition-opacity duration-500 motion-reduce:transition-none md:flex md:right-[max(42%,460px)] lg:px-14 ${isOpen ? 'opacity-100 delay-150' : 'opacity-0'
                }`}
        >
            <div
                className={`flex h-14 items-center justify-between transition-all duration-500 motion-reduce:transition-none ${isOpen ? 'translate-y-0 opacity-100 delay-500' : '-translate-y-3 opacity-0'
                    }`}
            >
                <div className="pointer-events-auto -ml-3">
                    <LanguageSwitcher lang={lang} onChange={onLangChange} menuOpen={isOpen} />
                </div>
                <div className="pointer-events-auto -mr-3">
                    <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                </div>
            </div>

            <div
                className={`flex flex-wrap items-end justify-between gap-x-6 gap-y-8 transition-all duration-500 motion-reduce:transition-none ${isOpen ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-3 opacity-0'
                    }`}
            >
                <div className="pointer-events-auto">
                    <ProfileStats isOpen={isOpen} />
                </div>

                <SocialLinks className="pointer-events-auto gap-2" />
            </div>
        </div>
    )
}
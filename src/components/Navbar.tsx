'use client'

import { useCallback, useEffect, useState, type ReactNode } from 'react'
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
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Habilidades', href: '#habilidades' },
]

const CONTACT_ITEM = { label: 'Entrar em contato', href: '#contatos' }
const MENU_ITEMS = [...NAV_ITEMS, CONTACT_ITEM]

const FOCUS_RING = 'outline-none focus-visible:ring-2 focus-visible:ring-white/60'

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
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                </svg>
        ),
    },
    {
        label: 'GitHub',
        href: 'https://github.com/abneeralves',
        icon: (
            <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            aria-hidden="true" 
            className="h-5 w-5"
            >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/abner-alves-/',
        icon: (
            <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            aria-hidden="true" 
            className="h-5 w-5"
            >
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
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
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
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
        ),
    },
]

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
                className="flex items-center justify-between px-6 py-5 sm:px-10 sm:py-7 lg:px-24 [&>*]:pointer-events-auto"
            >
                <Logo onClick={onLogoClick} />

                <button
                    type="button"
                    onClick={onToggle}
                    aria-label="Abrir menu de navegação"
                    aria-expanded={isMenuOpen}
                    aria-controls="site-menu"
                    className={`group flex h-11 w-12 flex-col items-end justify-center gap-[9px] rounded-lg ${FOCUS_RING}`}
                >
                    <span className="h-[5px] w-10 rounded-[1px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:w-8" />
                    <span className="h-[5px] w-10 rounded-[1px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:w-10" />
                </button>
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
            className={`group flex items-center rounded-xl transition-transform duration-300 hover:scale-[1.04] ${FOCUS_RING} ${className}`}
        >
            <Image
                src="/imgHeader/A.png"
                alt=""
                width={40}
                height={40}
                priority
                className="h-auto w-9 object-contain transition-transform duration-500 group-hover:rotate-6 sm:w-10"
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
    return (
        <div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className={`fixed inset-0 z-50 ${firaCode.className} ${
                isOpen ? 'visible' : 'invisible delay-500'
            }`}
        >
            <button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                onClick={onClose}
                className={`absolute inset-0 h-full w-full cursor-default bg-black/60 backdrop-blur-[2px] transition-opacity duration-500 motion-reduce:transition-none ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                }`}
            />

            <LeftPanel isOpen={isOpen} onClose={onClose} />

            <aside
                className={`absolute right-0 top-0 flex h-full w-full flex-col bg-[#1b1b32] px-8 pb-8 pt-6 shadow-[-20px_0_60px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-14 sm:pt-8 md:w-[42%] md:min-w-[460px] ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <Logo onClick={onClose} />
                        <span aria-hidden="true" className="h-6 w-px bg-white/25" />
                        <span className="text-xl font-medium text-white/80">Abner Alves</span>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar menu de navegação"
                        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#2f2e55] text-[#8b86f0] transition-all duration-300 hover:scale-105 hover:bg-[#3a3965] ${FOCUS_RING}`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                            <path
                                d="M5 5l14 14M19 5L5 19"
                                stroke="currentColor"
                                strokeWidth="3.2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                <ul className="mt-14 flex flex-1 flex-col gap-1 overflow-y-auto pb-4 sm:mt-20">
                    {MENU_ITEMS.map((item, index) => {
                        const isActive = item.href === activeHref
                        return (
                            <li
                                key={item.href}
                                style={{ transitionDelay: isOpen ? `${150 + index * 60}ms` : '0ms' }}
                                className={`transition-all duration-500 motion-reduce:transition-none ${
                                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                                }`}
                            >
                                <a
                                    href={item.href}
                                    onClick={onClose}
                                    aria-current={isActive ? 'true' : undefined}
                                    className={`${display.className} block rounded-lg text-[clamp(2.75rem,5vw,4.5rem)] uppercase leading-[1.05] tracking-wide transition-colors duration-300 ${FOCUS_RING} ${
                                        isActive
                                            ? 'text-[#e6dfae]'
                                            : 'text-[#9b95d9] hover:text-white focus-visible:text-white'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </div>
    )
}

type LeftPanelProps = {
    isOpen: boolean
    onClose: () => void
}

function LeftPanel({ isOpen, onClose }: LeftPanelProps) {
    return (
        <div
            className={`pointer-events-none absolute inset-y-0 left-0 hidden flex-col bg-[radial-gradient(120%_70%_at_50%_0%,#5c3f5a_0%,rgba(92,63,90,0)_65%),linear-gradient(180deg,#4a3550_0%,#3b305f_60%,#322d5c_100%)] px-10 pb-10 transition-opacity duration-500 motion-reduce:transition-none md:flex md:right-[max(42%,460px)] lg:px-14 ${
                isOpen ? 'opacity-100 delay-150' : 'opacity-0'
            }`}
        >
            <div className="flex flex-1 items-center justify-center">
                <a
                    href="#inicio"
                    onClick={onClose}
                    aria-label="Ir para o início"
                    className={`pointer-events-auto rounded-2xl transition-opacity duration-700 motion-reduce:transition-none ${FOCUS_RING} ${
                        isOpen ? 'opacity-100 delay-300' : 'opacity-0'
                    }`}
                >
                    <Image
                        src="/imgHeader/A.png"
                        alt=""
                        width={400}
                        height={400}
                        priority
                        className="h-auto w-[clamp(160px,18vw,280px)] object-contain brightness-0 invert opacity-90"
                    />
                </a>
            </div>

            <div
                className={`flex items-end justify-between gap-6 transition-all duration-500 motion-reduce:transition-none ${
                    isOpen ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-3 opacity-0'
                }`}
            >
                <p className="text-base font-semibold uppercase leading-snug tracking-wide text-green-500">
                    Disponível para
                    <br />
                    novos projetos
                </p>

                <ul aria-label="Redes sociais" className="pointer-events-auto flex items-center gap-2">
                    {SOCIALS.map((social) => (
                        <li key={social.label}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                title={social.label}
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-white ${FOCUS_RING}`}
                            >
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
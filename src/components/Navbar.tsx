'use client'

import { useCallback, useEffect, useState } from 'react'
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

            <aside
                className={`absolute right-0 top-0 flex h-full w-full flex-col bg-[#1b1b32] px-8 pb-8 pt-6 shadow-[-20px_0_60px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-14 sm:pt-8 md:w-[42%] md:min-w-[460px] ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <Logo onClick={onClose} />
                        <span aria-hidden="true" className="h-6 w-px bg-white/25" />
                        <span className="text-sm font-medium text-white/80">Meu Portfólio</span>
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
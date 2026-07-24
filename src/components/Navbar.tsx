'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const NAV_ITEMS = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Habilidades', href: '#habilidades' },
]

const SCROLL_THRESHOLD = 20
const DESKTOP_BREAKPOINT = 768
const FOCUS_RING = 'outline-none focus-visible:ring-2 focus-visible:ring-white/50'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => setIsMenuOpen((previous) => !previous)
    const closeMenu = () => setIsMenuOpen(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD)

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= DESKTOP_BREAKPOINT) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isSurfaceElevated = isScrolled || isMenuOpen

    return (
        <nav
            aria-label="Navegação principal"
            className={`fixed left-0 top-0 z-50 w-full px-4 pt-4 transition-all duration-500 sm:px-6 lg:px-8 ${firaCode.className}`}
        >
            <div
                className={`mx-auto w-full max-w-[1500px] rounded-[24px] border px-4 py-3 transition-all duration-500 sm:px-5 ${isSurfaceElevated
                        ? 'border-white/10 bg-[#0c0c0f]/80 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-2xl'
                        : 'border-white/[0.06] bg-white/[0.035] backdrop-blur-xl'
                    }`}
            >
                <div className="relative flex items-center justify-between">
                    <Logo onClick={closeMenu} />

                    <div className="absolute left-1/2 -translate-x-1/2">
                        <DesktopNavLinks />
                    </div>

                    <div className="flex items-center gap-2">
                        <ContactButton />
                        <MenuToggleButton isOpen={isMenuOpen} onClick={toggleMenu} />
                    </div>
                </div>

                <MobileMenu isOpen={isMenuOpen} onLinkClick={closeMenu} />
            </div>
        </nav>
    )
}

type LogoProps = {
    onClick: () => void
}

function Logo({ onClick }: LogoProps) {
    return (
        <a
            href="#inicio"
            onClick={onClick}
            aria-label="Ir para o início"
            className={`group flex items-center gap-2.5 rounded-2xl transition-transform duration-300 hover:scale-[1.03] ${FOCUS_RING}`}
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:bg-white/10">
                <Image
                    src="/imgHeader/A.png"
                    alt=""
                    width={22}
                    height={22}
                    priority
                    className="h-auto w-[22px] object-contain transition-transform duration-500 group-hover:rotate-6"
                />
            </div>
        </a>
    )
}

function DesktopNavLinks() {
    return (
        <ul className="hidden items-center rounded-full border border-white/[0.06] bg-white/[0.035] p-1 md:flex">
            {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                    <a
                        href={item.href}
                        className={`block rounded-full px-4 py-2.5 text-[11px] font-medium text-white/45 transition-all duration-300 hover:bg-white/[0.07] hover:text-white focus-visible:bg-white/10 focus-visible:text-white ${FOCUS_RING}`}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

function ContactButton() {
    return (
        <a
            href="#contatos"
            className={`hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-[1.03] hover:bg-white/90 md:flex ${FOCUS_RING}`}
        >
            Contato
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
                <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </a>
    )
}

type MenuToggleButtonProps = {
    isOpen: boolean
    onClick: () => void
}

function MenuToggleButton({ isOpen, onClick }: MenuToggleButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className={`flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.06] text-white transition-all duration-300 hover:bg-white/10 md:hidden ${FOCUS_RING}`}
        >
            <span className="sr-only">{isOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            <div className="relative h-4 w-5">
                <span
                    className={`absolute left-0 top-0 h-px w-full bg-current transition-all duration-300 ${isOpen ? 'translate-y-[7px] rotate-45' : ''
                        }`}
                />
                <span
                    className={`absolute left-0 top-[7px] h-px w-full bg-current transition-all duration-300 ${isOpen ? 'scale-x-0 opacity-0' : ''
                        }`}
                />
                <span
                    className={`absolute bottom-0 left-0 h-px w-full bg-current transition-all duration-300 ${isOpen ? '-translate-y-[8px] -rotate-45' : ''
                        }`}
                />
            </div>
        </button>
    )
}

type MobileMenuProps = {
    isOpen: boolean
    onLinkClick: () => void
}

function MobileMenu({ isOpen, onLinkClick }: MobileMenuProps) {
    return (
        <div
            id="mobile-navigation"
            className={`grid overflow-hidden transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
        >
            <div className="min-h-0">
                <div className="mt-4 border-t border-white/[0.06] pt-4">
                    <ul className="flex flex-col gap-1">
                        {NAV_ITEMS.map((item, index) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={onLinkClick}
                                    className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-medium text-white/55 transition-all duration-300 hover:bg-white/[0.06] hover:text-white focus-visible:bg-white/10 focus-visible:text-white ${FOCUS_RING}`}
                                >
                                    <span>{item.label}</span>
                                    <span className="text-[10px] text-white/20 transition-colors group-hover:text-white/50">
                                        0{index + 1}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contatos"
                        onClick={onLinkClick}
                        className={`mt-3 flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 ${FOCUS_RING}`}
                    >
                        Entrar em contato
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
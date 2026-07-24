'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

const NAV_ITEMS = [
    {
        label: 'Início',
        href: '#inicio',
    },
    {
        label: 'Sobre',
        href: '#sobre',
    },
    {
        label: 'Projetos',
        href: '#projetos',
    },
    {
        label: 'Experiência',
        href: '#experiencia',
    },
    {
        label: 'Habilidades',
        href: '#habilidades',
    },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((previousState) => !previousState)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <nav
            aria-label="Navegação principal"
            className={`fixed left-0
                top-0
                z-50
                w-full
                px-4
                pt-4
                transition-all
                duration-500
                sm:px-6
                lg:px-8
                ${firaCode.className}
            `}
        >
            <div
                className={`
                    mx-auto
                    w-full
                    max-w-[1500px]
                    rounded-[24px]
                    border
                    px-4
                    py-3
                    transition-all
                    duration-500
                    sm:px-5
                    ${isScrolled || isMenuOpen
                        ? `
                                border-white/10
                                bg-[#0c0c0f]/80
                                shadow-[0_16px_50px_rgba(0,0,0,0.25)]
                                backdrop-blur-2xl
                            `
                        : `
                                border-white/[0.06]
                                bg-white/[0.035]
                                backdrop-blur-xl
                            `
                    }
                `}
            >
                <div className="flex items-center justify-between">
                    <a
                        href="#inicio"
                        onClick={closeMenu}
                        aria-label="Ir para o início"
                        className="
                            group
                            flex
                            items-center
                            gap-2.5
                            rounded-2xl
                            outline-none
                            transition-transform
                            duration-300
                            hover:scale-[1.03]
                            focus-visible:ring-2
                            focus-visible:ring-white/50
                        "
                    >
                        <div
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-[14px]
                                border
                                border-white/10
                                bg-white/[0.06]
                                shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                                transition-all
                                duration-300
                                group-hover:bg-white/10
                            "
                        >
                            <Image
                                src="/imgHeader/A.png"
                                alt=""
                                width={22}
                                height={22}
                                priority
                                className="
                                    h-auto
                                    w-[22px]
                                    object-contain
                                    transition-transform
                                    duration-500
                                    group-hover:rotate-6
                                "
                            />
                        </div>

                        <div className="hidden sm:block">
                            <p
                                className="
                                    text-xs
                                    font-semibold
                                    tracking-[-0.03em]
                                    text-white/90
                                "
                            >
                                Abner Muniz
                            </p>

                            <p
                                className="
                                    mt-0.5
                                    text-[9px]
                                    font-normal
                                    uppercase
                                    tracking-[0.16em]
                                    text-white/30
                                "
                            >
                                Full Stack Developer
                            </p>
                        </div>
                    </a>

                    <ul
                        className="
                            hidden
                            items-center
                            rounded-full
                            border
                            border-white/[0.06]
                            bg-white/[0.035]
                            p-1
                            md:flex
                        "
                    >
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="
                                        block
                                        rounded-full
                                        px-4
                                        py-2.5
                                        text-[11px]
                                        font-medium
                                        text-white/45
                                        outline-none
                                        transition-all
                                        duration-300
                                        hover:bg-white/[0.07]
                                        hover:text-white
                                        focus-visible:bg-white/10
                                        focus-visible:text-white
                                    "
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <a
                            href="#contatos"
                            className="
                                hidden
                                items-center
                                gap-2
                                rounded-full
                                bg-white
                                px-5
                                py-3
                                text-[11px]
                                font-semibold
                                text-black
                                shadow-[0_10px_30px_rgba(255,255,255,0.08)]
                                outline-none
                                transition-all
                                duration-300
                                hover:scale-[1.03]
                                hover:bg-white/90
                                focus-visible:ring-2
                                focus-visible:ring-white/50
                                md:flex
                            "
                        >
                            Contato

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                                className="h-3.5 w-3.5"
                            >
                                <path
                                    d="M5 12h14M13 6l6 6-6 6"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>

                        <button
                            type="button"
                            onClick={toggleMenu}
                            aria-label={
                                isMenuOpen
                                    ? 'Fechar menu de navegação'
                                    : 'Abrir menu de navegação'
                            }
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-[14px]
                                border
                                border-white/10
                                bg-white/[0.06]
                                text-white
                                outline-none
                                transition-all
                                duration-300
                                hover:bg-white/10
                                focus-visible:ring-2
                                focus-visible:ring-white/50
                                md:hidden
                            "
                        >
                            <span className="sr-only">
                                {isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                            </span>

                            <div className="relative h-4 w-5">
                                <span
                                    className={`
                                        absolute
                                        left-0
                                        top-0
                                        h-px
                                        w-full
                                        bg-current
                                        transition-all
                                        duration-300
                                        ${isMenuOpen
                                            ? 'translate-y-[7px] rotate-45'
                                            : ''
                                        }
                                    `}
                                />

                                <span
                                    className={`
                                        absolute
                                        left-0
                                        top-[7px]
                                        h-px
                                        w-full
                                        bg-current
                                        transition-all
                                        duration-300
                                        ${isMenuOpen
                                            ? 'scale-x-0 opacity-0'
                                            : ''
                                        }
                                    `}
                                />

                                <span
                                    className={`
                                        absolute
                                        bottom-0
                                        left-0
                                        h-px
                                        w-full
                                        bg-current
                                        transition-all
                                        duration-300
                                        ${isMenuOpen
                                            ? '-translate-y-[8px] -rotate-45'
                                            : ''
                                        }
                                    `}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                <div
                    id="mobile-navigation"
                    className={`
                        grid
                        overflow-hidden
                        transition-all
                        duration-500
                        ease-in-out
                        md:hidden
                        ${isMenuOpen
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }
                    `}
                >
                    <div className="min-h-0">
                        <div
                            className="
                                mt-4
                                border-t
                                border-white/[0.06]
                                pt-4
                            "
                        >
                            <ul className="flex flex-col gap-1">
                                {NAV_ITEMS.map((item, index) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="
                                                group
                                                flex
                                                items-center
                                                justify-between
                                                rounded-2xl
                                                px-4
                                                py-3.5
                                                text-sm
                                                font-medium
                                                text-white/55
                                                outline-none
                                                transition-all
                                                duration-300
                                                hover:bg-white/[0.06]
                                                hover:text-white
                                                focus-visible:bg-white/10
                                                focus-visible:text-white
                                            "
                                        >
                                            <span>{item.label}</span>

                                            <span
                                                className="
                                                    text-[10px]
                                                    text-white/20
                                                    transition-colors
                                                    group-hover:text-white/50
                                                "
                                            >
                                                0{index + 1}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contatos"
                                onClick={closeMenu}
                                className="
                                    mt-3
                                    flex
                                    items-center
                                    justify-between
                                    rounded-2xl
                                    bg-white
                                    px-5
                                    py-4
                                    text-sm
                                    font-semibold
                                    text-black
                                    outline-none
                                    transition-all
                                    duration-300
                                    hover:bg-white/90
                                    focus-visible:ring-2
                                    focus-visible:ring-white/50
                                "
                            >
                                Entrar em contato

                                <span
                                    className="
                                        flex
                                        h-7
                                        w-7
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-black
                                        text-white
                                    "
                                >
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
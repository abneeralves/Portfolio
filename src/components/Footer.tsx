'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { ArrowUp, Mail } from 'lucide-react'
import { Bebas_Neue, Exo_2, Anton } from 'next/font/google'

const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const Exo = Exo_2({ subsets: ['latin'], weight: ['400', '600'] })
const TitleFont = Anton({ subsets: ['latin'], weight: '400' })

const FOCUS_RING =
    'outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#171330]'

const EMAIL = 'abneralvesmuniz76@gmail.com'
const THANKS = 'Obrigado por ter chegado até aqui'

type Social = {
    name: string
    icon: string
    href: string
    invert: boolean
}

const socials: Social[] = [
    {
        name: 'Whatsapp',
        icon: '/SVGs/whatsapp.svg',
        href: 'https://wa.me/5511999078219',
        invert: false,
    },
    {
        name: 'Instagram',
        icon: '/SVGs/instagram.svg',
        href: 'https://www.instagram.com/abneer_alves/',
        invert: false,
    },
    {
        name: 'Twitter',
        icon: '/SVGs/twitter.svg',
        href: 'https://twitter.com/abneer_alves',
        invert: false,
    },
    {
        name: 'Github',
        icon: '/SVGs/github.svg',
        href: 'https://github.com/abneeralves',
        invert: true,
    },
    {
        name: 'Linkedin',
        icon: '/SVGs/linkedin.svg',
        href: 'https://www.linkedin.com/in/abner-alves-/',
        invert: false,
    },
]

export default function Footer() {
    return (
        <footer
            id="contatos"
            className="relative bg-[#171330] px-5 pb-10 pt-8 sm:px-10 lg:px-16 lg:pt-12"
        >
            <div className="mx-auto w-full max-w-[1650px]">
                {/* Título */}
                <header
                    data-aos="fade-up"
                    className="mb-12 flex w-full justify-center lg:mb-16"
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
                        <span aria-hidden="true" className="mx-3 text-[#ffd401] sm:mx-5">
                            /
                        </span>
                        <span className="text-white">Contatos</span>
                    </h2>
                </header>

                {/* Frase e email */}
                <div
                    data-aos="fade-up"
                    className="mx-auto flex max-w-3xl flex-col items-center text-center"
                >
                    <h3
                        className={`relative w-full text-4xl leading-[0.95] text-white sm:text-5xl lg:text-6xl ${BebasN.className}`}
                    >
                        <span className="sr-only">{THANKS}</span>
                        <span aria-hidden="true" className="invisible block">
                            {THANKS}
                        </span>
                        <span aria-hidden="true" className="absolute inset-0">
                            <TypeAnimation
                                sequence={[THANKS]}
                                wrapper="span"
                                speed={20}
                                repeat={0}
                            />
                        </span>
                    </h3>

                    <a
                        href={`mailto:${EMAIL}`}
                        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#ffd401] px-6 py-3.5 text-sm font-semibold text-[#171330] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffe45c] ${FOCUS_RING} ${Exo.className}`}
                    >
                        <Mail aria-hidden="true" className="h-4 w-4" />
                        {EMAIL}
                    </a>
                </div>

                {/* Redes sociais: largura total, mesma reta das outras seções */}
                <ul
                    data-aos="fade-up"
                    aria-label="Redes sociais"
                    className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4"
                >
                    {socials.map((social) => (
                        <li key={social.name}>
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-[#1d1840] py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffd401]/50 ${FOCUS_RING}`}
                            >
                                <Image
                                    src={social.icon}
                                    alt=""
                                    width={24}
                                    height={24}
                                    className={`opacity-80 transition-opacity duration-300 group-hover:opacity-100 ${
                                        social.invert ? 'invert' : ''
                                    }`}
                                />
                                <span
                                    className={`text-sm text-white/60 transition-colors duration-300 group-hover:text-white ${Exo.className}`}
                                >
                                    {social.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Rodapé */}
                <div className="mt-16 flex items-center justify-between gap-6 border-t border-white/10 pt-8">
                    <p className={`text-sm text-white/50 ${Exo.className}`}>
                        © 2026 Abner Alves
                    </p>

                    <a
                        href="#inicio"
                        className={`group inline-flex items-center gap-2 rounded-full text-xs text-white/50 transition-colors duration-300 hover:text-[#ffd401] ${FOCUS_RING} ${Exo.className}`}
                    >
                        Voltar ao topo
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#ffd401]/40">
                            <ArrowUp aria-hidden="true" className="h-4 w-4" />
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
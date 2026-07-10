"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Bebas_Neue, Exo_2 } from "next/font/google"
import CountUp from "react-countup";
import { TypeAnimation } from 'react-type-animation'
import Image from "next/image"

const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then((m) => m.GitHubCalendar),
    { ssr: false }
)

const BebasN = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
})
const Exo = Exo_2({
    subsets: ["latin"],
    weight: "400"
})

type Social = {
    name: string,
    icon: string,
    href: string,
    shadow: string,
    invert: boolean
}

const socials: Social[] = [
    {
        name: 'Whatsapp',
        icon: '/SVGs/whatsapp.svg',
        href: "https://wa.me/5511999078219",
        shadow: "hover:shadow-green-500/40",
        invert: false
    },
    {
        name: 'Instagram',
        icon: '/SVGs/instagram.svg',
        href: "https://www.instagram.com/abneer_alves/",
        shadow: "hover:shadow-pink-500/40",
        invert: false
    },
    {
        name: 'Twitter',
        icon: '/SVGs/twitter.svg',
        href: "https://twitter.com/abneer_alves",
        shadow: "hover:shadow-blue-500/40",
        invert: false
    },
    {
        name: 'Github',
        icon: '/SVGs/github.svg',
        href: "https://github.com/abneeralves",
        shadow: "hover:shadow-white/30",
        invert: true
    },
    {
        name: 'Linkedin',
        icon: '/SVGs/linkedin.svg',
        href: "https://www.linkedin.com/in/abner-alves-/",
        shadow: "hover:shadow-blue-400/40",
        invert: false
    }
]

const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contatos", href: "#contatos" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Habilidades", href: "#habilidades" }
]

export default function Footer() {
    const [stars, setStars] = useState<{ id: number; top: number; left: number; size: number; delay: number; duration: number }[]>([])

    useEffect(() => {
        setStars(Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 4,
        })))
    }, [])
    const SocialNode = ({ social, invert }: any) => (
        <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
            group
            relative
            flex
            flex-col
            items-center
            gap-3
        "
        >

            {/* Connector Dot */}
            <div className="absolute -z-10 h-3 w-3 rounded-full bg-[#7C3AED] shadow-[0_0_12px_#7C3AED]" />

            {/* Card */}
            <div
                className="
                relative
                flex
                h-24
                w-24
                items-center
                justify-center
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[linear-gradient(145deg,rgba(35,28,75,.95),rgba(23,19,48,.95))]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-4
                hover:scale-110
                hover:rotate-3
                hover:border-[#ffd401]/40
                hover:shadow-[0_20px_60px_-15px_rgba(255,212,1,.45)]
            "
            >

                {/* Rotating Border */}
                <div
                    className="
                    absolute
                    inset-[-1px]
                    rounded-[28px]
                    bg-[conic-gradient(from_0deg,transparent,#7C3AED66,#ffd40188,#7C3AED66,transparent)]
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:animate-spin
                "
                />

                {/* Inner Background */}
                <div className="absolute inset-[2px] rounded-[26px] bg-[#171330]" />

                {/* Glow */}
                <div
                    className="
                    absolute
                    h-14
                    w-14
                    rounded-full
                    bg-[#ffd401]/20
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:scale-[2]
                "
                />

                {/* Orbit Ring */}
                <div
                    className="
                    absolute
                    inset-[-8px]
                    rounded-[34px]
                    border
                    border-[#7C3AED]/20
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:animate-pulse
                "
                />

                <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    className={`
                    relative
                    z-10
                    opacity-70
                    transition-all
                    duration-500
                    group-hover:scale-125
                    group-hover:rotate-12
                    group-hover:opacity-100
                    ${invert ? "invert" : ""}
                `}
                />
            </div>

            <span
                className={`
                text-xs
                text-white/45
                transition-all
                duration-300
                group-hover:text-[#ffd401]
                group-hover:-translate-y-1
                ${Exo.className}
            `}
            >
                {social.name}
            </span>

        </a>
    )
    return (
        <footer id="contatos" className="relative overflow-hidden bg-[#171330] py-32 px-5">
            <div className="absolute inset-0 z-0 pointer-events-none">
                {stars.map((star) => (
                    <span
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: 0.5,
                            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
                            boxShadow: "0 0 4px rgba(255,255,255,0.8)"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <div className="flex flex-col items-center text-center relative">
                    <div className="relative mb-3">
                        <svg width="22" height="22" viewBox="0 0 24 24" className="text-[#ffd401]" style={{ animation: "starPulse 2.4s ease-in-out infinite" }}>
                            <path
                                fill="currentColor"
                                d="M12 0l1.8 7.2L21 9l-7.2 1.8L12 18l-1.8-7.2L3 9l7.2-1.8L12 0z"
                            />
                        </svg>
                    </div>

                    <span className={`text-cyan-300/60 text-xs tracking-[0.4em] uppercase mb-4 ${Exo.className}`}>
                        // Email & redes sociais
                    </span>

                    <div className="flex items-center gap-4">
                        <div className="w-10 sm:w-12 h-[2px] bg-[#ffd401]" />

                        <h2 className={`text-white text-5xl sm:text-9xl ${BebasN.className}`}>
                            Contatos
                            <span className="text-[#ffd401]">.</span>
                        </h2>

                        <div className="w-10 sm:w-12 h-[2px] bg-[#ffd401]" />
                    </div>

                    <p className={`text-slate-400 mt-4 max-w-xl text-sm sm:text-base ${Exo.className}`}>
                        Gostou dos meus projetos ou quer conversar sobre uma oportunidade?
                        Estou sempre aberto para novos desafios e conexões.
                    </p>

                    <div className={`flex items-center gap-2 mt-5 text-slate-500 text-xs ${Exo.className}`}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>

                        <span>São Paulo, Brasil</span>

                        <span className="mx-1 text-slate-700">•</span>

                        <span className="inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] shadow-[0_0_6px_#28C840]" />
                            Disponível para novos projetos
                        </span>
                    </div>
                </div>

                <div className="mt-32 w-full max-w-[1700px] mx-auto">
                    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(145deg,rgba(23,19,48,0.98),rgba(12,10,30,0.96))] shadow-[0_30px_100px_-30px_rgba(124,58,237,.35)]">
                        <div className="pointer-events-none absolute -top-32 right-0 h-[320px] w-[320px] rounded-full bg-[#7C3AED]/25 blur-[130px]" />

                        <div className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-[#ffd401]/15 blur-[120px]" />

                        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />

                        <div className="relative z-10 flex flex-col lg:flex-row">
                            <div className="flex flex-col justify-between gap-12 border-b border-white/10 p-10 lg:w-[55%] lg:border-b-0 lg:border-r lg:border-white/10">
                                <div>
                                    <h2 className={`mt-5 text-5xl md:text-7xl leading-[0.95] text-white ${BebasN.className}`}>
                                        {/* OBRIGADO POR TER
                                        <br />

                                        <span className="text-[#ffd401]">
                                            CHEGADO
                                        </span>{" "}

                                        ATÉ AQUI. */}

                                        <TypeAnimation
                            sequence={[
                                'Obrigado por ter chegado ate aqui',
                            ]}
                            speed={20}
                            repeat={0}
                        />
                                    </h2>

                                    <p className={`mt-6 max-w-[550px] text-white/60 leading-relaxed ${Exo.className}`}>
                                        Se algum projeto chamou sua atenção ou você acredita
                                        que podemos construir algo incrível juntos,
                                        ficarei feliz em conversar com você.
                                        
                                    </p>
                                </div>

                                <GitHubCalendar
                                    username="abneeralves"
                                    colorScheme="dark"
                                    fontSize={0}
                                    theme={{
                                        dark: [
                                            "#171330",
                                            "#2d1f6e",
                                            "#5b32d4",
                                            "#7C3AED",
                                            "#ffd401",
                                        ],
                                    }}
                                />

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                                        <p className={`text-5xl leading-none text-[#ffd401] ${BebasN.className}`}>
                                            1+
                                        </p>

                                        <span className={`mt-3 block text-sm text-white/50 ${Exo.className}`}>
                                            anos de experiência
                                        </span>
                                    </div>

                                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                                        <p
                                            className={`
        text-5xl
        leading-none
        text-[#ffd401]
        ${BebasN.className}
    `}
                                        >
                                            <CountUp
                                                end={10}
                                                duration={10}
                                                suffix="+"
                                            />
                                        </p>

                                        <span className={`mt-3 block text-sm text-white/50 ${Exo.className}`}>
                                            projetos concluídos
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col lg:w-[45%]">

                                <a href="mailto:abneralvesmuniz76@gmail.com"
                                    className={`group flex items-center justify-between border-b border-white/10 px-10 py-8 transition-all hover:bg-white/[0.04] ${Exo.className}`}>

                                    <div>
                                        <span className="text-xs tracking-[0.4em] text-white/40 uppercase block mb-2">
                                            Email
                                        </span>

                                        <p className="text-white/70 group-hover:text-[#ffd401] transition-colors">
                                            abneralvesmuniz76@gmail.com
                                        </p>
                                    </div>

                                    <span className="text-white/30 group-hover:text-[#ffd401] transition-colors text-xl">
                                        ↗
                                    </span>
                                </a>

                                {/* CV */}
                                <a href="/curriculo-abner-alves.pdf" target="_blank" className={`group flex items-center justify-between border-b border-white/10 px-10 py-8 transition-all hover:bg-white/[0.04] ${Exo.className}`}>
                                    <div>
                                        <span className="text-xs tracking-[0.4em] text-white/40 uppercase block mb-2">
                                            Currículo
                                        </span>

                                        <p className="text-white/70 group-hover:text-[#ffd401] transition-colors">
                                            Download Currículo
                                        </p>
                                    </div>

                                    <span className="text-white/30 group-hover:text-[#ffd401] transition-colors text-xl">
                                        ↓
                                    </span>
                                </a>

                                <a href="https://github.com/abneeralves/Portfolio" target="_blank" className={`group flex items-center justify-between border-b border-white/10 px-10 py-8 transition-all hover:bg-white/[0.04] ${Exo.className}`}>
                                    <div>
                                        <span className="text-xs tracking-[0.4em] text-white/40 uppercase block mb-2">
                                            Projeto
                                        </span>

                                        <p className="text-white/70 group-hover:text-[#ffd401] transition-colors">
                                            Esse Projeto você pode encontrar no Github
                                        </p>
                                    </div>

                                    <span className="text-white/30 group-hover:text-[#ffd401] transition-colors text-xl">
                                        ↓
                                    </span>
                                </a>

                                <div className="flex flex-col gap-8 px-10 py-8 flex-1 overflow-hidden">

                                    <span
                                        className={`
            text-xs
            tracking-[0.45em]
            text-white/40
            uppercase
            ${Exo.className}
        `}
                                    >
                                        Redes sociais
                                    </span>

                                    <div className="relative flex items-center justify-center py-8">

                                        {/* Linha principal */}
                                        <div className="absolute left-[8%] right-[8%] h-[2px] bg-white/10 rounded-full overflow-hidden">

                                            {/* Energia */}
                                            <div className="social-flow absolute left-0 top-0 h-full w-40 rounded-full" />

                                        </div>




                                        <div className="relative z-10 flex items-center gap-8">

                                            {socials.map((social) => (
                                                <a
                                                    key={social.name}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="
                        group
                        relative
                        flex
                        flex-col
                        items-center
                        gap-3
                    "
                                                >
                                                    {/* conexão vertical */}
                                                    <div className="absolute -top-8 h-8 w-[2px] bg-gradient-to-b from-transparent via-[#7C3AED]/60 to-transparent" />

                                                    {/* node */}
                                                    <div
                                                        className="
                            relative
                            flex
                            h-24
                            w-24
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-white/10
                            bg-[linear-gradient(145deg,rgba(35,28,75,.95),rgba(23,19,48,.95))]
                            backdrop-blur-xl
                            transition-all
                            duration-500
                            hover:-translate-y-4
                            hover:scale-110
                            hover:border-[#ffd401]/40
                            hover:shadow-[0_25px_70px_-15px_rgba(255,212,1,.45)]
                        "
                                                    >

                                                        {/* Borda girando */}
                                                        <div
                                                            className="
                                absolute
                                inset-[-1px]
                                rounded-[28px]
                                opacity-0
                                transition-all
                                duration-500
                                group-hover:opacity-100
                                bg-[conic-gradient(from_0deg,transparent,#7C3AED66,#ffd40199,#7C3AED66,transparent)]
                                group-hover:animate-spin
                            "
                                                        />

                                                        {/* fundo */}
                                                        <div className="absolute inset-[2px] rounded-[26px] bg-[#171330]" />

                                                        {/* glow */}
                                                        <div
                                                            className="
                                absolute
                                h-16
                                w-16
                                rounded-full
                                bg-[#ffd401]/20
                                blur-3xl
                                opacity-0
                                transition-all
                                duration-500
                                group-hover:opacity-100
                                group-hover:scale-[2]
                            "
                                                        />

                                                        <Image
                                                            src={social.icon}
                                                            alt={social.name}
                                                            width={35}
                                                            height={35}
                                                            className={`
                                relative
                                z-10
                                opacity-70
                                transition-all
                                duration-500
                                group-hover:scale-125
                                group-hover:rotate-12
                                group-hover:opacity-100
                                ${social.invert ? "invert" : ""}
                            `}
                                                        />

                                                    </div>

                                                    <span
                                                        className={`
                            text-xs
                            text-white/45
                            transition-all
                            duration-300
                            group-hover:text-[#ffd401]
                            group-hover:-translate-y-1
                            ${Exo.className}
                        `}
                                                    >
                                                        {social.name}
                                                    </span>

                                                </a>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[1700px] mt-20">
                    <hr className="border-white/10" />
                    <div className="flex flex-col lg:flex-row items-center justify-between py-8 gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-[#ffd401] flex items-center justify-center flex-shrink-0">
                                <span className="text-[#171330] text-[11px] font-black">A</span>
                            </div>
                            <p className={`text-slate-500 text-sm ${Exo.className}`}>
                                © 2026 Abner Alves
                            </p>
                        </div>

                        <nav className={`flex items-center gap-6 text-sm ${Exo.className}`}>
                            {quickLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-500 hover:text-[#ffd401] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        <div className="flex justify-center">
                            <a href="#" className={`group inline-flex items-center gap-2 text-xs text-slate-500 hover:text-[#ffd401] transition-colors ${Exo.className}`}>
                                <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#ffd401]/40 group-hover:-translate-y-0.5 transition-all duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                </span>
                                Voltar ao topo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
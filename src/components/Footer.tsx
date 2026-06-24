import { Bebas_Neue, Exo_2 } from "next/font/google"
import { GitHubCalendar } from "react-github-calendar"
import Image from "next/image"

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
        name: "WhatsApp",
        icon: '/SVGs/whatsapp.svg',
        href: "https://wa.me/5511999078219",
        shadow: "hover:shadow-green-500/40",
        invert: false
    },
    {
        name: "Instagram",
        icon: '/SVGs/instagram.svg',
        href: "https://www.instagram.com/abneer_alves/",
        shadow: "hover:shadow-pink-500/40",
        invert: false
    },
    {
        name: "Twitter",
        icon: '/SVGs/twitter.svg',
        href: "https://twitter.com/abneer_alves",
        shadow: "hover:shadow-blue-500/40",
        invert: false
    },
    {
        name: "GitHub",
        icon: '/SVGs/github.svg',
        href: "https://github.com/abneeralves",
        shadow: "hover:shadow-white/30",
        invert: true
    },
    {
        name: "LinkedIn",
        icon: '/SVGs/linkedin.svg',
        href: "https://www.linkedin.com/in/abner-alves-/",
        shadow: "hover:shadow-blue-400/40",
        invert: false
    }
]

// Estrelas geradas uma vez (posições fixas, sem libs externas)
const STARS = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
}))

export default function Footer() {
    return (
        <footer
            id="contatos"
            className="relative overflow-hidden bg-[#171330] py-32 px-5"
        >
            {/* CAMPO DE ESTRELAS */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {STARS.map((star) => (
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
                {/* HEADER */}
                <div className="flex flex-col items-center text-center relative">
                    {/* brilho de estrela acima do título */}
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
                </div>

                {/* EMAIL CARD — terminal Mac, mais "premium" */}
                <div
                    className="mt-20 w-full max-w-3xl rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.25)]"
                    data-aos="fade-up"
                    style={{
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(24px)"
                    }}
                >
                    <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.03]">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                        </div>
                        <span className={`text-white/25 text-[11px] tracking-widest ${Exo.className}`}>
                            contato.sh
                        </span>
                        <div className="w-16" />
                    </div>
                    <div className="px-8 py-8 text-center">
                        <div className={`text-[12px] mb-8 space-y-1.5 text-left ${Exo.className}`}>
                            <p>
                                <span className="text-[#7C3AED]">abner</span>
                                <span className="text-white/25">@portfolio</span>
                                <span className="text-[#ffd401]">:~$</span>
                                <span className="text-slate-300"> echo "Vamos construir algo juntos?"</span>
                            </p>
                            <p className="text-slate-500 pl-4">→ Vamos construir algo juntos?</p>
                            <p>
                                <span className="text-[#7C3AED]">abner</span>
                                <span className="text-white/25">@portfolio</span>
                                <span className="text-[#ffd401]">:~$</span>
                                <span className="text-slate-300"> send-email --to abner</span>
                            </p>
                        </div>
                        <a
                            href="mailto:abneralvesmuniz76@gmail.com"
                            className={`
                                inline-flex
                                items-center
                                justify-center
                                gap-3
                                mt-2
                                px-8
                                py-4
                                rounded-2xl
                                bg-[#ffd401]
                                text-[#171330]
                                font-bold
                                text-lg
                                hover:scale-105
                                hover:shadow-[0_0_30px_rgba(255,212,1,0.5)]
                                transition-all
                                duration-300
                                ${Exo.className}
                            `}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            abneralvesmuniz76@gmail.com
                        </a>
                    </div>
                </div>

                {/* SOCIALS — cards mais estilizados */}
                <div
                    className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-16 w-full max-w-6xl"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                group
                                relative
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-4
                                p-8
                                rounded-3xl
                                border border-white/10
                                bg-white/[0.04]
                                backdrop-blur-sm
                                overflow-hidden
                                transition-all
                                duration-500
                                hover:-translate-y-3
                                hover:border-cyan-400/30
                                hover:shadow-2xl
                                ${social.shadow}
                            `}
                        >
                            {/* canto de brilho sutil no hover, sem degradê — apenas opacidade */}
                            <div className="absolute top-0 left-0 w-16 h-16 bg-[#ffd401]/0 group-hover:bg-[#ffd401]/5 rounded-full blur-2xl transition-all duration-500" />
                            <Image
                                src={social.icon}
                                alt={social.name}
                                width={38}
                                height={38}
                                className={`
                                    relative
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    ${social.invert ? "invert" : ""}
                                `}
                            />
                            <span className={`relative text-white text-sm ${Exo.className}`}>
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* GITHUB CALENDAR */}
                <div
                    className="mt-20 w-full max-w-7xl rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(124,58,237,0.2)]"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="flex items-center justify-between px-8 py-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#28C840] shadow-[0_0_8px_#28C840]" />
                            <h3 className={`text-white/70 text-sm ${Exo.className}`}>
                                Contribuições no GitHub
                            </h3>
                        </div>
                        <a
                            href="https://github.com/abneeralves"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-[11px] text-[#ffd401]/50 hover:text-[#ffd401] transition-colors ${Exo.className}`}
                        >
                            ver perfil →
                        </a>
                    </div>
                    <div className="p-8 overflow-x-auto">
                        <div className="flex justify-center min-w-max mx-auto text-zinc-500">
                            <GitHubCalendar
                                username="abneeralves"
                                colorScheme="dark"
                                fontSize={14}
                                theme={{
                                    dark: ["#1a1730", "#2d1f6e", "#4c35a8", "#7C3AED", "#a855f7"]
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* FOOTER BOTTOM */}
                <div className="w-full max-w-7xl mt-20">
                    <hr className="border-white/10" />
                    <div className="flex flex-col lg:flex-row items-center justify-between py-8 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full bg-[#ffd401] flex items-center justify-center flex-shrink-0">
                                <span className="text-[#171330] text-[11px] font-black">A</span>
                            </div>
                            <p className={`text-slate-500 text-sm ${Exo.className}`}>
                                © 2026 Abner Alves • Desenvolvedor Full Stack
                            </p>
                        </div>
                        <p className={`text-slate-600 text-sm ${Exo.className}`}>
                            Construído com Next.js, TypeScript e Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>

            {/* KEYFRAMES — twinkle, dino correndo, brilho de estrela */}
            <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.9; transform: scale(1.3); }
                }
                @keyframes starPulse {
                    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
                    50% { transform: scale(1.3) rotate(15deg); opacity: 1; }
                }
            `}</style>
        </footer>
    )
}
import Image from 'next/image'
import { Bebas_Neue, JetBrains_Mono, Exo_2 } from "next/font/google"

const BebasN = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const Mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'] })
const Exo = Exo_2({ subsets: ['latin'], weight: '400' })

type Category = 'Frontend' | 'Backend' | 'Infra' | 'Tools'

type Skill = {
    name: string
    icon: string
    category: Category
    blurb: string
}

const skills: Skill[] = [
    { name: 'HTML', icon: '/SVGs/html.svg', category: 'Frontend', blurb: 'Estrutura semântica e acessível em todo projeto.' },
    { name: 'CSS', icon: '/SVGs/css.svg', category: 'Frontend', blurb: 'Layouts responsivos e design fiel ao Figma.' },
    { name: 'JavaScript', icon: '/SVGs/javascript.svg', category: 'Frontend', blurb: 'Lógica e interatividade no núcleo da aplicação.' },
    { name: 'TypeScript', icon: '/SVGs/typescript.svg', category: 'Frontend', blurb: 'Tipagem estática para código seguro e escalável.' },
    { name: 'Tailwind', icon: '/SVGs/tailwind.svg', category: 'Frontend', blurb: 'Estilização rápida e consistente no markup.' },
    { name: 'React', icon: '/SVGs/react.svg', category: 'Frontend', blurb: 'Interfaces reativas baseadas em componentes.' },
    { name: 'Next.js', icon: '/SVGs/nextjs.svg', category: 'Frontend', blurb: 'SSR, rotas e performance para apps React.' },
    { name: 'Node.js', icon: '/SVGs/nodejs.svg', category: 'Backend', blurb: 'APIs e serviços JavaScript no servidor.' },
    { name: 'NestJS', icon: '/SVGs/nestjs.svg', category: 'Backend', blurb: 'Arquitetura modular para back-end Node.' },
    { name: 'Prisma', icon: '/SVGs/prisma.svg', category: 'Backend', blurb: 'ORM type-safe para modelar e consultar dados.' },
    { name: 'PostgreSQL', icon: '/SVGs/postgresql.svg', category: 'Backend', blurb: 'Banco relacional robusto e estruturado.' },
    { name: 'Google Cloud', icon: '/SVGs/google-cloude.svg', category: 'Infra', blurb: 'Deploy e infraestrutura escalável na nuvem.' },
    { name: 'Postman', icon: '/SVGs/postman.svg', category: 'Tools', blurb: 'Testes e documentação de endpoints de API.' },
    { name: 'Git', icon: '/SVGs/git.svg', category: 'Tools', blurb: 'Versionamento e colaboração no código.' },
    { name: 'Linux', icon: '/SVGs/linux.svg', category: 'Tools', blurb: 'Terminal e ambiente de desenvolvimento.' },
]

const categoryColor: Record<Category, string> = {
    Frontend: 'text-blue-600 bg-blue-50 border-blue-200',
    Backend: 'text-violet-600 bg-violet-50 border-violet-200',
    Infra: 'text-amber-600 bg-amber-50 border-amber-200',
    Tools: 'text-emerald-600 bg-emerald-50 border-emerald-200',
}

const floatCols = [
    { items: skills.slice(0, 5), duration: 26, reverse: false },
    { items: skills.slice(5, 10), duration: 32, reverse: true },
    { items: skills.slice(10, 15), duration: 22, reverse: false },
    { items: skills.slice(2, 7), duration: 28, reverse: true },
    { items: skills.slice(7, 12), duration: 30, reverse: false },
]

export default function Skills() {
    return (
        <section id='habilidades' className={`relative flex flex-col items-center bg-[#171330] overflow-hidden  relative overflow-hidden h-full before:absolute before:inset-0 before:bg-[linear-gradient(rgba(23,19,48,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,19,48,0.03)_1px,transparent_1px)] before:bg-[size:50px_50px] before:pointer-events-none ${Mono.className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFFFFF" fillOpacity="1" d="M0,160L34.3,186.7C68.6,213,137,267,206,245.3C274.3,224,343,128,411,128C480,128,549,224,617,224C685.7,224,754,128,823,101.3C891.4,75,960,117,1029,160C1097.1,203,1166,245,1234,218.7C1302.9,192,1371,96,1406,48L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
            
            <div className="relative  flex flex-col items-center text-center px-4" data-aos="fade-up">
                <span className={`text-[#22d3ee]/60 text-xs tracking-[0.4em] uppercase mb-4 ${Exo.className}`}>
                    // stack &amp; ferramentas
                </span>

                <div className="flex items-center gap-4">
                    <div className="w-10 sm:w-12 h-[2px] bg-[#ffd401]" />

                    <h2 className={`text-white sm:text-9xl text-5xl ${BebasN.className}`}>
                        Habilidades<span className="text-[#ffd401]">.</span>
                    </h2>

                    <div className="w-10 sm:w-12 h-[2px] bg-[#ffd401]" />
                </div>

                <p className={`text-[#22d3ee]/60 text-sm mt-3 tracking-widest uppercase ${Exo.className}`}>
                    Tecnologias que utilizo para criar aplicações modernas.
                </p>
            </div>

            <div className="relative mt-16 w-full max-w-[1700px] px-4">
                <div className="pointer-events-none absolute inset-0 flex justify-between gap-4 px-4 opacity-[0.5]">
                    {floatCols.map((col, ci) => (
                        <div key={ci} className="relative flex-1">
                            <div className={`flex flex-col gap-10 ${col.reverse ? 'animate-float-up-rev' : 'animate-float-up'}`} style={{ animationDuration: `${col.duration}s` }}
>
                                {[...col.items, ...col.items].map((skill, i) => (
                                    <img key={i} src={skill.icon} alt='' className="h-10 w-10 mx-auto grayscale opacity-20 object-contain" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
                    {skills.map((skill, i) => (
                        <li
                            key={skill.name}
                            data-aos="fade-up"
                            data-aos-delay={(i % 8) * 60}
                            className="group relative flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 min-h-[270px] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_-10px_rgba(34,211,238,0.25)]"
                        >
                            <span className="absolute inset-0 rounded-3xl overflow-hidden">
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                            </span>

                            <span className={`absolute top-5 right-5 text-[9px] font-semibold uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border ${categoryColor[skill.category]}`}>
                                {skill.category}
                            </span>

                            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/10 to-violet-500/10 border border-white/10 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 mt-2">
                                <div className="relative h-11 w-11">
                                    <Image src={skill.icon} alt={`Ícone ${skill.name}`} fill className="object-contain" />
                                </div>
                            </div>

                            <h3 className="relative z-10 mt-6 text-base font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                                {skill.name}
                            </h3>

                            <p className="relative z-10 mt-2.5 text-[13px] leading-relaxed text-slate-400">
                                {skill.blurb}
                            </p>

                            <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-400 transition-all duration-500 group-hover:w-2/3" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
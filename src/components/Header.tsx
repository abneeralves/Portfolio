import { Anton } from 'next/font/google'

const anton = Anton({
    subsets: ['latin'],
    weight: '400',
})

const NAME = ['ABNER', 'ALVES', 'MUNIZ']
const PROFESSION = ['FULL', 'STACK', 'DEV']

const LETTER_CLASS = `
    text-9xl
    lg:text-[11rem]
    2xl:text-[14rem]
    tracking-widest
    duration-300
    ease-in-out
    hover:-translate-y-2
    hover:text-[#ffd401]
    hover:cursor-pointer
`

type WordProps = {
    word: string
    highlight?: boolean
    animate?: boolean
    className?: string
}

function Word({ word, highlight = false, animate = false, className = '' }: WordProps) {
    return (
        <div className="flex">
            {word.split('').map((letter, index) => (
                <p
                    key={`${word}-${index}`}
                    className={`
                        ${anton.className}
                        ${LETTER_CLASS}
                        ${highlight ? 'text-[#ffd401]' : 'outline-name'}
                        ${animate ? 'auto-hover' : ''}
                        ${className}
                    `}
                    style={animate ? { animationDelay: `${index}s` } : undefined}
                >
                    {letter}
                </p>
            ))}
        </div>
    )
}

export default function Header() {
    return (
        <header id="inicio" className="relative h-screen overflow-hidden bg-[#171330]">
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="pointer-events-none absolute bottom-0 left-0 z-0 h-[72vh] w-full"
            >
                <path
                    fill="#FFFFFF"
                    fillOpacity="1"
                    d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,234.7C672,203,768,117,864,96C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>

            <div
                className="relative z-10 flex h-full w-full items-center justify-center"
                data-aos="fade-right"
            >
                <div className="mt-28 md:flex xl:hidden">
                    <div>
                        <Word word={NAME[0]} animate />
                        <Word word={NAME[1]} />
                        <Word word={NAME[2]} />
                    </div>
                    <div>
                        <Word word="DEV" highlight />
                        <Word word={PROFESSION[0]} highlight />
                        <Word word={PROFESSION[1]} highlight />
                    </div>
                </div>

                <div className="hidden xl:flex">
                    <div>
                        <Word word={NAME[0]} highlight animate />
                        <Word word={NAME[1]} />
                        <Word word={NAME[2]} />
                    </div>
                    <div className="ml-20">
                        <Word word={PROFESSION[2]} />
                        <Word word={PROFESSION[0]} />
                        <Word word={PROFESSION[1]} highlight animate className="tracking-[0.5rem]" />
                    </div>
                </div>
            </div>

            {/* Indicador de rolagem */}
            <a
                href="#sobre"
                aria-label="Rolar para a próxima seção"
                className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-[#171330]"
            >
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="scroll-arrow h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </a>

            <style>{`
                .scroll-arrow {
                    animation: scroll-arrow 2s ease-in-out infinite;
                }
                @keyframes scroll-arrow {
                    0%, 100% { transform: translateY(0); opacity: 0.4; }
                    50%      { transform: translateY(8px); opacity: 1; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .scroll-arrow { animation: none; }
                }
            `}</style>
        </header>
    )
}
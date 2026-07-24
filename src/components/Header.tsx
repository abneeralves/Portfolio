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

function StarsLayers() {
    return (
        <>
            <div
                aria-hidden="true"
                className="stars-layer stars-small pointer-events-none absolute inset-0"
            />
            <div
                aria-hidden="true"
                className="stars-layer stars-medium pointer-events-none absolute inset-0"
            />
            <div
                aria-hidden="true"
                className="stars-layer stars-large pointer-events-none absolute inset-0"
            />
        </>
    )
}

function GlowBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd401]/[0.025] blur-[140px]"
        />
    )
}

function EdgeVignette() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(8,5,25,0.65)_100%)]"
        />
    )
}

function ScrollIndicator() {
    return (
        <a
            href="#sobre"
            aria-label="Ir para a próxima seção"
            className="group absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        >
            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/40 transition-colors duration-300 group-hover:text-white">
                Scroll
            </span>
            <span className="relative h-12 w-px overflow-hidden bg-white/20">
                <span className="scroll-indicator absolute left-0 top-0 h-5 w-full bg-[#ffd401]" />
            </span>
        </a>
    )
}

export default function Header() {
    return (
        <header id="inicio" className="relative h-screen overflow-hidden bg-[#171330]">
            <StarsLayers />
            <GlowBackground />
            <EdgeVignette />

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

            <ScrollIndicator />
        </header>
    )
}
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
        <header id="inicio" className="relative h-screen overflow-hidden">
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
        </header>
    )
}
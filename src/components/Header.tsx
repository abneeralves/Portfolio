'use client'

import { useRef } from 'react'
import type { PointerEvent, ReactNode } from 'react'
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from 'motion/react'
import { Anton } from 'next/font/google'

const anton = Anton({
    subsets: ['latin'],
    weight: '400',
})

const NAME = ['ABNER', 'ALVES', 'MUNIZ']
const PROFESSION = ['FULL', 'STACK', 'DEV']

const TYPING_ORDER = [NAME[0], NAME[1], NAME[2], PROFESSION[2], PROFESSION[0], PROFESSION[1]]

const WORD_START = TYPING_ORDER.reduce<number[]>((acc, word, index) => {
    acc.push(index === 0 ? 0 : acc[index - 1] + TYPING_ORDER[index - 1].length)
    return acc
}, [])

const TOTAL_LETTERS = TYPING_ORDER.reduce((sum, word) => sum + word.length, 0)

const startOf = (word: string) => WORD_START[TYPING_ORDER.indexOf(word)]

const TYPING_DELAY = 0.7
const TYPING_STEP = 0.09
const TILT_DEGREES = 4

const LETTER_CLASS = `
    hero-letter
    relative
    tracking-widest
    transition-colors
    duration-300
    ease-in-out
    hover:text-[#ffd401]
    hover:cursor-pointer
`

const TRAFFIC_LIGHTS = [
    { label: 'Fechar', color: '#ff5f57' },
    { label: 'Minimizar', color: '#febc2e' },
    { label: 'Maximizar', color: '#28c840' },
]

type MacWindowProps = {
    children: ReactNode
    className?: string
    bodyClassName?: string
}

function MacWindow({ children, className = '', bodyClassName = '' }: MacWindowProps) {
    return (
        <div
            className={`
                w-full
                max-w-[120rem]
                overflow-hidden
                rounded-3xl
                border
                border-white/15
                bg-[#171330]
                shadow-2xl
                shadow-black/60
                ring-1
                ring-black/40
                ${className}
            `}
        >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
                {TRAFFIC_LIGHTS.map(({ label, color }) => (
                    <motion.span
                        key={label}
                        title={label}
                        aria-hidden="true"
                        className="block h-3 w-3 rounded-full"
                        style={{ backgroundColor: color }}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    />
                ))}
            </div>

            <div className={`p-5 md:p-8 xl:p-10 ${bodyClassName}`}>{children}</div>
        </div>
    )
}

type WordProps = {
    word: string
    reduceMotion: boolean
    highlight?: boolean
    animate?: boolean
    className?: string
}

function Word({
    word,
    reduceMotion,
    highlight = false,
    animate = false,
    className = '',
}: WordProps) {
    const start = startOf(word)

    return (
        <div className="flex" aria-label={word}>
            {word.split('').map((letter, index) => {
                const position = start + index
                const delay = TYPING_DELAY + position * TYPING_STEP
                const isLast = position === TOTAL_LETTERS - 1

                return (
                    <motion.p
                        key={`${word}-${index}`}
                        aria-hidden="true"
                        className={`
                            ${anton.className}
                            ${LETTER_CLASS}
                            ${highlight ? 'text-[#ffd401]' : 'outline-name'}
                            ${animate ? 'auto-hover' : ''}
                            ${className}
                        `}
                        style={animate ? { animationDelay: `${index}s` } : undefined}
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.05, delay }}
                        whileHover={reduceMotion ? undefined : { y: -8 }}
                    >
                        {letter}

                        {!reduceMotion && (
                            <motion.span
                                aria-hidden="true"
                                className="pointer-events-none absolute right-[-0.04em] top-[10%] h-[78%] w-[0.07em] bg-[#ffd401]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isLast ? [1, 0] : [0, 1, 1, 0] }}
                                transition={
                                    isLast
                                        ? {
                                              delay,
                                              duration: 0.45,
                                              repeat: 4,
                                              repeatType: 'reverse',
                                              ease: 'linear',
                                          }
                                        : {
                                              delay,
                                              duration: TYPING_STEP,
                                              times: [0, 0.01, 0.99, 1],
                                              ease: 'linear',
                                          }
                                }
                            />
                        )}
                    </motion.p>
                )
            })}
        </div>
    )
}

export default function Header() {
    const ref = useRef<HTMLElement>(null)
    const reduceMotion = Boolean(useReducedMotion())

    const pointerX = useMotionValue(0)
    const pointerY = useMotionValue(0)
    const smoothX = useSpring(pointerX, { stiffness: 120, damping: 20 })
    const smoothY = useSpring(pointerY, { stiffness: 120, damping: 20 })
    const rotateY = useTransform(smoothX, [-0.5, 0.5], [-TILT_DEGREES, TILT_DEGREES])
    const rotateX = useTransform(smoothY, [-0.5, 0.5], [TILT_DEGREES - 1, -(TILT_DEGREES - 1)])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })
    const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])
    const scrollY = useTransform(scrollYProgress, [0, 1], [0, 80])

    function handlePointerMove(event: PointerEvent<HTMLElement>) {
        if (reduceMotion || event.pointerType !== 'mouse') return

        const rect = event.currentTarget.getBoundingClientRect()
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
    }

    function handlePointerLeave() {
        pointerX.set(0)
        pointerY.set(0)
    }

    return (
        <header
            id="inicio"
            ref={ref}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#171330]"
        >
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="pointer-events-none absolute bottom-0 left-0 z-0 h-[72vh] w-full"
            >
                <path
                    fill="#171330"
                    d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,234.7C672,203,768,117,864,96C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,320L0,320Z"
                />
            </svg>

            <motion.div
                className="relative z-10 flex w-full justify-center px-4 pb-8 pt-24 sm:px-6 lg:px-10"
                style={reduceMotion ? undefined : { scale: scrollScale, opacity: scrollOpacity, y: scrollY }}
            >
                <motion.div
                    className="flex w-full justify-center"
                    style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1400 }}
                    initial={reduceMotion ? false : { opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 70, damping: 16, mass: 0.9 }}
                >
                    <MacWindow
                        className="xl:hidden"
                        bodyClassName="flex flex-col items-center md:flex-row md:justify-center md:gap-8"
                    >
                        <div>
                            <Word word={NAME[0]} reduceMotion={reduceMotion} animate />
                            <Word word={NAME[1]} reduceMotion={reduceMotion} />
                            <Word word={NAME[2]} reduceMotion={reduceMotion} />
                        </div>
                        <div>
                            <Word word={PROFESSION[2]} reduceMotion={reduceMotion} highlight />
                            <Word word={PROFESSION[0]} reduceMotion={reduceMotion} highlight />
                            <Word word={PROFESSION[1]} reduceMotion={reduceMotion} highlight />
                        </div>
                    </MacWindow>

                    <MacWindow className="hidden xl:block" bodyClassName="flex justify-center">
                        <div>
                            <Word word={NAME[0]} reduceMotion={reduceMotion} highlight animate />
                            <Word word={NAME[1]} reduceMotion={reduceMotion} />
                            <Word word={NAME[2]} reduceMotion={reduceMotion} />
                        </div>
                        <div className="ml-24">
                            <Word word={PROFESSION[2]} reduceMotion={reduceMotion} />
                            <Word word={PROFESSION[0]} reduceMotion={reduceMotion} />
                            <Word
                                word={PROFESSION[1]}
                                reduceMotion={reduceMotion}
                                highlight
                                animate
                                className="tracking-[0.5rem]"
                            />
                        </div>
                    </MacWindow>
                </motion.div>
            </motion.div>
        </header>
    )
}
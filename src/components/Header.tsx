'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
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
import { ArrowDown, ArrowUpRight } from 'lucide-react'

const anton = Anton({
    subsets: ['latin'],
    weight: '400',
})

const NAME = ['ABNER', 'ALVES', 'MUNIZ']
const PROFESSION = ['DEV', 'FULL', 'STACK']
const FULL_NAME = 'Abner Alves Muniz'
const ROLE = 'Desenvolvedor Full Stack'
const WINDOW_TITLE = 'portfolio'
const CITY = 'São Paulo'
const TIME_ZONE = 'America/Sao_Paulo'
const STACK_LINE = 'Next.js, React, TypeScript, Node.js'
const TYPING_ORDER = [...NAME, ...PROFESSION]
const TYPING_DELAY = 0.4
const TYPING_STEP = 0.06
const TILT_DEGREES = 4
const TOTAL_LETTERS = TYPING_ORDER.reduce((sum, word) => sum + word.length, 0)

const WORD_START: Record<string, number> = {}
TYPING_ORDER.reduce((offset, word) => {
    WORD_START[word] = offset
    return offset + word.length
}, 0)

type Tone = 'fill' | 'outline'

type LayoutConfig = {
    tones: Record<string, Tone>
    autoHover: string[]
    bodyClassName: string
    professionClassName: string
    scrollArrowClassName: string
}

const MOBILE_LAYOUT: LayoutConfig = {
    tones: {
        ABNER: 'outline',
        ALVES: 'outline',
        MUNIZ: 'outline',
        DEV: 'fill',
        FULL: 'fill',
        STACK: 'fill',
    },
    autoHover: ['ABNER'],
    bodyClassName:
        'flex flex-col items-center pb-16 sm:pb-16 md:flex-row md:justify-center md:gap-8 md:pb-16',
    professionClassName: '',
    scrollArrowClassName: 'absolute bottom-3 right-3 sm:right-5',
}

const DESKTOP_LAYOUT: LayoutConfig = {
    tones: {
        ABNER: 'fill',
        ALVES: 'outline',
        MUNIZ: 'outline',
        DEV: 'outline',
        FULL: 'outline',
        STACK: 'fill',
    },
    autoHover: ['ABNER', 'STACK'],
    bodyClassName: 'flex justify-center',
    professionClassName: 'ml-24',
    scrollArrowClassName: 'absolute bottom-16 right-10',
}

const DESKTOP_QUERY = '(min-width: 1280px)'

function subscribeToDesktop(onChange: () => void) {
    const media = window.matchMedia(DESKTOP_QUERY)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
}

function useIsDesktop() {
    return useSyncExternalStore(
        subscribeToDesktop,
        () => window.matchMedia(DESKTOP_QUERY).matches,
        () => false,
    )
}

const LETTER_CLASS = `
    hero-letter
    pointer-events-auto
    relative
    mr-[0.1em]
    last:mr-0
    cursor-default
    transition-colors
    duration-300
    ease-in-out
    hover:text-[#ffd401]
`

const SYSTEM_FONT =
    "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif"

const FOCUS_RING =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd401]'

const TRAFFIC_LIGHTS = [
    { label: 'Fechar', color: '#ff5f57' },
    { label: 'Minimizar', color: '#febc2e' },
    { label: 'Maximizar', color: '#28c840' },
]

const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: TIME_ZONE,
})

function Clock() {
    const [time, setTime] = useState('')

    useEffect(() => {
        const update = () => setTime(timeFormatter.format(new Date()))

        update()
        const id = setInterval(update, 15000)
        return () => clearInterval(id)
    }, [])

    return <span className="inline-block min-w-[2.5rem] text-right tabular-nums">{time}</span>
}

function ScrollArrow({ className = '' }: { className?: string }) {
    return (
        <a
            href="#sobre"
            aria-label="Rolar para a próxima seção"
            className={`pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:border-[#ffd401] hover:text-[#ffd401] ${FOCUS_RING} ${className}`}
        >
            <ArrowDown
                aria-hidden="true"
                className="h-4 w-4 animate-bounce motion-reduce:animate-none"
            />
        </a>
    )
}

type MacWindowProps = {
    children: ReactNode
    footer?: ReactNode
    className?: string
    bodyClassName?: string
}

function MacWindow({ children, footer, className = '', bodyClassName = '' }: MacWindowProps) {
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
            <div className="relative flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
                <div className="relative z-10 flex items-center gap-2">
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

                <div className="pointer-events-none absolute inset-x-0 flex justify-center">
                    <span
                        className="select-none rounded-full border border-white/15 bg-white/[0.06] px-4 py-1 text-[13px] font-semibold leading-none tracking-[-0.01em] text-white/70 backdrop-blur-sm"
                        style={{ fontFamily: SYSTEM_FONT }}
                    >
                        {WINDOW_TITLE}
                    </span>
                </div>

                <div
                    className="relative z-10 inline-flex select-none items-center gap-2 px-2 py-1 text-xs text-white/60"
                    style={{ fontFamily: SYSTEM_FONT }}
                >
                    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28c840] opacity-60 motion-reduce:animate-none" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                    </span>
                    <span className="hidden sm:inline">{CITY}</span>
                    <Clock />
                </div>
            </div>

            <div
                className={`pointer-events-none relative p-4 sm:p-5 md:p-8 xl:p-10 ${bodyClassName}`}
            >
                {children}
            </div>

            {footer}
        </div>
    )
}

function StatusBar() {
    return (
        <div
            className="pointer-events-none flex select-none items-center justify-between gap-4 border-t border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60"
            style={{ fontFamily: SYSTEM_FONT }}
        >
            <span className="truncate">{STACK_LINE}</span>

            <a
                href="#projetos"
                className={`group pointer-events-auto inline-flex shrink-0 items-center gap-1.5 text-white/80 transition-colors hover:text-[#ffd401] ${FOCUS_RING}`}
            >
                Ver projetos
                <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                />
            </a>
        </div>
    )
}

type WordProps = {
    word: string
    tone: Tone
    reduceMotion: boolean
    autoHover?: boolean
}

function Word({ word, tone, reduceMotion, autoHover = false }: WordProps) {
    const start = WORD_START[word]

    return (
        <div className="flex" aria-hidden="true">
            {word.split('').map((letter, index) => {
                const position = start + index
                const delay = TYPING_DELAY + position * TYPING_STEP
                const isLast = position === TOTAL_LETTERS - 1

                return (
                    <motion.p
                        key={`${word}-${index}`}
                        className={`
                            ${anton.className}
                            ${LETTER_CLASS}
                            ${tone === 'fill' ? 'text-[#ffd401]' : 'outline-name'}
                            ${autoHover && !reduceMotion ? 'auto-hover' : ''}
                        `}
                        style={autoHover && !reduceMotion ? { animationDelay: `${index}s` } : undefined}
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.05, delay }}
                        whileHover={reduceMotion ? undefined : { y: -8 }}
                    >
                        {letter}

                        {!reduceMotion && (
                            <motion.span
                                className="pointer-events-none absolute right-[-0.14em] top-[10%] h-[78%] w-[0.07em] bg-[#ffd401]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isLast ? [1, 1, 0, 0] : [0, 1, 1, 0] }}
                                transition={
                                    isLast
                                        ? {
                                            delay,
                                            duration: 1,
                                            times: [0, 0.5, 0.5, 1],
                                            repeat: Infinity,
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

export default function Hero() {
    const ref = useRef<HTMLElement>(null)
    const reduceMotion = Boolean(useReducedMotion())
    const isDesktop = useIsDesktop()
    const layout = isDesktop ? DESKTOP_LAYOUT : MOBILE_LAYOUT

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
        <section
            id="inicio"
            ref={ref}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#171330]"
        >
            <h1 className="sr-only">
                {FULL_NAME}, {ROLE}
            </h1>

            <motion.div
                className="relative z-10 flex w-full justify-center px-3 pb-8 pt-20 sm:px-6 sm:pt-24 lg:px-10"
                style={
                    reduceMotion
                        ? undefined
                        : { scale: scrollScale, opacity: scrollOpacity, y: scrollY }
                }
            >
                <motion.div
                    className="flex w-full justify-center"
                    style={
                        reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1400 }
                    }
                    initial={reduceMotion ? false : { opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 70, damping: 16, mass: 0.9 }}
                >
                    <MacWindow bodyClassName={layout.bodyClassName} footer={<StatusBar />}>
                        <div>
                            {NAME.map((word) => (
                                <Word
                                    key={word}
                                    word={word}
                                    tone={layout.tones[word]}
                                    reduceMotion={reduceMotion}
                                    autoHover={layout.autoHover.includes(word)}
                                />
                            ))}
                        </div>

                        <div className={layout.professionClassName}>
                            {PROFESSION.map((word) => (
                                <Word
                                    key={word}
                                    word={word}
                                    tone={layout.tones[word]}
                                    reduceMotion={reduceMotion}
                                    autoHover={layout.autoHover.includes(word)}
                                />
                            ))}
                        </div>

                        <ScrollArrow className={layout.scrollArrowClassName} />
                    </MacWindow>
                </motion.div>
            </motion.div>
        </section>
    )
}
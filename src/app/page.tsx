import dynamic from 'next/dynamic'

import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Habilidades from '@/components/Skills'

const AOSInit = dynamic(() => import('@/components/AOSInit'), {
    ssr: false,
})

const Footer = dynamic(() => import('@/components/Footer'), {
    ssr: false,
})

function StarsLayers() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
            <div className="stars-layer stars-small absolute inset-0" />
            <div className="stars-layer stars-medium absolute inset-0" />
            <div className="stars-layer stars-large absolute inset-0" />
        </div>
    )
}

function EdgeVignette() {
    return (
        <div
            aria-hidden="true"
            className="
                pointer-events-none
                absolute
                inset-0
                z-[1]
                bg-[radial-gradient(circle_at_center,transparent_40%,rgba(8,5,25,0.65)_100%)]
            "
        />
    )
}

function ScrollIndicator() {
    return (
        <a
            href="#sobre"
            aria-label="Ir para a próxima seção"
            className="
                group
                absolute
                bottom-3
                left-1/2
                z-30
                flex
                -translate-x-1/2
                flex-col
                items-center
                gap-2
            "
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

export default function Home() {
    return (
        <>
            <AOSInit />

            <Navbar />

            {/* As estrelas aparecem apenas no Header e no Main */}
            <section className="relative isolate overflow-hidden bg-[#171330]">
                <StarsLayers />

                <EdgeVignette />

                {/* Header */}
                <div className="relative z-10">
                    <Header />

                    <ScrollIndicator />
                </div>

                {/* Main */}
                <div className="relative z-10">
                    <Main />
                </div>
            </section>

            {/* Seções sem estrelas */}
            <Projects />

            <Experience />

            <Habilidades />

            <Footer />
        </>
    )
}
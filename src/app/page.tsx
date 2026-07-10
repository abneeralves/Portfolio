import dynamic from 'next/dynamic'
import Navbar from "@/components/Navbar"
import Header from "@/components/Header"
import Main from "@/components/Main"
import Projects from '@/components/Projects'
import Experience from "@/components/Experience"
import Habilidades from "@/components/Skills"

const AOSInit = dynamic(() => import('@/components/AOSInit'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  return (
    <>
      <AOSInit />
      <Navbar />
      <Header />
      <Main />
      <Projects />
      <Experience />
      <Habilidades />
      <Footer />
    </>
  )
}

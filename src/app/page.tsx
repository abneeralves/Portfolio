'use client'
import Header from "@/components/Header"
import Main from "@/components/Main"
import Projects from '@/components/Projects'
import Experience from "@/components/Experience"
import Habilidades from "@/components/Skills"
import Footer from "@/components/Footer"

import { useEffect } from "react"
import AOS from 'aos'


export default function Home() {

  useEffect(() => {
    AOS.init({
        duration: 1500,
    })
  })

  return (
    <>
      <Header data-aos="fade-up"/>
      <Main />
      <Projects />
      <Experience />
      <Habilidades />
      <Footer />
    </>
      
  )
}

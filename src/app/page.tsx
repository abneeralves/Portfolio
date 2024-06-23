'use client'
import Header from "@/components/Header"
import Main from "@/components/Main"
import Projetos from '@/components/Projetos'
import Habilidades from "@/components/Skills"
import Footer from "@/components/Footer"

import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

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
      <Projetos />
      <Habilidades />
      <Footer />
    </>
      
  )
}

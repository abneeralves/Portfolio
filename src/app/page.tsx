import Header from "@/components/Header"
import Main from "@/components/Main"
import Projetos from '@/components/Projetos'
import Skill from "@/components/Skills"

export default function Home() {
  return (
    <div className="scroll">
      <div className="">
        <Header />
      </div>

      <div className="">
        <Main />
      </div>

      <div className="">
        <Projetos />
      </div>

      <div className="">
        <Skill />
      </div>
    </div>

  )
}

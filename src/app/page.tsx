import Header from "@/components/Header"
import Main from "@/components/Main"
import Projetos from '@/components/Projetos'
import Skill from "@/components/Skills"

export default function Home() {
  return (
    <div className="scroll">
      <div className="section">
        <Header />
      </div>

      <div className="section">
        <Main />
      </div>

      <div className="section">
        <Projetos />
      </div>

      <div className="section">
        <Skill />
      </div>
    </div>

  )
}

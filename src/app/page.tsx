import Header from "@/components/Header"
import Main from "@/components/Main"

export default function Home() {
  return (
    <div className="scroll">
      <div className="section">
        <Header />
      </div>

      <div className="section">
        <Main />
      </div>
    </div>

  )
}

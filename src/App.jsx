import { Header } from "./Components/Layout/Header/Header"
import { News } from "./Components/Layout/News/News"
import { Main } from "./Components/Main/Main"
import { Home } from "./Components/Pages/Home/Home"


function App() {
  

  return (
    <>
    <Home>
      <Header></Header>
    <Main>
      <News>
      <h1>Hola</h1>
      <p>Como estas?</p>
      </News>
      
    </Main>
    </Home>
 
  </>
  )
}

export default App

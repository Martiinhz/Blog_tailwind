import { Header } from "./Components/Layout/Header/Header"
import { News } from "./Components/Layout/News/News"
import { Section } from "./Components/Layout/Section/Section"
import { Main } from "./Components/Main/Main"
import { Home } from "./Components/Pages/Home/Home"
import image from './assets/img1.jpg'
import { Card } from "./Components/Card/Card"
import { extras } from "./Components/scripts/Lista/Lista"


function App() {
  return (
    <>
      <Home>
        <Header></Header>
        <Main>
          <News>
            <div className="shadow-2xl bg-white">
            <img src={image} alt="" />
            <h2>17/04/2024</h2>
            <h1>Titulo de la noticía</h1>
            <p>Barcelona ya tendría listo el reemplazo de Xavi: sería un mexicano.</p>
            </div>
          </News>
          <Section>
            <div>
            {extras.map(item => (
              <Card 
                key={item._id}
                img={item.img}
                description={item.description}
                date={item.date}
              />
            ))}
            </div>

          </Section>
        </Main>
      </Home>
    </>
  )
}

export default App

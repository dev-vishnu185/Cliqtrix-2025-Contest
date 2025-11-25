import './App.css'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { Products } from './components/product/Products'
import { Guides } from './components/guide/Guides'
import { About } from './components/about/About'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <div className="grid-container">
      <Header className="header" />

      <main className="main-content">
        <Home />
        <Products />
        <Guides />
        <About />
      </main>

      <Footer className="footer" />

    </div>
  )

}

export default App

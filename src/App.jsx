import './App.scss'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'
import HeroSection from './components/heroSection/HeroSection'
import MainCard from './components/main-card/MainCard'
import Navbar from './components/navbar/Navbar'
import NewsLetter from './components/newsletter/NewsLetter'

function App() {
 

  return (
    <>
     <main>
       <Navbar />
       <div className='app-container'>
       <HeroSection />
       <MainCard /> 
       <Card />
       <NewsLetter />
       </div>
       <Footer />
     </main>
    </>
  )
}

export default App

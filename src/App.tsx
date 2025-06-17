import Gameboard from './components/Gameboard'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './App.css'

function App() {

  return (
    <div className='min-h-screen min-w-screen'>
      <Header/>
      <Gameboard/>
      <Footer/> 
    </div>
  )
}

export default App

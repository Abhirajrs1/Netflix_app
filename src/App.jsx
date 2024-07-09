import NavBar from './components/NavBar/NavBar'
import {orginals,action} from './urls'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'

function App() {
  

  return (
    <>
     <NavBar/>
     <Banner/>
     <RowPost url={orginals} title="Netflix Orginals"/>
     <RowPost url={action} title="Action" isSmall/>

    </>
  )
}

export default App

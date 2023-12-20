import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import StorePage from './Components/StorePage'

function App() {
  return (
    <>
    <div className="app">
    <Router>
      <Routes>
        <Route path='/' element={ <StorePage />} />
      </Routes>
    </Router>
      
       
      </div>

    </>
  )
}

export default App

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from "./routes/Router"

function App() {
  //const [count, setCount] = useState(0)
  

  

  return (
    <>
      
      <BrowserRouter basename="/EWAP000W">
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App

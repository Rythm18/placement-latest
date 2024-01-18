import './App.css'
import { LandingPage } from './components/Landing/LandingPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}




export default App

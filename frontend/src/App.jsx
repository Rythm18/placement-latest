import './App.css'
import { LandingPage } from './components/Landing/LandingPage';
import { Student } from './components/Student-Dashboard/Student';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import {Applied} from './components/Student-Dashboard/applied';
import {Dashboard} from './components/Student-Dashboard/dashboard';
import {Update} from './components/Student-Dashboard/update';
import {FeedBack} from './components/Student-Dashboard/feedback';
import {Logout} from './components/Student-Dashboard/logout';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/dashboard" element={<Dashboard />} />
            <Route path="/student/Update" element={<Update />} />
            <Route path="/student/Applied" element={<Applied />} />
            <Route path="/student/FeedBack" element={<FeedBack />} />
            <Route path="/student/Logout" element={<Logout />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}




export default App

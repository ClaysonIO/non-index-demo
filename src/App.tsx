import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import './App.css'
import RootPage from "./components/RootPage.tsx";

function App() {
  return (
    <BrowserRouter basename={'/app'}>
      <div>
        <Navbar />
        <main style={{ padding: '0 1rem' }}>
          <Routes>
            <Route path="/" element={<RootPage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

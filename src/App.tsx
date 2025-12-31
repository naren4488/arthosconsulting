import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Toaster
        position="top-center"
        richColors
        closeButton
      />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App


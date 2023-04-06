import { Route, Routes } from 'react-router-dom'
import './App.css'
import DateInputCard from './DateInputCard'
import CompletionCard from './CompletionCard'
import LoginCard from './LoginCard'

function App() {
  return (
    <Routes>
      <Route path="/date" element={<DateInputCard/>} />
      <Route path="/finish" element={<CompletionCard/>} />
      <Route path='' element={<LoginCard/>} />
    </Routes>
  )
}

export default App

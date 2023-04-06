import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import DateInputCard from './DateInputCard'
import CompletionCard from './CompletionCard'
import LoginCard from './LoginCard'
import "./card.css"
import { useEffect, useState } from 'react'

function App() {
  const [width, setWidth] = useState("25rem")
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/date") {
      setWidth("30rem")
    } else if(location.pathname === "/finish") {
      setWidth("35rem")
    }
  }, [location])


    return (
      <div className="card p-5" style={{ width: width }}>
        <Routes>
          <Route path='' element={<LoginCard />} />
          <Route path="/date" element={<DateInputCard />} />
          <Route path="/finish" element={<CompletionCard />} />
        </Routes>
      </div>
    )
  }

  export default App

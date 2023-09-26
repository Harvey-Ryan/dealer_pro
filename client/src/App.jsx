import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Redirect } from'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar /> {/* TODO */}
        <h1>TEST ROUTING</h1>
        <Route exact path="/" element={<Dashboard />} /> {/* TODO: UPDATE TO LOGIN ONCE CREATED */}
        {/* <PrivateRoute path="/hidden" component={Hidden} /> */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* TODO */}
        <Route exact path="/tradesheet" element={<Tradesheet />} /> {/* TODO */}
        <Route path="/tradesheet/:id" element={<Tradesheet />} /> {/* TODO */}
        <Route path="*" element={NotFound} /> {/* TODO */}
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>ERROR 404</h1>
      <p>Page not found</p>
      <Link to="/">Return to Dashboard</Link>
    </div>
  )
  }

export default App

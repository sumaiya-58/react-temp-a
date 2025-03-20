
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes,Link ,Route} from 'react-router-dom'
import App1 from "./components/App1";
import App2 from "./components/App2";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Link to="app1">App1</Link>
      <Link to="app2">App2</Link>
    </div>
    <hr></hr>
    <div>
      <Routes>
        <Route index element={<App1/>}/>
        <Route path="app1" element={<App1/>}/>
        <Route path="app2" element={<App2/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App

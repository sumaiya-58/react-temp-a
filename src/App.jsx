
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { BrowserRouter, Routes,Link ,Route} from 'react-router-dom'
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
import App8 from "./components/App8";
import App9 from "./components/App9";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Link to="app1">App1|</Link>
      <Link to="app2">App2|</Link>
      <Link to="app3">App3|</Link>
      <Link to="app4">App4|</Link>
      <Link to="app5">App5|</Link>
      <Link to="app6">App6|</Link>
      <Link to="app7">App7</Link>
      <Link to="app8">App8</Link>
      <Link to="app9">App9</Link>
    </div>
    <hr></hr>
    <div>
      <Routes>
        <Route index element={<App1/>}/>
        <Route path="app1" element={<App1/>}/>
        <Route path="app2" element={<App2/>}/>
        <Route path="app3" element={<App3/>}/>
        <Route path="app4" element={<App4/>}/>
        <Route path="app5" element={<App5/>}/>
        <Route path="app6" element={<App6/>}/>
        <Route path="app7" element={<App7/>}/>
        <Route path="app8" element={<App8/>}/>
        <Route path="app9" element={<App9/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Index } from './pages/home/Index'
import ResponsiveAppBar from './components/home/ResponsiveAppBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col w-full h-full gap-2'>
      <ResponsiveAppBar/>
      <h>Job portal</h>
      <Index/>
    </div>
  )
}

export default App

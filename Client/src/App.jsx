import { Route, Routes } from 'react-router-dom'
import Landingview from "./views/Landingview/Landingview"
import Homeview from './views/Homeview/Homeview'

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<Landingview />} />
        <Route path="/home" element={<Homeview/>} />
      </Routes>
    </div>
  )
}

export default App

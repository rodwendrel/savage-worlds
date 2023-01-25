import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Hammer from './Sledgehammer';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sledge' element={<Hammer />} />
      </Routes>
    </div>
  )
}

export default App

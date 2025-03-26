import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstScreen  from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<FirstScreen />} />
          <Route path='/countdown' element={<SecondScreen />} />
          <Route path='/time-up' element={<ThirdScreen />} />
        </Routes>
    </Router>
  );
}

export default App

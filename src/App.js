import './App.css';
import Main from './Components/Main/Main';
import Section from './Components/Section/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Section />

    <Routes>
      <Route path='/button' element={<Main />} />
    </Routes>
    </div>
  );
}

export default App;

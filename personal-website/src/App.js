import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutMePage from './Pages/AboutMePage';
import MyWorkPage from './Pages/MyWorkPage';
import DocConPage from './Pages/DocConPage';
import NoPage from './Pages/NoPage';
import TestPage from './Pages/TestPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/About' element={<AboutMePage />} />
          <Route path='/Work&Projects' element={<MyWorkPage />} />
          <Route path='/Documentation&ContactInfo' element={<DocConPage />} />
          <Route path='/TestPage' element={<TestPage />}/>

          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

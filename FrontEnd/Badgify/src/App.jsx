import Layout from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/template/Home';
import Donate from './components/template/Donate';
import Developer from './components/template/Developer';
import Opensource from './components/template/Opensource';
import Badge from './components/template/Badge';
import Createbadge from './components/template/Createbadge';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/opensource" element={<Opensource />} />
            <Route path='/badge' element={<Badge/>}  />
            <Route path='/create' element={<Createbadge/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import './App.scss';
import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contacts/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='project' element={<Projects/>} />
          <Route path='contact' element={<Contact/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

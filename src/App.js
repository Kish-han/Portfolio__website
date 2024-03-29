import './App.css';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout'
import { AnimatePresence } from 'framer-motion';
function App() {

  const location = useLocation();

  return (
    <div className="App">
      {/* <div className='flex flex-col md:flex-row'> */}
      {/* <Sidebar /> */}
      <div className="bg-secondarycolor ">
        <AnimatePresence exitBeforeEnter >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              // <Route path="projects" element={<Projects />} />
              // <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;

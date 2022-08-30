import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='flex flex-col md:flex-row'>
        <Sidebar />
        <div className="bg-secondarycolor ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>


    </div>
  );
}

export default App;

import './App.css';
import { Education } from './components/Education';
import { Home } from './components/Home';
import {Navbar} from './components/Navbar';
import {Profile} from './components/Profile';
import { Project } from './components/Project';
import { SliderHabililty } from './components/SliderHabililty';
import {Footer} from './components/Footer'


function App() {
  return (
    <div className="App bg-light">
      <Navbar/>
     <Home/>
     <Profile/>
     <SliderHabililty/>
     <Education/>
     <Project/>
     <Footer/>
    </div>
  );
}

export default App;

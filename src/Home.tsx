import '../src/Styles/Main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Nav/Header";
import LeftSidePanel from "./Components/SideBar/LeftSidePanel";
import RightSidePanel from "./Components/SideBar/RightSidePanel";
import About from './Components/Body/About';
import Experience from './Components/Body/Experience';
import Projects from './Components/Body/Projects';
import Main from './Components/Body/Main';
import Contact from './Components/Body/Contact';

function BodyComp(props:any) {
  return (
    <div className="Home">
      <Header />
      <div className="Panel">
        <LeftSidePanel />
        <main className='Main_Content'>
            <props.comp />
        </main>
        <RightSidePanel />
      </div>
    </div>
  );
}

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<BodyComp comp={Main}/>} />
        <Route path='/about' element={<BodyComp comp={About} />}/>
        <Route path='/experience' element={<BodyComp comp={Experience} />}/>
        <Route path='/projects' element={<BodyComp comp={Projects} />}/>
        <Route path='/contact' element={<BodyComp comp={Contact} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;

import { Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Main from './components/Main';
import Nav from './components/Nav';
import Contribute from './Contribute_to_project'
import Discussions from './components/Discussions';
import Community from './components/Community';

function App() {
  return (
    <div className="App">
      <Nav/>
        <Intro/>
        <div className='center-card'>
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route exact path="/project" element={<Contribute/>}/>
            <Route exact path="/discussions" element={<Discussions/>}/>
            <Route exact path="/community" element={<Community/>}/>
        </Routes>
        <Footer className="main-footer"/>
        </div>
</div>
  );
}

export default App;

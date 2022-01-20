import { Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Main from './components/Main';
import Nav from './components/Nav';
import Contribute from './Contribute_to_project'
import X from './components/Contribute_card'
import Discussions from './components/Discussions';
import Workshop from './Workshop'
import Workshop_card from './components/Workshop_card'
import Commentbox from './components/Commentbox'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Intro />
      <div className='center-card'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              // <X obj={{'src':'https://lh3.googleusercontent.com/4MKDUPRidEZ7TQ9EIxeGAAm-DYkSWt04DkuJgajum7GogsRqJe63_yNEoLKDe5wMhon6scAHlPEu4r2O4kBNd3locxU-jD3sXezm3_dKkQY','title':'52°North GmbH',desc:'ia ma dsdds'}}/>
              <Commentbox />
            }
          />

          <Route exact path='/project' element={<Contribute />} />
          <Route exact path='/discussions' element={<Discussions />} />
        </Routes>
        {/* <Footer className="main-footer"/> */}
      </div>
    </div>
  )
}

export default App;

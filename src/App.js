import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Project from './components/pages/Project'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/company' Component={Company}/>
          <Route exact path='/contact' Component={Contact}/>
          <Route exact path='/newproject' Component={NewProject}/>  
          <Route exact path='/projects' Component={Projects}/>     
          <Route exact path='/project/:id' Component={Project}/>       
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

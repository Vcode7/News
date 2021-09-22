import './App.css';
import Nav from './components/Nav'
import News from './components/News'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import genNews from './components/newsdata/newsdata.json'
import sciNews from './components/newsdata/sciencedata.json'
import tecNews from './components/newsdata/tecdata.json'
import spoNews from './components/newsdata/sportsdata.json'
import healtNews from './components/newsdata/healtdata.json'
import enterNews from './components/newsdata/enterdata.json'
import busNews from './components/newsdata/businessdata.json'


function App() {

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/"><News data={genNews} /></Route>
          <Route exact path="/science"><News key="science" data={sciNews} /></Route>
          <Route exact path="/technology"><News key="tec" data={tecNews} /></Route>
          <Route exact path="/healt"><News key="healt" data={healtNews} /></Route>
          <Route exact path="/entertainment"><News key="entertainment" data={enterNews} /></Route>
          <Route exact path="/sports"><News key="sports" data={spoNews} /></Route>
          <Route exact path="/business"><News key="business" data={busNews} /></Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;

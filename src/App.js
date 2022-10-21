import './App.css';
import Header from "./Mycomponents/Header";
import Mainsection from './Mycomponents/Mainsection';
import Sidebar from './Mycomponents/Sidebar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Searchpage from './Mycomponents/Searchpage';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <div className="App_page">
        <Sidebar/>
          <Switch>
              <Route path="/search/:searchTerm">
                      <Searchpage/>
              </Route> 
              <Route  path ="/">
                  <Mainsection/>      
              </Route>      
          </Switch>
          </div>
       </Router>  

    </div>
  );
}



export default App;
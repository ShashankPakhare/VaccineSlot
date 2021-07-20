import './App.css';
import {Nevbar } from './Navbar';
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import { Corona } from './Corona';
function App() {
  
  return (
    <>
    <Router>
      <Nevbar></Nevbar>
      <Route exact path="/">
        
        <Corona/>
    </Route>
    </Router>
    </>
  );
}

export default App;

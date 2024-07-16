import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Navbar from './navbar';
import {BrowserRouter as Router, Routes,Route, Link,BrowserRouter} from 'react-router-dom' ;
import Login from './login';
import Home from './home';
import { About, Help, Service, User3 } from './all';
import Admin from './admin';

function App() {
  return (
    <div className="App">
     
 <BrowserRouter>
 <Navbar/>
   
{/* npx json-server -w -p 5000 ./db.json   */}

<Routes>

  

  <Route path='/' element={<Home />}></Route>
  <Route path='/login' element= {<Login />} ></Route>
  <Route path='/admin' element={<Admin />} ></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/help' element={<Help/>}></Route>
  <Route path='/service' element={<Service/>}></Route>
<Route path='/user3' element={<User3/>}></Route>
  <Route path='*' element= {<h1>404:Not found</h1>} ></Route> 

    
  
</Routes>


</BrowserRouter>

    </div>
  )
}
export default App;

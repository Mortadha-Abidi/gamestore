import './App.css';
import { SideBar } from './component/sidebar/SideBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {MainContainer} from './pages/MainContainer'
import { Products } from './pages/Products/Products';
import { Userlist } from './pages/Users/Userlist';
import { Login } from './component/sidebar/login/Login';
import { Register } from './component/sidebar/login/register/Register';


function App() {
 
  return (
  
     <div >
    
    <div className="App">
     
      
    

<Routes> 
  
       <Route exact path="/login" element={<Login />} />

    {/* <Route exact path="/lol" element={} /> */}
          <Route exact path="/" element={<><SideBar/><MainContainer/></>} />
          <Route exact path="/product" element={<><SideBar/><Products/></>} />
          <Route exact path="/no" element={<><SideBar/><Userlist/></>} />


          
      </Routes>  
      
   
</div>
    </div>
   
  );
}

export default App;

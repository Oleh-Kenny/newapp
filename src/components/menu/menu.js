import React from "react";
import { Link} from "react-router-dom";
 const MainMenue = () => {
     return(
         
         <nav className="navbar navbar-expand-lg col-lg-6 offset-3 navbar-light bg-light d-flex justyfi-content-center">
             <ul className="navbar-nav w-100 d-flex justify-content-center ">
                 <li className="nav-item active"><Link  to="/"  >Home</Link></li>
                 <li className="nav-item active"><Link to="about"  >About</Link></li>
                 <li className="nav-item active"><Link to="add"  >Add Cont</Link></li>
             </ul>
         </nav>
         
     )
 }

 export default MainMenue;
import './Css/Navbar.css'
import { Link } from "react-router-dom";


const Header=()=>{

  const logOut=()=>{
    localStorage.clear();
    window.location.replace('/Home');
  }
  var menu;
  
    return(

      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src="https://www.pngitem.com/pimgs/m/237-2378981_donate-icon-pink-hd-png-download.png " alt="logo" width="100" height="50 "></img>
    <span className="hidden">Donation</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    
      {menu}


  </div>
</nav>
      
      
      
  )
}
export default Header;

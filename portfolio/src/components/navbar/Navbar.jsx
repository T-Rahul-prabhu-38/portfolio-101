import React,{useState} from "react";
import { HiBars3 ,HiOutlineXCircle } from "react-icons/hi2";
import "./Navbar.css";
import MobileNav from "./MobileNav";
import { FaHome } from "react-icons/fa";


const Navbar = () => {

    const [openMenu,setOpenMenu] = useState(false);
    const toggleMenu = ()=>{
        setOpenMenu(!openMenu);
    };

  return (
    <>	
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

    <nav className="nav-wrapper">
	  <div className="nav-content">
    <FaHome />
    	<ul>  
      <li>
            <a className="menu-item">Projects</a>
      </li>
		  <li>
            <a className="menu-item">skills</a>
      </li>
		  <li>
            <a className="menu-item">work  Experience</a>
      </li>
      <li>
            <a className="menu-item">contact</a>
      </li>
          <button className="contact-btn" onClick={()=>{}}>Download Resume</button>
		</ul>

        <button className="menu-btn" onClick={toggleMenu}>
            <span 
                className={"material-symbols-outlined"}
                style={{fontSize:"1.8rem"}}
            >
                {openMenu? <HiOutlineXCircle /> :<HiBars3 />}
            </span>
        </button>
	  </div>
	</nav>
	</>
  );
};

export default Navbar;
 
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';




const NavBar = () => {

    const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];

  return(
    <nav className="bg-yellow-400 p-6 ">
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {/* condition render kory dekhchi je open/close kaj korchy ki na */}
        {
            open === true? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
        }
        
       </div>
       <ul className={`md:flex absolute md:static duration-1000 bg-yellow-400 ${open? 'top-16' : '-top-60'}`}>
       {
            routes.map(route => 
            <Link 
            key={route.id} 
            route={route}>
            </Link>)
        }
       </ul>
    </nav>
  );
  
  
};

export default NavBar;

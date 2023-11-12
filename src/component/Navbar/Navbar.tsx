import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar (){
    return (
    <div className="navbar">
     <Link to="/">
     <div className="title-nav">
        Pile of <u>Frontend</u> stuffs
    </div>
     </Link>   
    
    <div className="items-nav">
        <div className="hire-me-button">
            <a id="hire-button" href="https://www.linkedin.com/in/shivank-kunwar/">
                Hire me
            </a>
            
        </div>
    </div>
    </div>)
}
export default Navbar;
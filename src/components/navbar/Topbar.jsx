
import "./Topbar.scss";
import { Mail, Call } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            portfolio
          </a>
          <div className="itemContainer">
            <Call className="icon" />
            <span>+44 7533310028</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>masum07@hotmail.co.uk</span>
          </div>
          <div className='itemContainer'>
          <a className='col ' href="https://www.linkedin.com/in/muhammad-masum-miah-3082a7105/"><i class="fab fa-linkedin-in"></i> </a>
          </div>
          <div className='itemContainer'>
            <a className='col 'href="https://github.com/mase2020"><i class="fab fa-github"></i> </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
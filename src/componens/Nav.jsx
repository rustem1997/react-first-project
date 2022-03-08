import React from "react";
import navBort from "./Nav.module.css"

// let navBort = {
// "nav":"Nav_nav__ydbxv",
// "geti":"Nav_geti__HrGyW",
// }




const Nav =()=>{
    return(  <nav className={navBort.nav}>
    <div className={navBort.geti}>
      <a href='#'>Profile</a>
    </div>
    <div className={navBort.geti}>
      <a href='#'>Message</a>
    </div>
    <div className={navBort.geti}>
      <a href='#'>News</a>
    </div>
    <div className={navBort.geti}>
      <a href='#'>Settings</a>
    </div>

  </nav>

    );
}
export default Nav;
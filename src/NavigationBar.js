import React, {useState, useEffect} from 'react'
import "./NavigationBar.css";
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []); //does an action when user scrolls up and down in webpage
    return (
        <div className={`navigationBar ${show && "navigationColor"}`}>
            <img className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Adil Khan's Netflix Clone"/>
            <img className= "navigationAvatar"
            src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57"
            alt="Adil Khan's Netflix Clone"/>
        </div>
    )
}

export default Nav  
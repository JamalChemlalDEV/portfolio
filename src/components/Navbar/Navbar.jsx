import React, { useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import navs from "../../data/navs.json";
import { Link } from "./Link";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">portfolio</a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn}
                    src={isMenuOpen 
                        ? getImageUrl("nav/closeIcon.png") 
                        : getImageUrl("nav/menuIcon.png")
                    } 
                    alt="menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                />
                <ul className={`${styles.menuItems} ${isMenuOpen && styles.menuOpen}`}
                    onClick={() => {
                        setIsMenuOpen(false);
                    }}    
                >
                    {navs.map( (nav, id) => {
                        return (
                            <Link 
                                key={id}
                                link={nav.link}
                                name={nav.name}
                            />
                        );
                    })}
                    
                </ul>
            </div>
        </nav>
    )
}
import {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import "./navbar.scss";
import {Icons} from "../../data/icons.ts";
import {Routes} from "../../data/routes.ts";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {pathname} = useLocation();
    console.log(location.pathname)
    console.log(pathname.indexOf(Routes.HOME) >= 0)
    return (
        <>
            {isOpen && <div className="black-container" onClick={() => setIsOpen(false)}/>}

            <nav
                className={isOpen ? "navbar navbar-open" : "navbar"}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >

                <div className={isOpen ? "navbar-user-visible  navbar-user" : "navbar-user"}>
                    <img
                        className="avatar"
                        src="https://wikiwarriors.org/mediawiki/images/f/f8/11-squidgame-unit-02-1632338259.jpg"
                        alt="User Avatar"
                    />
                    <span className="username">Daniel</span>
                </div>

                <ul>
                    <div>
                        <li>
                            <NavLink to="#">
                                <div className="nav-icon">
                                    <img src={Icons.SEARCH} alt="Search"/>
                                </div>
                                {isOpen && <div className="nav-label">Search</div>}
                            </NavLink>
                        </li>
                        <li className={pathname.includes(Routes.HOME) ? "active-route" : ""}>
                            <NavLink to="/home">
                                <div className="nav-icon">
                                    <img src={Icons.HOME} alt="Home"/>
                                </div>
                                {isOpen && <div className="nav-label">Home</div>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <div className="nav-icon">
                                    <img src={Icons.MOVE} alt="TV Shows"/>
                                </div>
                                {isOpen && <div className="nav-label">TV Shows</div>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <div className="nav-icon">
                                    <img src={Icons.CASSETTE} alt="Movies"/>
                                </div>
                                {isOpen && <div className="nav-label">Movies</div>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <div className="nav-icon">
                                    <img src={Icons.SMILE} alt="Genres"/>
                                </div>
                                {isOpen && <div className="nav-label">Genres</div>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <div className="nav-icon">
                                    <img src={Icons.HISTORY} alt="Watch Later"/>
                                </div>
                                {isOpen && <div className="nav-label">Watch Later</div>}
                            </NavLink>
                        </li>
                    </div>

                    {
                        isOpen ? (<div className="settings">
                                <li>
                                    <NavLink to="#">
                                        LANGUAGE
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        GET HELP
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">
                                        EXIT
                                    </NavLink>
                                </li>
                            </div>)
                            :
                            ""
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar
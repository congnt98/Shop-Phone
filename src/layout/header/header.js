import React from "react";
import Menu from "./menu/menu";
import '../../acsets/sass/header.scss'
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="bg-info">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-info container p-0">
                        <a href="/" className="navbar-brand logo">Shop<span>Phone</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <Menu />
                            <ul className="nav navbar-nav navbar-right loguser">
                                <li><a href="/*"><span className="glyphicon glyphicon-user"></span> Sign In</a></li>
                                {/* <li><a href="/"><span className="glyphicon glyphicon-log-in"></span> Login</a></li> */}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header
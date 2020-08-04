import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa'




class NavBar extends Component {
    state = {isOpen:false}
    handlerToggle = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() { 
        const {isOpen} = this.state;
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'><img src={logo} alt=""/></Link>
                        <button className="nav-btn" type="button" onClick={this.handlerToggle}>
                            <FaBars className="nav-icon" />
                        </button>
                        <Link to=""></Link>
                    </div>
                    <ul className={isOpen? 'nav-links show-nav':'nav-links'}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/rooms'>Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default NavBar;
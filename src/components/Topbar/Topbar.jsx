import { Person, Mail } from '@material-ui/icons';

import './Topbar.scss'

const Topbar = ({ menuOpen, setMenuOpen }) => {

    return (
        <div className={`Topbar ${menuOpen ? 'active' : '' }`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">arvind.</a>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>arvindsai.vummadisingu@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+1(732)405-1072</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar

import React from 'react';
import './Header.scss';

import './Dropdown.scss';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const Header = ({ location,onChange }) => {
    return (
        <div className="Header">
            <div className="Heading">Rental Management System</div>
            <div className="Location">
                <div className="Dropdown">
                    <Dropdown options={location
                    } placeholder="Select an option" onChange={onChange} />

                </div>
    )
            </div>
        </div>
    )
}
export default Header;
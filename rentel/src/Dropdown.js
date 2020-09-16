import React from 'react';
import './Dropdown.scss';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropdownComp = ({location}) => {
    return (
        <div className="Dropdown">
            <Dropdown options={location
    } placeholder="Select an option" onChange={} />

        </div>
    )
}
export default DropdownComp;
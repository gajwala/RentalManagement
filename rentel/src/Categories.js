import React, { useEffect, useState } from 'react';
import './Categories.scss';
import Welcome from './Welcome';
import Category from './Category';
import { Link } from 'react-router-dom';
import SubmenuCategory from './SubmenuCategory'

const Categories = ({ dropDownValue, data }) => {
    const [state, setstate] = useState([]);
    const [isSubmenuSelected, setIsSubmenuSelected] = useState(false);
    const [subMenudata, setSubmenudata] = useState([])


    useEffect(() => {
        if (data.length > 0) {
            const filterData = data.filter(item => {
                return item.name === dropDownValue.value
            })
            setstate(filterData);
            setIsSubmenuSelected(false);
        }
    }, [dropDownValue]);

    let loadCategories = null;
    let subMenuCategory = null;
    subMenuCategory = <SubmenuCategory subMenu={subMenudata} />
    const menuSelectHandler = (e) => {
        setSubmenudata(e);
        setIsSubmenuSelected(true);

    }


    if (!dropDownValue.value) {
        loadCategories = <Welcome />;
    } else {
        loadCategories = <Category branches={state} dropDownValue={dropDownValue} menuSelectHandler={(e) => { menuSelectHandler(e) }} />
    }
    const subMenuChanged = (e) => {
        setIsSubmenuSelected(false);
    }

    return (
        <div className="Categories">
            <div className="Space_div"></div>
            <div className= {`mainContainer ${dropDownValue.value && 'datacontent'}`}>
                <div className="linkCss">
                    {dropDownValue.value ? <Link to="/equpment" onClick={subMenuChanged}>Equipment Catalog</Link> : null}
                    {isSubmenuSelected ? <span> / <Link to="">{subMenudata.name}</Link></span> : null}
                </div>
                <div className="Content">
                    {!isSubmenuSelected ? loadCategories : subMenuCategory}
                </div>

            </div>
            <div className="Space_div"></div>
        </div>
    )
}

export default Categories;
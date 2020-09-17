import React, { Fragment } from 'react';
import './Category.scss';
import MatButton from '@material-ui/core/Button'

const Category = ({ branches, dropDownValue, menuSelectHandler }) => {
    const [categories] = branches;
    const checkImage = (category) => {
        try {
            const img = require(`./assets/category/${category.image}`);
            if (img) {
                return (
                    <Fragment>
                        <img src={img} alt={category.image} />
                        <div className="CategoryHeader" onClick={() => menuSelectHandler(category)}>
                            <MatButton>{category.name}</MatButton>
                            <p><i className="arrow right"></i></p>
                        </div>
                    </Fragment>
                )
            }
        }
        catch (e) {
            if (e instanceof Error && e.code === "MODULE_NOT_FOUND"){
                console.log("Can't load foo!");
                return (
                    <Fragment>
                        <img src="" alt={category.image} />
                        <div className="CategoryHeader">
                            <MatButton>{category.name}</MatButton>
                            <p><i className="arrow right"></i></p>
                        </div>
                    </Fragment>
                )
            }else{
                throw e;
            }
               
        }
    }
    return (
        <Fragment>
            {categories && categories.branches && categories.branches.map((item, index) => (
                <Fragment key={index}>
                    {  item.categories.map((category, catIndex) => (
                        <div className="Category" key={catIndex}>
                            {
                                checkImage(category)
                            }
                        </div>
                    ))
                    }
                </Fragment>

            ))}

        </Fragment>

    )
}

export default Category;
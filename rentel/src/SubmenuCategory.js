import React, { Fragment } from 'react'
import './Category.scss';
import MatButton from '@material-ui/core/Button'
function SubmenuCategory({subMenu}) {
  const checkImage = (item)=>{
      try {
        return (
            <Fragment>
                  <img src={require(`./assets/category/${item.image}`)} alt={item.image} />
                <div className="CategoryHeader">
                    <MatButton>{item.name}</MatButton>
                    <p><i className="arrow right"></i></p>
                </div>
            </Fragment>
        )
          
      } catch (e) {
        if (e instanceof Error && e.code === "MODULE_NOT_FOUND"){
            console.log("Can't load foo!");
            return (
                <Fragment>
                     <img src="" alt={item.image} />
                <div className="CategoryHeader">
                    <MatButton>{item.name}</MatButton>
                    <p><i className="arrow right"></i></p>
                </div>
                </Fragment>
            )
        }
        else{
            throw e;
        }
      }
  }
    return (
        <Fragment>
            {subMenu && subMenu.subcategories.map((item, index) => (
                <div className="Category" key={index}>
                    {checkImage(item)}
              
            </div>

            ))}

        </Fragment>

    )
}

export default SubmenuCategory

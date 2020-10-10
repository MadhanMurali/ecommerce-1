
import React from "react";

// style was imported in index.css
import "./category_item.css";



const CategoryItem = (  props) => {
  // console.log(name)
  //   console.log(url)
    const { name, url } = props
    
  return (
    
<div className="owl-item" >
    <div className="cat-item">
        <div className="cat-img">
            <a href="http://capricathemes.com/wordpress/WCM02/WCM020030/product-category/electrosurgical/" title="Electrosurgical">
                <img src={url} title={name} alt="Electrosurgical" height="140" width="140" />
            </a>
            </div><div className="cat-description">
              <div className="cat-title"> 
              <a className="cat-name" href="http://capricathemes.com/wordpress/WCM02/WCM020030/product-category/electrosurgical/" title="Electrosurgical">{name}</a>
            </div>
            </div>
            </div>
</div>

  );
};



export default CategoryItem;







import React from 'react';
import './ProductForm.css';

// import endpoint for Post request
import endpoints from '../../Utilities/endpoints';

import dev from '../../Config/Keys/dev';

class ProductForm extends React.Component {
  render() {
    return (
      <div className="ProductForm">
        <form action={endpoints.api_root + 'products'} 
          id="productPostForm"
          method="POST">
            <div className="input-group">
              <label className="product-label" htmlFor="name">Name</label>
              <input type="text" name="name" id="name" className="input-text" placeholder="name of product"
                maxLength="40"></input>
            </div>
            <div className="input-group">
              <label className="product-label" htmlFor="cost">Cost $</label>
              <input type="number" name="cost" id="cost" className="input-number" placeholder="0"
                maxLength="40" min="0" max="10"></input>
            </div>
            <div className="input-group">
              <label className="product-label" htmlFor="description"></label>
              <input type="text" name="description" id="description" className="input-text" placeholder="description of product"
                maxLength="400"></input>
            </div>
            <div className="input-group">
              <label className="product-label" htmlFor="img_url">Img url </label>
              <input type="text" name="img_url" id="img_url" className="input-text" placeholder="image url"
                maxLength="180" value="./joanna-kosinska-Prfs32wh-o4-unsplash.jpg"></input>
            </div>
            <div className="input-group">
              <label className="product-label" htmlFor="alt_text">Alt text </label>
              <input type="text" name="alt_text" id="alt_text" className="input-text" placeholder="alt text"
                maxLength="100" value="A spoon-full of salt"></input>
            </div>
            <div className="input-group">
              <label className="product-label" htmlFor="category_id">Ctgry id </label>
              <input type="number" name="category_id" id="category_id" className="input-number" placeholder="category id"
                min="1" max="100" value="1"></input>
            </div>
            <div className="input-group">
              <label className="product-label" htmlFor="weight">Weight </label>
              <input type="number" name="weight" id="weight" className="input-number" placeholder="weight"
                min="0" max="100"></input>
            </div>
            <div className="input-group">
              <label className="product-label" htmlFor="height"></label>
              <input type="number" name="height" id="height" className="input-number" placeholder="height"
                min="0" max="144"></input>
            </div>
            <div className="input-group">
              <label className="product-label" htmlFor="width"></label>
              <input type="number" name="width" id="width" className="input-number" placeholder="width"
                min="0" max="144"></input>
            </div>
            <div className="input-group">
              <label className="product-label" htmlFor="depth"></label>
              <input type="number" name="depth" id="depth" className="input-number" placeholder="depth"
                min="0" max="144"></input>
            </div>
            <input type="hidden" name="key" id="key" value={dev.product_key}></input>
            <input type="submit" value="Add Product" class="btn product-btn"></input>
        </form>
      </div>
    );
  }
}

export default ProductForm;
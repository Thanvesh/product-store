import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class ProductItem extends Component {
  render() {
    const {productDetails} = this.props
    const {id} = productDetails
    const {title,category,image, price, count} = productDetails
    return (
      <li className="list-container">
        <Link to={`/products/${id}`} className="link">
          <img src={image} alt={count} className="img-product" />
          <div className="inside-container">
            <h1 className='title-card'>{title.substring(0, 20)}</h1>
            <p className='card-category'>{category}</p>
            <p className="card-price">Price :{price}</p>
            <p className="card-count">rating :₹{count}</p>
          </div>
        </Link>
      </li>
    )
  }
}

export default ProductItem
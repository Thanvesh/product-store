import './index.css'

import {Link} from 'react-router-dom'

const Home = () => (
  <div className="container">
    <h1 className="heading">Welcome to the Store</h1>
    <Link to="/products" className='link'>
      <button type="button" className="button">
        Products
      </button>
    </Link>
  </div>
)

export default Home
import React from 'react'

import log from "../../commonResource/images/icons/logo-sm.png"
import search from "../../commonResource/images/icons/search-icon-sm.png"
import cart from "../../commonResource/images/icons/cart-sm.png"

import { Link } from 'react-router-dom';
function HeaderSection() {
  return (
     
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/Home"
            ><img src={log} alt= ""/></Link>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Mac/">Mac</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Iphone">iphone</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Iphonedb">iphonedb</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Ipad">ipad</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Watch">watch</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Tv">tv</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Music">Music</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/Support">Support</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/"
                  ><img src={search} alt= "" /></a>
                
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/"
                  ><img src={cart} alt= ""/></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

  )
}

export default HeaderSection
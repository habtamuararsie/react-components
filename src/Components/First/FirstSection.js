import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function FirstSection() {
  return (
    <div>
    <section className="first-hightlight-wrapper">
      <div className="container">
        <div className="new-alert">New</div>

        <div className="title-wraper bold black">iPad Pro</div>

        <div className="links-wrapper">
          <ul>
            <li><a href="">Learn more</a></li>
            <li><a href="">Order</a></li>
          </ul>
        </div>

        <div className="ipod-caption row">
          <div className="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FirstSection
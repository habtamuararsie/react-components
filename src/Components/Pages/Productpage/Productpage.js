import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Four04 from '../Four04/Four04'
function Productpage(){
  // constructor(props) {
  //   super();
  //   this.state = {
  //     products: [],
  //     productID: props.match.params.pid,
  //   };
  // }

  const [product,  setProducts] = useState([]);
  const {productID} = useParams();
  console.log(useParams());
  // componentDidMount() {
  //   fetch("/iphones.json")
  //     .then((res) => res.json())
  //     .then((products) => {
  //       const productList = products.products;
  //       const singleProduct = productList.filter(
  //         (x) => x.product_url == this.state.productID
  //       );
  //       this.setState((state) => {
  //         return {
  //           products: singleProduct,
  //         };
  //       });
  //     });
  // }
useEffect(()=>{
  fetch ("http://localhost:3001/iphones")
  .then((response) => response.json())
  .then((data) => {
          const productList = data.products;
          const singleProduct = productList.filter(
           // (x) => x.product_url === ProductID.productID
           (product)=> product.product_url === productID
          );
          
setProducts({singleProduct}) 
        });
},[productID]);

    console.log(productID);
    if(product.length){
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {product.map((product) => {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              // let Productpage = "/Iphonedb/" + id;
              let details = product.product_description;

              let productDiv = (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                      <Link to={`/Iphonedb/${product.product_url}`}>Learn more</Link>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} alt=" "/>
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </div>
    );
  }
  else{
    return <Four04 />;
  }
}
export default Productpage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphonedb() {
//     const [iphone,setIphone] = useState([]);

//   useEffect(()=>{
// fetch(
//   "http://localhost/phpmyadmin/index.php?db=mydb&token=a6d51cc30c1ff3f907f9177ef6469b01"
// )
// .then((response) => response.json())
// .then((data) =>{
//   console.log(data);
//   setIphone(data.products);
// })
//   },[]);
//   console.log(setIphone);
//   return (
//     <div>Iphonedb</div>
//   )
// }


  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("/iphones.json")
    // fetch("http://localhost/phpmyadmin/index.php?db=mydb&token=a6d51cc30c1ff3f907f9177ef6469b01")
    // fetch ("http://localhost:3001/iphones")
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(() => data.products);
      })
      .catch(()=> console.log("Erro: unable to fech the data!!!"));
  }, []);

  console.log(products);
  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={id}>Learn more</Link>
                        {/* <Link to={`/Iphonedb/${product.product_url}`}>Learn more</Link> */}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    {/* <img src={product.product_img} alt="" /> */}
                    <img src={img} alt="" />
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
export default Iphonedb
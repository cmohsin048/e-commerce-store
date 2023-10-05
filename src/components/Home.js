import React from 'react'
import Hero from "../Resources/Hero"
// import ProductSection from './ProductSection.'
import Product from '../Resources/Product';
import { Products } from '../Resources/products';
const Home = () => {
  const filteredProducts = Products.filter(
    (product) => product.category === 'White EliteBook Tablet 810'
  );
  const smarthome = Products.filter(
    (product) => product.category === 'Smart Home'
  );

  return (
    <div className='body'>
      <Hero />
      <div className='electronic-row'>
        <div className='pc'>
          <img src='https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/Surface-Studio.png' alt="pc" />
          <div className='h4'>
            <p>Apple</p>
            <h4>New Products</h4>
            <div className='scbutton'>
              <p>Shop</p>
            </div>
          </div>
        </div>
        <div className='pc'>
          <img src='https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/drone_PNG204.png' alt="pc" />
          <div className='h4'>
            <p>Flying</p>
            <h4>Quad Copter</h4>
            <div className='scbutton'>
              <p>Shop</p>
            </div>
          </div>
        </div>
        <div className='pc'>
          <img src='https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/Mask-Group-2.png' alt="pc" />
          <div className='h4'>
            <p>Clean</p>
            <h4>Your Home</h4>
            <div className='scbutton'>
              <p>Shop</p>
            </div>
          </div>
        </div>
        <div className='pc'>
          <div><img src='https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/Group-7734.png' alt="pc" /></div>

          <div className='h4'>
            <p>Drink</p>
            <h4>Coffee</h4>
            <div className='scbutton'>
              <p>Shop</p>
            </div>
          </div>
        </div>
      </div>
      {/* css for this part is in Product.css */}
      <div className='mostpopular'>
        <div className='headingandbutton'>
          <h3 className='heading'>Most PoPular</h3>
          <div className='Line'></div>
          <div className='viewall'>
            View All
          </div>
        </div>
        <div className='product-section'>
          {filteredProducts.map((product) => {
            return <Product key={product.id}{...product}></Product>
          })}
        </div>
      </div>

      <div className="Featured">
        <div className='Featured-product'>
          <div className='Featuresliderbutton'>
            <h3 className='heading'>Our Featured Product</h3>
            <div className='Line'></div>
            <div className='slider-arrow'>
              <span className='arrow-left'>{'<'}</span>
              <span className='arrow-right'>{'>'}</span>
            </div>
          </div>

          <div className='smarthome'>
            {smarthome.map((product) => {
              return <Product key={product.id}{...product}></Product>
            })}
          </div>

        </div>
      </div>
      <div className='NewTech'>
        <div className='healthcheck'>
          <div className="fit"><p>Health and Fit</p></div>
          <div className='health'><p>Health Care Monitor</p></div>
          <span className='healthshop'>
            <p>Shop</p>
          </span>
        </div>
        <div className='middleTech'>
          <div className='Headphones'>
            <div className='Headphone-text'>
              <div className='Headphone-title'><p>High Tech Product</p></div>
              <h3>Monster Beats Headphones</h3>
              <span className='headphoneshop'>
                <p>Shop</p>
              </span>
            </div>
          </div>
          <div className='speakers'>
            <div className='speaker-text'>
              <div className='speaker-title'><p>Minimalism Design</p></div>
              <h3>Monster Beats Headphones</h3>
              <span className='speakershop'>
                <p>Shop</p>
              </span>
            </div>
          </div>
        </div>
        <div className='camera'>
          <div className="camera-title"><p>Play the Dream</p></div>
          <div className='camera-des'><p>Health Care Monitor</p></div>
          <span className='camerashop'>
            <p>Shop</p>
          </span>
        </div>
      </div>
      <div className='mostpopular'>
        <div className='headingandbutton2'>
          <h3 className='heading'>Most PoPular</h3>
          <div className='Line'></div>
          <div className='threebuttons'>
            <a href='#' className='all'>ALL</a>
            <a href='#' className='Watches'>Watches &  EyeWear</a>
            <a href='#' className='White'>White EliteBook Tablet 810</a>
          </div>
        </div>
        <div className='product-section'>
          {filteredProducts.map((product) => {
            return <Product key={product.id}{...product}></Product>
          })}
        </div>
      </div>
      <div className='Line'></div>
      <div className='staff'>
        <div className='Denis'>
          <h3>Denis Zakerburg</h3>
          <p>Marketing Managment</p>
          <div className='about'>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
          </div>
        </div>
        <div className='Denis'>
          <h3>Denis Zakerburg</h3>
          <p>Marketing Managment</p>
          <div className='about'>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
          </div>
        </div>
        <div className='Denis'>
          <h3>Denis Zakerburg</h3>
          <p>Marketing Managment</p>
          <div className='about'>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
          </div>
        </div>
       
      </div>
      <div className='Line'></div>
      <div className='connection'>
         <div className='proof'>
          <img src="https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/business-young-people-meeting-conference-65BA9P7-1600x900.jpg"/>
          <h3>October 28,2023</h3>
          <p>When, while the lovely valley teems with vap ...</p>
         </div>
         <div className='proof'>
          <img src="https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/creative-business-people-working-on-business-DZNE5P6-1600x900.jpg"/>
          <h3>October 28,2023</h3>
          <p>When, while the lovely valley teems with vap ...</p>
         </div>
         <div className='proof'>
          <img src="https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/business-people-working-together-on-project-and-5FHSKBL-1600x900.jpg"/>
          <h3>October 28,2023</h3>
          <p>When, while the lovely valley teems with vap ...</p>
         </div>
         <div className='proof'>
          <img src="https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/business-people-working-together-on-project-and-B3MZ4TX-1600x900.jpg"/>
          <h3>October 28,2023</h3>
          <p>When, while the lovely valley teems with vap ...</p>
         </div>
         <div className='proof'>
          <img src="https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/business-young-people-meeting-conference-65BA9P7-1600x900.jpg"/>
          <h3>October 28,2023</h3>
          <p>When, while the lovely valley teems with vap ...</p>
         </div>
      </div>
    </div>
  )
}

export default Home
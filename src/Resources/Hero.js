import React, { useState } from 'react'
import { faComputerMouse, faCamera, faMobileScreenButton, faLaptop, faTv, faHouseLaptop, faHeadphones, faCar, faNetworkWired,faBagShopping} from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Freeshiping from '../svgs/Freeshiping'
import Onlinesupport from '../svgs/Onlinesupport'
import Savings from '../svgs/Savings'

const Hero = () => {
   


    return (
        <div className='hero'>
            <div className='left'>
                <ul className='category-list'>
                    <div className='test'>
                        <FontAwesomeIcon className='cicon' icon={faComputerMouse} />
                        <p ClassName="para">Computer & Accessories </p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                    <div className='test'><FontAwesomeIcon className='cicon' icon={faCamera} />
                        <p ClassName="para">Computer & Accessories</p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                    <div className='test'><FontAwesomeIcon className='cicon' icon={faMobileScreenButton} />
                        <p ClassName="para">Computer & Accessories</p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                    <div className='test'><FontAwesomeIcon className='cicon' icon={faLaptop} />
                        <p ClassName="para">Computer & Accessories</p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                    <div className='test'><FontAwesomeIcon className='cicon' icon={faTv} />
                        <p ClassName="para">Computer & Accessories</p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                    <div className='test'><FontAwesomeIcon className='cicon' icon={faHouseLaptop} />
                        <p ClassName="para">Computer & Accessories</p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                    <div className='test'><FontAwesomeIcon className='cicon' icon={faClock} />
                        <p ClassName="para">Computer & Accessories</p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                    <div className='test'><FontAwesomeIcon className='cicon' icon={faHeadphones} />
                        <p ClassName="para">Computer & Accessories</p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                    <div className='test'><FontAwesomeIcon className='cicon' icon={faCar} />
                        <p ClassName="para" >Computer & Accessories</p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                    <div className='test'><FontAwesomeIcon className='cicon' icon={faNetworkWired} />
                        <p ClassName="para">Computer & Accessories</p>
                        <span className="category-arrow">&gt;</span>
                    </div>
                </ul>
            </div>
            <div className='middle'>
                <div className='upmiddle'>
                    <div className='h4'>
                        <h4>TV SHOP</h4>
                        <div className='scbutton'>
                            <p>Shop By Category</p>
                        </div>
                    </div>
                </div>
                <div className='lowmiddle'>
                    <div className='freeshipping'>
                        <Freeshiping />
                        <div>
                            <span>Free Shipping</span>
                            <p>On All Orders</p></div>
                    </div>
                    <div className='Onlinesupport'>
                        <Onlinesupport />
                        <div>
                            <span>Free Shipping</span>
                            <p>On All Orders</p></div>
                    </div >
                    <div className='Savings'>
                        <Savings />
                        <div>
                            <span>Free Shipping</span>
                            <p>On All Orders</p>
                            
                            </div>
                    </div >
                </div>
            </div>
            <div className='right'>
                <div className="realsale">
                    <p>SALE!</p>
                </div>
                <img src="https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/Group-7892-300x399.jpg" alt="playstation" />
                <div className='Salesdescryption'>
                    <h3 >Sony Dualsense Controller + Usb 3.0 Cable</h3>
                    <div className='price'>
                        <span className='orignalprice'>$1300</span>
                        <p className='saleprice'>$790</p></div>
                </div>
                <div class="rating">
                    <span class="star filled">&#9733;</span>
                    <span class="star filled">&#9733;</span>
                    <span class="star filled">&#9733;</span>
                    <span class="star filled">&#9733;</span>
                    <span class="star outlined" >&#9734;</span>
                </div>
                <div className='addtocacrt'>
                    <div>
                        <span>Add To Cart </span>
                    </div>
                    <div className='secondchild'><FontAwesomeIcon icon={faBagShopping} style={{color:"1fb0a8"}}/></div>
                </div>
            </div>

        </div>
    )
}

export default Hero
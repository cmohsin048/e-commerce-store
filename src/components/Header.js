import React, { useState } from 'react'
import First from '../svgs/First'
import Second from '../svgs/second'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  const [isNavOpen, setNavOpen] = useState(false);
  const [open,setopen]=useState(false)

  function toggleNavMenu() {
    setNavOpen(!isNavOpen);
  }

  function toggleNavMenu() {
    const navlist = document.querySelector('#navList');
    navlist.style.display = 'flex';
    setopen(true)
  }

  function closeNavMenu() {
    const navlist = document.querySelector('#navList');
      navlist.style.display = 'none';
  }

  return (
    <div className='header'>
      <div className='up'>
        <i>
          <img src="https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/10/cropped-Group-1333.png" />
        </i>
        <div class="hamburger" id="hamburger">
          <FontAwesomeIcon icon={faBars} onClick={toggleNavMenu} />
        </div>
        <nav>
          <ul className={isNavOpen ? 'upList open' : 'upList'} id="navList">
            <FontAwesomeIcon className='crossham' icon={faXmark} onClick={closeNavMenu} style={{ color: '#000' }} />
            <li><Link className="upLink" onClick={open ? closeNavMenu:undefined } to="/">Home</Link></li>
            <li><Link className='upLink' onClick={open ? closeNavMenu:undefined }to="/About">About</Link></li>
            <li><Link className='upLink' onClick={open ? closeNavMenu:undefined }to="/Shop">Shop</Link></li>
            <li><Link className="upLink" onClick={open ? closeNavMenu:undefined } to="/Blog">Blog</Link></li>
          </ul>
        </nav>


        <div className='details'>
          <div className="mail">
            <div><First className="Firsticon" /></div>
            <a href='#'>info@phlox.pro</a>
          </div>
          <div className='phonenumber'>
            <div><Second className="secondicon" /></div>
            <a href='#'>909-25468-546</a>
          </div>
        </div>
      </div>
      <div className='low'>
        <div className='category'>
          <i >
            <Link className='cattext' to='/shop'>Shop By category</Link>
          </i>
        </div>
        <div class="search-bar">
          <input type="text" placeholder="Enter your search..." />
          <button type="submit">Search</button>
        </div>
        <div className='login'>
          <div className='fonticon'>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <p><a>login</a>/<a>sign up</a></p>
          <div className='fonticon2'>
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
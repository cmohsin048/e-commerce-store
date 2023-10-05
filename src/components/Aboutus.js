import React from 'react'
import Address from '../svgs/Address';
import Phone from '../svgs/Phone';
import Email from '../svgs/Email'


const Aboutus = () => {
    return (
        <div className='Aboutus'>
            <div className='Aboutus-img'>
                <img src="https://demo.phlox.pro/shop-electronic/wp-content/uploads/sites/236/2020/11/constant-loubier-7lzIyp2Ork4-unsplash.jpg" alt="lala" /></div>
            <div className='Aboutus-text'>
                <p>Introduction to phlox shop</p>
                <p className='maintext'>What Does It Mean to Create Something?</p>
                <p className='explanationtext'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formed humour .</p>
            </div>
            <div className='Aboutus-services'>
                <div className='Address'>
                    <div className='Address-icon'>
                        <Address /></div>
                    <div>
                        <span>Free Shipping</span>
                        <p>123 Ave, Lorem City, site Country, The World</p></div>
                </div>
                <div className='Address'>
                    <div className='Address-icon'>
                        <Phone /></div>
                    <div>
                        <span>Phone</span>
                        <p>(001) 123456789 - 234567891 (001) 987654324</p></div>
                </div>
                <div className='Address'>
                    <div className='Address-icon'>
                        <Email /></div>
                    <div>
                        <span>Email</span>
                        <p>"info@phloxmarket.com"
                            "info@yourdomain.com"</p></div>
                </div>
            </div>
          <div className='Aboutus-text' id="Aboutus-text">
          <p>FeedBack Form</p>
          <p className='maintext'>We Love to Hear From you</p>
          <p className='explanationtext'>I’m also not going for what I would call an examined instructional sentence . compiled hundreds of file of mine</p>
          <div className='Form'>
            <div className='form-Email'><input type="email" placeholder='Email*'/></div>
            <div className='form-No'><input type='text' placeholder='PhoneNumber'/></div>
            <div className='form-msg'><textarea type="text" placeholder='Your Message Here' /></div>
            <div className='Form-Submit'>
                <p>Submit</p>
            </div>
          </div>

        </div>
        </div>
    )
}

export default Aboutus
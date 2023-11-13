import React from 'react'
import "./Footer.css"

const Footerx = () => {
  return (
    <div className='footer'>
      <div className='top_footer'>
        <div className="item_footer">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>

        </div>
        <div className="item_footer">
          <h1>Links</h1>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
        </div>
        <div className="item_footer">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            consequatur atque similique ducimus modi quasi totam nobis pariatur ut
            numquam earum rerum expedita, quia repudiandae
            impedit neque assumenda sint molestias.
          </span>
        </div>
        <div className="item_footer">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            consequatur atque similique ducimus modi quasi totam nobis pariatur ut
            numquam earum rerum expedita, quia repudiandae
            impedit neque assumenda sint molestias.
          </span>
        </div>
      </div>


      <div className='bottom_footer'>
        
        <div className="left_footer">
          <span className='logo_footer'><span  className='aaa'>𝐼𝐵𝑅𝒜𝐻𝐼𝑀</span> 𝒮𝒯𝒪𝑅𝐸 </span>
          <span className='copyrights_footer'>copyright</span>
          
        </div>

        <div className="rights_footer">
          <img src='/img/payment.png' alt='' />
        </div>

      </div>
    </div>
  )
}

export default Footerx

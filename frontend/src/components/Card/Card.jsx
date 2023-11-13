import React from 'react'
import "./Card.css"
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  // FeaturedProducts =>itme
  return (

         <Link className='link_cards' to={`/Product/${item.id}`}>
         <div className='cards_s'>

          <div className="image_cards">
          {item?.attributes?.isNew && <span> New Season</span>}
          
          
          <img src={process.env.REACT_APP_UPLOAD_URL 
               + item?.attributes?.img?.data?.attributes?.url}
              alt='' className='mainTmg_cards' />
          <img src={process.env.REACT_APP_UPLOAD_URL +
                item?.attributes?.img2?.data?.attributes?.url}
               alt='' className='secondTmg_cards' />
         </div>

         <h2>{item?.attributes?.title}</h2>
         <div className="price_cards">
         <h3>${item?.attributes?.price}</h3>
        
        </div>
      </div>
    </Link>
  )
}

export default Card

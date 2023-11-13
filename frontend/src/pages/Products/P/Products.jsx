import React, { useState, useEffect } from 'react'
import "./Products.css"
import List from '../../../components/List/List'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import useFetch from '../../../hooks/useFetch'


const Products = () => {

  const catId = parseInt(useParams().id)
  
  const [maxPrice, setmaxPrice] = useState(1000)
  const [Sort, setSort] = useState(null)

  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const handleChange = (e) => {
  const value = e.target.value;
  const isChecked = e.target.checked;
  setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value));
  };


  const { data, loading, error }=useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)


  return (

    <div className="products" >
      <div className="left_products">
        <div className="filter_Item_products">
          <h3>Product Categories</h3>
          {
                data?.map((item) => (
                <div className="input_Item" key={item.id}>
                <input type='checkbox' id={item.id} value={item.id} onChange={handleChange} />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))
          }
        </div>



          <div className="filter_Item_products">
               <h2>Filter by price</h2>
               <div className="input_Item">
               <span className='ds' >0</span>
               <input className='ds' type="range" min={0} max={1000}
               onChange={(ele) => setmaxPrice(ele.target.value)} />
               <span className='ds'>{maxPrice}</span>
               </div>
          </div>



        {/* <div className="filter_Item_products">
          <h2> Sort By </h2>
          <div className="input_Item">
            <input type='radio' id='asc' value="asc" name='price' onChange={ele => setSort("asc")} />
            <label htmlFor='asc'  >Price <span className='SDS'>`Lowesr First` </span></label>
          </div>
          
          <div className="input_Item">
            <input type='radio' id='desc' value="desc" name='price' onChange={ele => setSort("asc")} />
            <label htmlFor='desc' >Price <span className='SDS'>`Highes First`</span></label>
          </div>
        </div> */}
      
      
      </div>


      <div className="right_products">
        <img className='Img_products' src="/img/richard-stachmann-lLho042PLrc-unsplash.jpg" alt="" />

        {/*  */}
        <List catId={catId} maxPrice={maxPrice} sort={Sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products 

import React, { useState ,useEffect} from 'react'

import "./List.css"
import Card from "../Card/Card"
import axios from 'axios'
import useFetch from '../../hooks/useFetch'


const List = ({subCats,sort,maxPrice,catId}) => {
   const {data,loading,error} = useFetch(`/Products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    (item)=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}`)

   
    return (
    <div className='List'>
       
      { 
      loading ? "  r " :
      data?.map(itme=>(
        <Card item={itme} key={itme.id} />
      ))
      }

    </div>
  )
}

export default List

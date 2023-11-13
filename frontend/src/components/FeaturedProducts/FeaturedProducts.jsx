import"./FeaturedProducts.css"
import Card from "../Card/Card"
// import { useEffect, useState } from "react"
// import axios from "axios";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({type}) => {
 const {data,loading,error} = useFetch(`/Products?populate=*&[filters][type][$eq]=${type} `)


  return (
    <div className='featuredProducts'>
      <div className='top-featuredProducts'>
          <h1> {type} Products</h1>
         
      </div>


      <div className='bottom_featured_Products'>
        { error ? "error"
        : loading ? "is loading"         
        : data.map((item)=><Card item={item} key={item.id}/>)
        }
      </div>
    </div>
  )
}

export default FeaturedProducts

// const [data,setData]= useState([]);
  // const [loading,setLoading]=useState(false);
//   useEffect (()=>{
//   const fetchData = async () =>{
//     setLoading(true)
//    try{
//       const res = await axios.get(process.env.REACT_APP_API_URL+`/Products?populate=*&[filters][type][$eq]=${type} `,
//       {
//         headers:{ 
//         Authorization:"bearer " + process.env.REACT_APP_API_TOKEN,
//         }
//       })
//      setData(res.data.data)
//      console.log(res.data.data)
//     }catch(err){
//       console.log(err)
//     }
//   }
//   fetchData();
// },[])
    
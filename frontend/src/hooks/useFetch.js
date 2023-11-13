import axios from "axios"
import { useEffect, useState } from "react"

import { m } from "../m"; 
const useFetch = (url) =>{


   const [data,setData]=useState([]);
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(false)


    useEffect (()=>{
        const fetchData = async () =>{
          setLoading(true)
         try{
            setLoading(true)
            const res = await m.get  
            (process.env.REACT_APP_API_URL+url)
           setData(res.data.data)
           console.log(res.data.data)
          }catch(err){
            console.log(err)
            setError(true)
          }
          setLoading(false)
        }
        fetchData();
      },[url])
return {data,loading,error}
};

export default useFetch
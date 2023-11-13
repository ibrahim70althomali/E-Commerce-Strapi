import "./Product.css"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios";
import useFetch from '../../hooks/useFetch'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/catReducer";


const Product = () => {
//  const id = useParams().id; 
//  const [selectImg,setSelectImg]=useState("img");

//  const [quantity,setQuantity] =useState(0);   
//  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
//  const dispatch=useDispatch();




 const id = useParams().id;
 const [selectedImg, setSelectedImg] = useState("img");
 const [quantity, setQuantity] = useState(0);

 const dispatch = useDispatch();
 const { data, loading, error } = useFetch(`/Products/${id}?populate=*`);





  return (
    <div className="Product">
      
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left_Product">
      <div className="image_Product">
        
           

            <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />

            <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />              
               

           
       
      </div>
       <div className="mainImg_Product">
         
       <img
        src={
process.env.REACT_APP_UPLOAD_URL +data?.attributes?.
[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />



       </div>
    </div>





    <div className="right_Product">
      <h1>{data.attributes?.title}</h1 >
      <span className='right_Product_price'>${data?.attributes?.price}</span>
      <p className='right_Product_p'> {data?.attributes?.desc}</p>
          <div className="quantity">
          

          <button onClick={() =>setQuantity((prev) =>  
            prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => 
            prev + 1)}>+</button>
          </div>


          <button className="add_Product"  onClick={()=>dispatch(addToCart(
             
             {
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity,
             }  
          ))}>
           <AddShoppingCartOutlinedIcon />
           Add To Caet
          </button>


          <div className="link__Product">
            <div className="itme_Product">
              <FavoriteBorderOutlinedIcon />
              Add to wish list
            </div>
            <div className="itme_Product">
              <BalanceOutlinedIcon />
              add to compare
            </div>
          </div>
           
            <div className="info">
            <span>Vendor: polp </span>
            <span>product Type: T-shirt</span>
            <span>Tag: T-shirt, Women, Top</span>
            <hr />
            </div>
            
           
           
              <div className="details">
              <span>DESCRIPTION</span>
              <span>ADDITIONAL INFORMATION</span>
            
              <span>FAQ</span>
              </div>
               </div> 
        </>
      )}

    </div>


  );
  
};

export default Product
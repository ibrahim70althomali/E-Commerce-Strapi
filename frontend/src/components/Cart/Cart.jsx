import React from 'react'
import "./Cart.css" 
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/catReducer';

const Cart = () => {
    


  // redux
  const Products = useSelector(state=>state.cart.Products)
   const dispatch=useDispatch();

  
   const totalP = () => {
  // عشان نطلع مجموع
  let total = 0 ;
  Products.forEach((itme) =>(total += itme.quantity + itme.price) );
  return total.toFixed(2);
}




  return (
    <div className='Cart'>
    <h1>Products in your cart</h1>
     {Products?.map(itme=>(
        <div className="itme_Cart" key={itme.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + itme?.img} alt="" />
            <div className="details_Cart">
              <h1>{itme?.title}</h1>
               <p>{itme?.desc.substring(0,50)}</p>

                <div className="Price_Cart">quantity{itme.quantity}*${itme?.price} </div>

            </div>
            {/* نحذف العنصر */}
            <DeleteOutlineOutlinedIcon  className='Delete_Cart'
             onClick={()=>dispatch(removeItem(itme.id))} />
        </div>
     ))}
     <div className="total_Price">
      <span>SUBTOTAL</span>
      {/* هنا يطلع ناتج */}
      <span>${totalP()}</span>
      </div>
      
      {/* <button className='button_Cart' > PROCEED TO CHECKUOT </button> */}
      {/* حذف جميع العاصنررر */}
      <button className='reset_Cart' onClick={()=>dispatch(resetCart())}>RESET CART</button>
      
    </div>
  )
}

export default Cart

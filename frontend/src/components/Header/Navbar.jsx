import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import "./Navbar.css"
import { useSelector } from 'react-redux';


const Navbar = () => {
const [open,setopen] = useState(false)
const Products = useSelector(state=>state.cart.Products)

  return (
    <div className = "navbar">
        <div className='wrapper'>
            
            <div className='left'>
             <img src='/img/en.png' alt=' ' />
             <KeyboardArrowDownIcon />


             <div className='item'>
             <Link  className="link" to="/Products/9">Women</Link>
              
            </div>
            <div className='item'>
            <Link className="link" to="/Products/8">Men</Link>
              
            </div>
            <div className='item'>
                <Link className="link" to="/Products/10">chidren</Link>
            </div>
            </div>
            
           
           
            <div className='center'>
                <Link className="link" to ="/ "><span>𝐼𝐵𝑅𝒜𝐻𝐼𝑀</span> 𝒮𝒯𝒪𝑅𝐸 </Link>
            </div>

            <div className='right'>
            <div className=''>
            <Link className="link" to ="/ "> Hemo</Link>
            </div>

            <div className='item'>
                <Link className="link" to ="/"> About</Link>
            </div>
            <div className='item'>
                <Link className="link" to ="/ ">Contect</Link>
            </div>
            
            <div className="icons">
                <SearchIcon />
                <PersonIcon />
                <FavoriteBorderIcon />
                 
                 
                 <div className="cartIcon" onClick={()=>setopen(!open)} >
                 <ShoppingCartOutlinedIcon />
                 <span>{Products.length}</span>
                 </div>
               
               
               </div>
            </div>
        </div>
        {open && <Cart />}
    </div>
  )
}

export default Navbar

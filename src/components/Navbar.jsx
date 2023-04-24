import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartTotal } from '../fetures/cartSlice' 

function Navbar() {

    const {cart,totalQuantity} = useSelector((state)=>state.allCard)

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCartTotal())
    },[cart])
  return (
   <>
   <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Link to="/">
                <img src="/img/icon.png" className=" w-24" alt=""/></Link>
                <span className="ml-3 text-xl cursor-pointer">Food Store</span>
                
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 cursor-pointer hover:text-gray-900">Home</a>
                <a className="mr-5 cursor-pointer hover:text-gray-900">Shop</a>
                <a className="mr-5 cursor-pointer hover:text-gray-900">Blog</a>
                <a className="mr-5 cursor-pointer hover:text-gray-900">Contact</a>
            </nav>
            <button
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 bg-lime-400 ">
                    <Link to="/cart">Cart({totalQuantity})</Link>
             
            </button>
        </div>
    </header>


    







    
   </>
  )
}

export default Navbar
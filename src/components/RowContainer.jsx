import React,{useEffect,useRef, useState} from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import {motion} from 'framer-motion'
import NotFound from '../imgs/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const RowContainer = ({flag,data,scrollValue}) => {
    console.log(data)

    const rowContainer=useRef()
    const [{cartItems},dispatch]=useStateValue()
    const [items,setItems]=useState([])

    const addtocart=()=>{
        
        dispatch({
            type:actionType.SET_CARTITEMS,
            cartItems:items
        })
        localStorage.setItem("cartItems",JSON.stringify(items))
    }

    useEffect(()=>{
        rowContainer.current.scrollleft +=scrollValue
    },[scrollValue])

    useEffect(()=>{
        addtocart()
    },[items])

  return (
    <div
     ref={rowContainer}   
     className={`w-full flex items-center gap-3  my-12 scroll-smooth ${flag? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"}`}>
        {data && data.length>0 ? (data.map(item=>(
            <div key={ item?.id} 
            className="w-275 h-[200px] min-w-[300px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relativ">

                <div className="w-full flex justify-between items-center">
                    <motion.div whileHover={{scale:1.2}} className="w-40 h-40 -mt-1 drop-shadow-2xl">
                        <motion.img  
                        src={item?.imageURL}
                        alt=""
                        className="w-full h-full"
                        />
                    </motion.div>
                    <motion.div whileTap={{scale:0.75}} 
                        className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                        onClick={()=>setItems([...cartItems,item])}
                        >
                        <MdShoppingBasket  className="text-white" />
                    </motion.div>
                </div>
                <div className="w-full flex flex-col  items-end justify-end -mt-9"> 
                    <p className="text-textColor font-semibold text-base md:text-md">{item?.titel}</p>
                    <p className="mt-1 text-sm text-gray-500">{item?.calories}</p>
                    <div className="flex items-center gap-8">
                        <p className="text-lg text-headingColor font-semibold">
                            <span className="text-sm text-red-500">$</span> {item?.price}
                        </p>
                    </div>
                </div>
            </div>
        ))
        ):(
            <div className="w-full flex flex-col items-center justify-center">
                <img src={NotFound} className="h-300" />
                <p className='text-xl text-textColor font-semibold my-2'>Items Not Available</p>
            </div>
        )
        }
      
    </div>
  )
}

export default RowContainer

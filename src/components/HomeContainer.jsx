import React from 'react'
import Delivery from '../imgs/delivery.png'
import HeroBg from '../imgs/heroBg.png'
import { heroData } from '../utils/data'

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="p-4 flex-1 flex flex-col items-start  justify-center gap-6 md:w-[80%]">
        <div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
          <div className="w-6 h-6 rounded-full bg-white overflow-hidden drop-shadow-xl">
              <img src={Delivery} alt="delivery" className='w-full h-full object-contain'/>
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[4.5rem]">
          Fastest Delivery in <span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
        </p>
        <p className="text-base text-textColor text-center md:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem tempore ad, ipsam quae dignissimos nulla ab. Porro corrupti, deserunt blanditiis similique eos, veniam nam veritatis sunt ex in quos odio?
        </p>

        <button type="button" className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img src={HeroBg} alt="hero-bg" className="ml-auto h-420 w-full lg:w-auto lg:h-650"/>

        <div className="w-full h-full absolute flex items-center justify-center lg:px-32 py-4 top-0 left-0 gap-4 flex-wrap">
            {heroData && 
             heroData.map(n=>(
                <div key={n.id} className="lg:w-150 p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center  drop-shadow-lg">
                    <img src={n.image} alt="I1" className="w-20 -mt-10 lg:w-40 lg:-mt-20"/>
                    <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{n.name}</p>
                    <p className="text-[12px] lg:text-sm font-semibold text-lighttextGray py-1 lg:py-3">{n.descp}</p>
                    <p className="text-sm text-headingColor font-extrabold">
                        <span className="text-xs text-red-600">$</span> {n.price}
                    </p>
                </div>
            ))
            }

        </div>
      </div>
    </section>
  )
}

export default HomeContainer

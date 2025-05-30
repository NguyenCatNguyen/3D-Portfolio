import React from 'react'
import { counterItems } from "../constants";
import CountUp from 'react-countup';



const AnimatedCounter = () => {
    
  return (
    <div id="experience" className="padding-x-lg xl:mt-0 mt-32 pt-20">
        <div className="mx-auto grid-4-cols">
            {counterItems.map((item, i) => (
                <div
                key={i}
                className="bg-zinc-900 rounded-lg p-5 sm:p-10 flex flex-col justify-center">
                    <div className="counter-number text-white-50 text-3xl sm:text-5xl font-bold mb-2">
                         <CountUp suffix={item.suffix} end={item.value} duration={3} />
                    </div>
                    <div className="text-white-50 text-md sm:text-lg">{item.label}</div>

                </div>
            ))}

        </div>

    </div>
  )
}

export default AnimatedCounter
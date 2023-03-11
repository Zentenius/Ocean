import React from 'react'
import ocean from '../public/ocean.mp4'
import { TypeAnimation } from 'react-type-animation'
import { motion, useScroll, useTransform } from 'framer-motion'

import { fadeIn } from './variants'


function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full object-cover h-full' src={ocean} autoPlay loop muted></video>
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <motion.h1 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='text-9xl font-bold'>The Ocean.</motion.h1>
            <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            ><TypeAnimation 
                                sequence={[
                                    'One of the Worlds many Wonders',
                                    2000,
                                    
                                ]}
                                speed={20}
                                className='text-white text-2xl mt-2'
                                wrapper='h2'
                                
                            />
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
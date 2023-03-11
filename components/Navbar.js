import React from 'react'

import { motion } from 'framer-motion'

import { fadeIn } from './variants'

function Navbar() {
  return (
   <div className='flex w-full justify-between items-center h-24 mx-auto px-24 text-white absolute z-10 '>
        <motion.img 
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        src='https://media.discordapp.net/attachments/937139620368511029/1076597310374547576/image_2023-02-18_150526163-removebg-preview.png' alt='logo' className='w-20'/>
        <motion.ul 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className='flex items-center'>
            <li className='p-4 text-[15px]'>Definition</li>
            <li className='p-4 text-[15px]'>Oceans</li>
            <li className='p-4 text-[15px]'>Idk</li>
            <li><button className='bg-white text-black font-bold px-2 rounded-lg text-[12px] h-9 uppercase '>Get Started</button></li>
            
        </motion.ul>
   </div>
  )
}

export default Navbar
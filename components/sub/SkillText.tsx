"use client";
import React from 'react'
import {motion} from "framer-motion"
import { SparklesIcon } from '@heroicons/react/24/solid';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-white text-[15px]">
            Apps used to create Projects
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='text-[30px] text text-white font-medium mt-[10px] text-center mb-[15px]'
          >
            Making apps with modern technologies & learning new ones everyday
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
          Making mistakes everyday is how you learn
        </motion.div>
    </div>
  )
}

export default SkillText
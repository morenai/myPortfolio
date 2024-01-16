import Image from 'next/image'
import React from 'react'


interface Props {
  src: string
  title: string
  description: string
}

const ProjectCard = ({src, title, description}: Props) => {
  return (
    <div className='boxy relative overflow-hidden rounded-lg shadow-lg border-[#2a0e61]'> 

      <Image
        src={src}
        alt="project image"
        width={500}
        height={500}
        className="box w-full h-full object-cover"
      />

      <div className='relative p-4'>
      <h1 className='text-2xl font-semibold text-white'>{title}</h1>
      <p className='mt-2 text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
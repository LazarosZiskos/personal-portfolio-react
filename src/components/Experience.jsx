import React from 'react'
import html from "../assets/portfolioIcons/html.png"
import css from "../assets/portfolioIcons/css.png"
import Javascript from "../assets/portfolioIcons/Javascript.png"
import nextjs from "../assets/portfolioIcons/nextjs.png"
import react from "../assets/portfolioIcons/react.jpg"
import tailwind from "../assets/portfolioIcons/tailwind.png"
import mongodb from "../assets/portfolioIcons/mongodb.png"
import github from "../assets/portfolioIcons/github.png"


export const Experience = () => {

    const experiences = [ 
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
       
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },

        {
            id: 3,
            src: Javascript,
            title: "JAVASCRIPT",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: nextjs,
            title: "NEXT JS",
            style: "shadow-white"
        },
        {
            id: 5,
            src: react,
            title: "REACT",
            style: "shadow-blue-600"
        },
        {
            id: 6,
            src: tailwind,
            title: "TAILWIND",
            style: "shadow-sky-400"
        },
        {
            id: 7,
            src: mongodb,
            title: "MONGODB",
            style: "shadow-green-500"
        },
        {
            id: 8,
            src: github,
            title: "GITHUB",
            style: "shadow-gray-400"

        },
        
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>
            </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {experiences.map(({id, src, title, style}) => (
                <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + " " + style}>
                <img src={src} className='w-20 h-20 mx-auto'/>
                <p className='mt-4 text-white'>{title}</p>
                </div>
            ))}
            
            
        </div>

    </div>
  )
}

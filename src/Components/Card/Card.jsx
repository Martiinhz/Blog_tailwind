import React from 'react'

export const Card = ({img,date, description}) => {
  return (
    <div className='flex p-5 items-center'>
        <div className='w-1/3'>
        <img className='pr-2' src={img} />
        </div>
        <div className='w-3/3'>
        <h1>{date}</h1>
        <p>{description}</p>
        </div>
    </div>
  )
}

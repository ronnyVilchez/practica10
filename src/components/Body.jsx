import React from 'react'
import Galery from './Galery'
import CardInf from './Card'

export const Body = () => {
  return (
    <div className=' flex  sm:flex-row flex-col justify-center sm:mt-[4rem]'>
    <Galery/>
    <CardInf/>
    </div>
  )
}

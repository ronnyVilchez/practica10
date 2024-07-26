import React from 'react'
import Galery from './Galery'
import CardInf from './Card'

export const Body = () => {
  return (
    <div className=' flex flex-row justify-center mt-[4rem]'>
    <Galery/>
    <CardInf/>
    </div>
  )
}

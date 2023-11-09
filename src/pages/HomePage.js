import React from 'react'
import CardUi from '../Component/CardUi'
import { products } from '../dummy/products'

const HomePage = () => {
  return (
    <div className='p-5 grid grid-cols-3 gap-2 items-start'>
      {products.map((product) => {
        return <CardUi key={product._id} product={product} />
      })}

    </div>
  )
}

export default HomePage

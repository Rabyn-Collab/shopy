import React from 'react'
import CardUi from '../Component/CardUi'
import { products } from '../dummy/products'
import { useGetProductsQuery } from '../features/productApi'

const HomePage = () => {
  const { isLoading, isError, data, error } = useGetProductsQuery();
  if (isLoading) {

  }

  console.log(data);
  return (
    <div className='p-5 grid grid-cols-3 gap-2 items-start'>
      {data && data.map((product) => {
        return <CardUi key={product._id} product={product} />
      })}

    </div>
  )
}

export default HomePage

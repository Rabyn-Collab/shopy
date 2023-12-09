import React from 'react'
import CardUi from '../Component/CardUi'
import { products } from '../dummy/products'
import { useGetProductsQuery } from '../features/productApi'
import { useGetCryptoNewsQuery, useGetSearchNewsQuery } from '../features/newsApi'

const HomePage = () => {

  const { isLoading: load, isError: err, data: dat, error: errMsg } = useGetSearchNewsQuery({
    lang: 'en',
    search: 'hollywood'
  });
  const { isLoading, isError, data, error } = useGetProductsQuery();
  if (isLoading) {

  }




  return (
    <div className='p-5 grid grid-cols-3 gap-2 items-start'>

      {dat && dat.news.map((n, i) => {
        return <div key={i}>
          <h1>{n.Title}</h1>
          <img src={n.Image} alt="" />
        </div>
      })}
      {/* {data && data.map((product) => {
        return <CardUi key={product._id} product={product} />
      })} */}

    </div>
  )
}

export default HomePage

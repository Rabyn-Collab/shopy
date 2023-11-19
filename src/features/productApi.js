import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: '/api/products'
      })
    }),



  })
});


export const { useGetProductsQuery } = productApi;
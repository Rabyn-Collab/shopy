import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => ({
        url: '/api/products'
      }),
      providesTags: ['Products']
    }),

    addProduct: builder.mutation({
      query: (query) => ({
        url: '/api/createOrder',
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Products']
    }),



  })
});


export const { useGetProductsQuery, useAddProductMutation } = productApi;
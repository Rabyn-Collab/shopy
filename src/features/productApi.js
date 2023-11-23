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

    getProductById: builder.query({
      query: (id) => ({
        url: `/api/product/${id}`
      }),
      providesTags: ['Products']
    }),

    addProduct: builder.mutation({
      query: (query) => ({
        url: '/api/createProduct',
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Products']
    }),

    updateProduct: builder.mutation({
      query: (query) => ({
        url: `/api/productUpdate/${query.id}`,
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'PATCH'
      }),
      invalidatesTags: ['Products']
    }),

    removeProductById: builder.mutation({
      query: (query) => ({
        url: `/api/product/${query.id}`,
        headers: {
          Authorization: query.token
        },
        method: 'DELETE'
      }),

      invalidatesTags: ['Products']
    }),


  })
});


export const { useGetProductsQuery, useAddProductMutation, useGetProductByIdQuery, useUpdateProductMutation, useRemoveProductByIdMutation } = productApi;
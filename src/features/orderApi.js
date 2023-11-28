import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';


export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Orders'],
  endpoints: (builder) => ({

    getOrders: builder.query({
      query: (token) => ({
        url: '/api/orders',
        headers: {
          Authorization: token
        },
      }),
      providesTags: ['Orders']
    }),

    getOrderByUser: builder.query({
      query: (token) => ({
        url: '/api/user/order',
        headers: {
          Authorization: token
        },
      }),
      providesTags: ['Orders']
    }),

    getOrderById: builder.query({
      query: (query) => ({
        url: `/api/order/${query.id}`,
        headers: {
          Authorization: query.token
        },
      }),
      providesTags: ['Orders']
    }),

    addOrder: builder.mutation({
      query: (query) => ({
        url: '/api/createOrder',
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Orders']
    }),




  })
});


export const { useAddOrderMutation, useGetOrderByIdQuery, useGetOrdersQuery, useGetOrderByUserQuery } = orderApi;
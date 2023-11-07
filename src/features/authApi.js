import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),


  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (data) => ({
        url: '/api/userLogin',
        body: data,
        method: 'POST'
      })
    }),

    userSignUp: builder.mutation({
      query: (data) => ({
        url: '/api/userRegister',
        body: data,
        method: 'POST'
      })
    }),

  })
});


export const { useUserLoginMutation, useUserSignUpMutation } = authApi;
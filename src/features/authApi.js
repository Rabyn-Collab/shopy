import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './constant';


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  tagTypes: ['User'],
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

    userUpdate: builder.mutation({
      query: (query) => ({
        url: '/api/userUpdate',
        body: query.body,
        method: 'PATCH',
        headers: {
          Authorization: query.token
        },
      }),
      invalidatesTags: ['User']
    }),

  })
});


export const { useUserLoginMutation, useUserSignUpMutation, useUserUpdateMutation } = authApi;
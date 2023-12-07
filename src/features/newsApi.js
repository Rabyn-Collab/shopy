import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://news67.p.rapidapi.com/v2' }),

  endpoints: (builder) => ({


    getCryptoNews: builder.query({
      query: (query) => ({
        url: '/crypto',
        headers: {
          'X-RapidAPI-Key': '9cac60b351msh530cc0e2b8d88d2p1f9661jsn2c0049707e46',
          'X-RapidAPI-Host': 'news67.p.rapidapi.com'
        }
      })
    }),

    getSearchNews: builder.query({
      query: (query) => ({
        url: '/topic-search',
        params: {
          languages: query.lang,
          search: query.search
        },
        headers: {
          'X-RapidAPI-Key': '9cac60b351msh530cc0e2b8d88d2p1f9661jsn2c0049707e46',
          'X-RapidAPI-Host': 'news67.p.rapidapi.com'
        }
      })
    })

  })
});


export const { useGetCryptoNewsQuery, useGetSearchNewsQuery } = newsApi;
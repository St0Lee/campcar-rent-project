import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advertsApi = createApi({
    reducerPath: "adverts",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://665ad3dc003609eda45eefca.mockapi.io/api" 
    }),
    tagTypes: ["adverts"],
    endpoints: (builder) => ({
        getAdverts: builder.query({
            query: () => ({
                method: "GET",
                url: "/adverts"
            }),
            providesTags: ["adverts"]
        })
    }) 
})

export const {useGetAdvertsQuery} = advertsApi;
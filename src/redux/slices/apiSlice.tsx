import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v3" }),
    tagTypes: ["fruits"],
    endpoints: (build) => ({}) 
})
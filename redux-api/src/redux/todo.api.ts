// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Todo {
  id: number,
  userId: number,
  title: string,
  body: string,
  completed?: boolean
}

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://server.dev.curbie.ca/purchase',
    // prepareHeaders: (headers, { getState }) => {
    //   const state = getState()
    //   console.log("my state", state);


    //   return new Headers({
    //     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikp1biBHdW8iLCJ1c2VySUQiOjYzLCJlbWFpbCI6Imp1bkBjdXJiaWUuY2EiLCJpYXQiOjE2MjMyMTA4NzksImV4cCI6MTYyMzI1NDA3OX0.-QkwlLrkNnLd5EKa0Hzu8SGAjXlQVmTCn5jM10qWiDY",
    //     Accept: 'application/json',
    //     Origin: '*',
    //   })
    // }
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => ({
        url: ``,
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikp1biBHdW8iLCJ1c2VySUQiOjYzLCJlbWFpbCI6Imp1bkBjdXJiaWUuY2EiLCJpYXQiOjE2MjMyMTA4NzksImV4cCI6MTYyMzI1NDA3OX0.-QkwlLrkNnLd5EKa0Hzu8SGAjXlQVmTCn5jM10qWiDY",
        }
      }),
    }),
    getTodo: builder.query<Todo, string>({
      query: (todo) => `todos/${todo}`,
    }),
    getDummy: builder.query<string, string>({
      queryFn: (dummy) => {
        return { data: dummy }
      }
    }),
    createTodo: builder.mutation<Todo, Todo>({
      query: (todo) => ({
        url: `posts`,
        method: "POST",
        body: todo
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTodosQuery, useCreateTodoMutation, useGetDummyQuery } = todoApi
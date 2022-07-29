import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "./todo.slice";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos/",
  }),
  tagTypes: ["todos", "todo"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => ({ url: "/" }),
      providesTags: ["todos"],
    }),
    getTodo: builder.query<Todo, number>({
      query: (id) => ({ url: `/${id}` }),
      providesTags: (result, error, id) => {
        return [{ type: "todo", id: id }, "todo"];
      },
    }),
  }),
});

export const {
  useGetTodosQuery,
  useLazyGetTodoQuery,
  useLazyGetTodosQuery,
  useGetTodoQuery,
} = todoApi;

import React, { useState } from 'react'
import { useCreateTodoMutation, useGetAllTodosQuery, useGetDummyQuery } from '../redux/todo.api'

export default function Todos() {
  const [skip, setSkip] = useState(true)

  const { data, error, isLoading } = useGetAllTodosQuery(undefined, { skip })
  const [createTodo, { data: createdTodo }] = useCreateTodoMutation()
  const { data: dummyData } = useGetDummyQuery("dummy")
  console.log(data);

  console.log(createdTodo);

  console.log(dummyData);


  if (isLoading) {
    return <div>is loading</div>
  } else {
    return <div>got data

      <button
        onClick={() => {
          createTodo({
            id: 1,
            userId: 2,
            title: "ssss",
            body: "something"
          })
        }}
      >create a todo</button>

      <button
        onClick={() => {
          setSkip(false)
        }}
      >start fetching</button>
    </div>
  }

}
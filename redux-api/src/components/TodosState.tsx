import React from 'react'
import { useAppSelector } from '../hooks'

export function TodoState (){
  const todoData = useAppSelector(state => state.todoApi.queries.getAllTodos?.data)
}
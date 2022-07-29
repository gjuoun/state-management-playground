import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./todo.api";
import todoReducer from "./todo.slice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,

    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    todoApi.middleware,
  ],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

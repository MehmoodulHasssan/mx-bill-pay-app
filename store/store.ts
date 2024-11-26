import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import pusherReducer from './slices/pusherSlice';
import currentPageReducer from './slices/currentPageSlice';
// ...

export const store = configureStore({
  reducer: {
    pusher: pusherReducer,
    auth: authReducer,
    currPage: currentPageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

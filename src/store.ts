import { configureStore } from '@reduxjs/toolkit';
import { StoreTypes } from 'CustomCommons';
import reducer from './reducers';

import AxiosClient from './config/AxiosClient';

export const getStore = () => configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            thunk: { extraArgument: { apiClient: AxiosClient() } },
            serializableCheck: false,
        })
    ),
});

const store = getStore();

declare global {
    interface Window {
        store?: StoreTypes,
        __chr__store__?: any,
    }
}

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

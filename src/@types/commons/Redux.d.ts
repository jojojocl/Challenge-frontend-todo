import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { AxiosInstance } from 'axios';
import { TodoStateTypes } from '../todo/Reducer';

export interface StoreTypes {
    todo: TodoStateTypes
}
export interface ThunkApiTypes extends BaseThunkAPI {
    extra: {
        apiClient: AxiosInstance,
    }
}

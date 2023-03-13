import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiTypes } from 'CustomCommons';
import { AxiosResponse } from 'axios';

import { GET_TODO_LIST } from '../../store-types';

export const getTodoList = createAsyncThunk(
    GET_TODO_LIST,
    (params, { extra: { apiClient }, rejectWithValue }: ThunkApiTypes) => {
        return apiClient.get('static-todos-api/todos')
            .then((response: AxiosResponse) => {
                return response.data;
            }).catch(({ response }: any) => {
                return rejectWithValue(response.data);
            });
    },
);
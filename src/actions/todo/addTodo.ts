import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiTypes } from 'CustomCommons';
import { AxiosResponse } from 'axios';

import { ADD_TODO } from '../../store-types';

export const addTodo = createAsyncThunk(
    ADD_TODO,
    (data, { extra: { apiClient }, rejectWithValue }: ThunkApiTypes) => {
        return apiClient.post('static-todos-api/todos', data)
            .then((response: AxiosResponse) => {
                return response.data;
            }).catch(({ response }: any) => {
                return rejectWithValue(response.data);
            });
    },
);
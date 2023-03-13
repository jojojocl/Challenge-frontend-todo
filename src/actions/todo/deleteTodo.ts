import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiTypes } from 'CustomCommons';
import { AxiosResponse } from 'axios';

import { DELETE_TODO } from '../../store-types';

export const deleteTodo = createAsyncThunk(
    DELETE_TODO,
    ({ id }: { id: number }, { extra: { apiClient }, rejectWithValue }: ThunkApiTypes) => {
        return apiClient.delete(`static-todos-api/todos/${id}`)
            .then((response: AxiosResponse) => {
                return response.data;
            }).catch(({ response }: any) => {
                return rejectWithValue(response.data);
            });
    },
);

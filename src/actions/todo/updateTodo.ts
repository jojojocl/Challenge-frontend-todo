import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiTypes } from 'CustomCommons';
import { AxiosResponse } from 'axios';

import { UPDATE_TODO } from '../../store-types';

type updateParamsTypes = {
    id: number
    data: { [key: string]: any }
}

export const updateTodo = createAsyncThunk(
    UPDATE_TODO,
    ({ id, data }: updateParamsTypes, { extra: { apiClient }, rejectWithValue }: ThunkApiTypes) => {
        return apiClient.patch(`static-todos-api/todos/${id}`, data)
            .then((response: AxiosResponse) => {
                return response.data;
            }).catch(({ response }: any) => {
                return rejectWithValue(response.data);
            });
    },
);

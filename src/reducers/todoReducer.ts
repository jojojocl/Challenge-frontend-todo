import { createSlice } from '@reduxjs/toolkit';

import { TodoStateTypes } from 'CustomTodo';

import {
    getTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
} from 'actions/todo';

const initialState: TodoStateTypes = {
    todoList: [],
    todo: {
        id: 0,
        label:'',
        checked: false
    },
    loading: false,
    error: '',
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            // Get Todo
            .addCase(getTodoList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTodoList.fulfilled, (state, action) => {
                state.todoList = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getTodoList.rejected, (state, action) => {
                state.notificationList = [];
                state.error = action.error.message;
                state.loading = false;
            })
            // Add Todo
            .addCase(addTodo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todoList.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(addTodo.rejected, (state, action) => {
                state.notificationList = [];
                state.error = action.error.message;
                state.loading = false;
            })
            // Update Todo
            .addCase(updateTodo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.todoList.splice(
                    state.todoList.findIndex((todo: any) => todo.id === action.payload.id),
                    1,
                    action.payload,
                )
                state.loading = false;
                state.error = null;
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.notificationList = [];
                state.error = action.error.message;
                state.loading = false;
            })
            // Delete Todo
            .addCase(deleteTodo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                const { id } = action.meta.arg;
                const index = state.todoList.findIndex((todo: any) => todo.id === id);

                if (index !== -1) {
                    state.todoList.splice(
                        index,
                        1,
                    );
                }
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.notificationList = [];
                state.error = action.error.message;
                state.loading = false;
            })
            // Default
            .addDefaultCase((state) => state);
    },
});

export default todoSlice;
import React, { useState, useEffect } from "react";

import {
    Button ,
    TextField
} from '@mui/material';

import { withTodo, WithTodoPropsTypes } from '../../containers/TodoContainer';

const TodoForm = ({
    addTodo,
}: WithTodoPropsTypes) => {
    const [valueTodo, setValueTodo] = React.useState<any>('');

    const handleChangeValue = (e: any) => {
        setValueTodo(e.target.value);
    };

    const handleSubmitTodo = (e: any) => {
        e.preventDefault();
        if (valueTodo) {
            addTodo({
                label: valueTodo,
                checked: false,
            })
        } else {
            alert('El campo no debe estar vacío');
        }
    };

    return (
        <div className="main-div">
            <div className="child-div" >
                <form onSubmit={handleSubmitTodo}>
                    <TextField
                        label="add something to do"
                        variant="outlined"
                        value={valueTodo}
                        onChange={handleChangeValue}
                    />
                    <Button variant="contained" type="submit">
                        Add Todo
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default withTodo(TodoForm);
import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../state/reducer';
import { GoPlus } from 'react-icons/go';
import { motion } from 'framer-motion';


const mapStateToProps = (state) => {
    return {
        todo: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
}

const Todo = (props) => {

    const [todo, setTodo] = useState("");


    const handleChange = (e) => {

        setTodo(e.target.value);
    };

    const add = () => {
        if (todo === '') {
            alert("Input is Empty");
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            })
            setTodo("");
        }
    }
    console.log("props from state", props);

    return (
        <div className='flex flex-row m-2 justify-center'>
            <Input
                variant="outlined"
                onChange={e => handleChange(e)}
                className='w-72 lg:w-96 min-w-[15rem] max-h-[2.5rem] rounded-md px-4 py-2 self-center outline-none focus:border-purple-900 border-2 border-solid'
                value={todo}
            />

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='ml-4 bg-purple-900 text-white p-3 rounded-full outline outline-2 outline-slate-50 shadow-xl'
                onClick={() => add()}
            >
                <GoPlus />
            </motion.button>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo);
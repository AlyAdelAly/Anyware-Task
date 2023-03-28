import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodos, completeTodos, removeTodos, updateTodos } from '../state/reducer';
import TodoItem from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion';

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
};

const DisplayTodos = (props) => {
    const [sort, setSort] = useState("active")
    return (
        <div className='mt-12 flex flex-col items-center'>
            <div className='mb-8'>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='bg-slate-200 text-black rounded-full py-3 px-5 ml-4 cursor-pointer border-none focus:outline-none' onClick={() => setSort("active")}>Active</motion.button>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='bg-slate-200 text-black rounded-full py-3 px-5 ml-4 cursor-pointer border-none focus:outline-none' onClick={() => setSort("completed")}>Completed</motion.button>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='bg-slate-200 text-black rounded-full py-3 px-5 ml-4 cursor-pointer border-none focus:outline-none' onClick={() => setSort("all")}>All</motion.button>
            </div>
            <ul className='list-none flex self-start flex-wrap ml-10 lg:ml-20'>
                <AnimatePresence>
                    {props.todo.length > 0 && sort === "active"
                        ? props.todo.map((item) => {
                            return (
                                item.completed === false && (
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}
                                    />
                                )
                            );
                        })
                        : null}

                    {props.todo.length > 0 && sort === "completed"
                        ? props.todo.map((item) => {
                            return (
                                item.completed === true && (
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo}
                                    />
                                )
                            );
                        })
                        : null}

                    {props.todo.length > 0 && sort === "all"
                        ? props.todo.map((item) => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            );
                        })
                        : null}
                </AnimatePresence>
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
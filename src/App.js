import './App.css';
import DisplayTodos from './components/DisplayTodos';
import Todo from './components/Todo';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className='mt-12 flex flex-col'>
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className='text-4xl p-6 inline text-center mb-8 head'
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todo />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;

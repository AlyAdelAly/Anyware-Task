import './App.css';
import History from './pages/History';
import Login from './pages/Login';
import Search from './pages/Search';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import Register from './pages/Register';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
         <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

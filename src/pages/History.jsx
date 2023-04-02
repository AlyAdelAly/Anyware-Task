import { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import axios from 'axios';
import HistoryData from '../components/historyData';


const History = () => {
  const [history, setHistory] = useState([]);
  const [filterData, setFilterData] = useState({});

  const getDataHistory = async () => {
    try {
      const url = "http://localhost:8080/historyData";
      const { data } = await axios.get(url);
      setHistory(data);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getDataHistory();
  }, []);

  const handleFilterChange = (event) => {
    const newFilter = {
      ...filterData,
      [event.target.name]: event.target.value,
    };
    setFilterData(newFilter);
  }

  const filteredHistory = history.filter((item) => {
    let checkFilter = true;
    if (filterData.number && !item.number.includes(filterData.number)) {
      checkFilter = false;
    }

    if (filterData.from && new Date(item.createdAt) < new Date(filterData.from)) {
      checkFilter = false;
    }
    if (filterData.to && new Date(item.createdAt) > new Date(filterData.to)) {
      checkFilter = false;
    }
    return checkFilter;
  });

  return (
    <div className='flex flex-col justify-center items-center'>
      <NavBar />

      <h2 className='text-blue-600 text-3xl font-bold pb-12'>Data History</h2>
      <div className='flex flex-col md:flex-row justify-center text-white'>
        <label className='md:mr-8' >
          Phone Number:
          <input
            type="text"
            name="number"
            value={filterData.number || ''}
            onChange={handleFilterChange}
            className='mb-2 p-2 rounded-lg bg-slate-600 mt-2 focus:border-blue-500 focus:outline-none' />
        </label>
        <label className='md:mr-8'>
          From:
          <input
            type="date"
            name="from"
            value={filterData.from || ''}
            onChange={handleFilterChange}
            className='mb-2 p-2 rounded-lg bg-slate-600 mt-2 focus:border-blue-500 focus:outline-none' />
        </label>
        <label>
          To:
          <input
            type="date"
            name="to"
            value={filterData.to || ''}
            onChange={handleFilterChange}
            className='mb-2 p-2 rounded-lg bg-slate-600 mt-2 focus:border-blue-500 focus:outline-none' />
        </label>
      </div>
      <div className='flex flex-row flex-wrap justify-center text-slate-300'>
        {filteredHistory.map((item,index) => (
          <div key={index} className='flex flex-col justify-center items-center m-3 bg-blue-600 rounded-md'>
           <HistoryData item={item} /> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
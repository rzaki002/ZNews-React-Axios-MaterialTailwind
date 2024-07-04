import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllData from '../AllData/AllData';

export default function Data() {
    const [Data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://api-creator-server.vercel.app/news-data')
        .then(function (res) {
            setData(res.data)
          });
    },[])
    console.log(Data)
  return (
    <div className='data_content py-6 lg:py-10'>
        <h1 className='text-3xl lg:text-left text-center lg:text-5xl font-boldc dark:text-white font-serif'>All News</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
          {
            Data.map(data =><AllData key={data._id} data={data}></AllData>)
          }
        </div>
    </div>  
  )
}

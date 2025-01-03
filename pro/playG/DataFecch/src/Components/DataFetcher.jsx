
import axios from 'axios';
import React from 'react'
import { useEffect  ,useState} from 'react';


const DataFetcher = () => {
    const [data,setData]= useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log('feched data: ',response.data);
            
            setData(response.data)
            setLoading(false);

        })
        .catch(error=>{
            console.error('Error fetching data:',error);
            
        })
    },[])

    if(loading) return <p>Loading....</p>;
  return (
    <div>
      <h2>Fetch Data</h2>
      <ul>
        {data.map((item)=>{
            <li key={item.id}>
                <h3>{item.title}</h3>
                <p> {item.body} </p>
            </li>
        })}
      </ul>
    </div>
  )
}

export default DataFetcher;





























/*import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const DataFetcher = () => {
    const [data,setdata]= useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=> response.json())
        .then(json=>{
            setdata(json);
            setLoading(false);
        })
        .catch(error => console.error('Error fetching data:',error))
    },[])

    if(loading) return <p>Loading....</p>;
  return (
    <div>
      <h2>Fetch Data</h2>
      <ul>
        {data.map((item)=>{
            <li key={item.id}>
                <h3>{item.title}</h3>
                <p> {item.body} </p>
            </li>
        })}
      </ul>
    </div>
  )
}

export default DataFetcher;
*/
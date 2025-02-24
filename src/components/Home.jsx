import React, { useEffect, useState } from 'react'
import { commonApi } from '../services/ConnectionAPI'
import TableData from './TableData'

const Home = () => {

    const [data,setData]=useState([])

    const fetchData=async()=>{
        try {
            const serverResponce=await commonApi()
            setData(serverResponce.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])


  return (
    <div>
      <TableData data={data}/>
    </div>
  )
}

export default Home

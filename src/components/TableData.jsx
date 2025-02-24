import React from 'react'

const TableData = ({data}) => {
  
  return (
    <div className='container mt-3'>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">FullName</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    {data.length>0?data.map((a,index)=>(
         <tr key={index}>
         <th scope="row">{a.id}</th>
         <td>{`${a.name.firstname} ${a.name.lastname}`}</td>
         <td>{a.email}</td>
         <td>{a.password}</td>
       </tr>
    )):"No data found!"}
   
  </tbody>
</table>
    </div>
  )
}

export default TableData

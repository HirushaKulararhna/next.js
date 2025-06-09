import React from 'react'

const page = ({params}) => {
    console.log(params);
  return (
    <div>
      <h1>Catch all routes</h1>
      {params.dpath.map((item)=>{
        return (
        <li key={item}>{item}</li>
      )})}
    </div>
  )
}

export default page

{/* Catch all routes */ }

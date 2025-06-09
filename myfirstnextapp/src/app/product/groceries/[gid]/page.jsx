import React from 'react'

const page = ({params}) => {
  return (
    <div>
      <h1>groceries item {params.gid}</h1>
    </div>
  )
}

export default page

{/*Dynamic Routes*/ }

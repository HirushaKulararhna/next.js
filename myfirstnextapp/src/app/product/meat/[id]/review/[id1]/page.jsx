import React from 'react'

const page = ({params}) => {
  return (
    <div>
        {/*nested Dynamic Routes*/ }
      <h1>meat item {params.id} review {params.id1}</h1>
    </div>
  )
}

export default page

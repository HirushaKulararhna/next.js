import React from 'react'
import Link from 'next/link'


const vegis = [
  {
    id:1,
    veginame:"carrot"
  },
  {
    id:2,
    veginame:"potato"
  },
  {
    id:3,
    veginame:"onion"
  },
  {
    id:4,
    veginame:"tomato"
  },
  {
    id:5,
    veginame:"capsicum"
  }
]


const page = () => {
  return (
    <div>
      <h1>Product page</h1>
      
      <ul>
      {vegis.map((vegi) => {
        return (
          <li key={vegi.id}><Link href = {`/product/vegis/${vegi.veginame}`}>{vegi.veginame}</Link></li>
        )
      })}
      </ul>
    </div>
  )
}

export default page

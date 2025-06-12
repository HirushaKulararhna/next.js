import React from 'react'
import Link from 'next/link'

const page = ({params}) => {
  return (
    <div>
      <h1>vegis item {params.vid}</h1>
      <h2><Link href="/product">Back</Link></h2>
    </div>
  )
}

export default page

{/*Dynamic Routes*/ }
import React from 'react'
import Link from 'next/link'
import styles from "./contact.module.css"

const page = () => {
  return (
    <div>
      <h1>Contact us page</h1>
      <h2><Link href = "/" className={styles.a}>Back to Home</Link></h2>
    </div>
  )
}

export default page

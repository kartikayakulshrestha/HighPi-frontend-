import React from 'react'
import { useSelector } from 'react-redux'
const main = () => {
  const email = useSelector((state) => state.counter.email)
  return (
    <div>
      hey main
      {email}
    </div>
  )
}

export default main

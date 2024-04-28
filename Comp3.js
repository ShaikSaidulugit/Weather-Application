import { useContext } from 'react'
import React from 'react'
import {context} from './App'
export default function Comp3() {
  const text=useContext(context)
  return (
    <div>
      {text}
    </div>
  )
}

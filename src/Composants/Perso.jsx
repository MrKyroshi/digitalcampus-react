import React from 'react'
import Fullname from './Fullname'
import Hobbies from './Hobbies'

export default function Perso() {
  return (
    <div>
        <h1 style={{ color : 'aqua' }}>Perso</h1>
        <h2 style={{ color : 'violet' }}>Hi 
            <Fullname firtname= "Sarah" name ="Bella"/>
        </h2>
        <h2 style={{ color : 'pink' }}>
            <Hobbies cinema ="Action" sport ="Courir"/>
        </h2>
    </div>
  )
}

import React from 'react'
import Fullname from './Fullname'

export default function Player() {
   let score = 100
   if (score >= 100){

  return (
    <h1 style={{color : 'green'}} > <Fullname name = 'Dac-Thang'/>  votre score est de {score}, vous a gagné!</h1>    
  )}

  else 
  
  {(
    <h1 style={{color : 'red'}} > <Fullname name = 'Dac-Thang'/>  votre score est de {score} , vous a perdu!</h1>
 )};
}

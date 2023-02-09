import React from 'react'
import logo from '../Composants/Asset/IMG/logo192.png'

export default function Home() {
  return (
    <div className='exoCss1'>
       <h1 style={{backgroundColor: 'pink' ,backgroundImage: `url(${logo})` ,backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat', }}  className='exoCss'>HOME - ExoCss</h1>
        <h1 style={{backgroundColor: 'red',backgroundImage: `url(${logo})` ,backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',}}  className='exoCss'>HOME - ExoCss</h1>
        <h1 style={{backgroundColor: 'be182c',backgroundImage: `url(${logo})` ,backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',}}  className='exoCss'>HOME - ExoCss</h1>
        <h1 style={{backgroundColor: 'f24e1e'}} className='exoCss'>HOME - ExoCss</h1>
        <h1 style={{backgroundColor: 'pink'}} className='exoCss'>HOME - ExoCss</h1>
        <h1 style={{backgroundColor: 'pink'}} className='exoCss'>HOME - ExoCss</h1>
        <h1 style={{backgroundColor: 'pink'}} className='exoCss'>HOME - ExoCss</h1>
    </div>
  )
}

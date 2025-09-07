import React from 'react'
import './Mobile.css'

function Mobile(props) {
  return (
    <>
      <div id='main'>
        <div id="child1">
            <img src={props.image} alt="" />
        </div>

        <div id="child2">
            <h1>{props.name}</h1>
            <ul>
                <li>{props.f1}</li>
                <li>{props.f2}</li>
                <li>{props.f3}</li>
                <li>{props.f4}</li>
                <li>{props.f5}</li>
                <li>{props.f6}</li>
            </ul>
        </div>

        <div id="child3">
            <h1>{props.newPrice}</h1>
            <strike>{props.oldPrice}</strike>

        </div>
      </div>
    </>
  )
}

export default Mobile

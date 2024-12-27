import React from 'react'

const Input = ({children,handleData,name,data}) => {
    function handleOnClick(event){
        handleData({[name]:Number(event.target.value)})
    }

  return (
    <p>
            <label>{children}</label>
            <input type='number' value={data} onChange={handleOnClick} required/>
    </p>
  )
}

export default Input
import React, { Component, useState }  from 'react';
import { Route, Routes } from "react-router-dom"

import propTypes from 'prop-types'
// const [current, setCurrent] = useState('');

const DogIcon = ({name, url}) => {
  return (
    <button className='icon'>
        <img src={url}></img>
        <p>{name}</p>
    </button>
  )
}
DogIcon.propTypes = {
    name: propTypes.string,
    url: propTypes.string
}
export default DogIcon
"use client";

import { React, useState } from 'react'
import data from "./ListData.json"

function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((res) => {
        //if no input the return the original
        if (props.input === '') {
            return res;
        }
        //return the item which contains the user input
        else {
            return res.text.toLowerCase().includes(props.input)
        }
    })

      return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}


export default List
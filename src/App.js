import React, { useState } from 'react'
import SampleData from './SampleData'
import Form from './Form'


export default function App(){
    console.log(SampleData)
    const [ data, setData ] = useState()
    // const data = SampleData
    // form to receive:
    // Title, Description, Price, Quantity, Image

    // Once entered they need to be added to the table specific
        // to the cell they belong.
        // order and sort by price?


    return (
        <div>
            <h1>Hello from the App component!</h1>
            <Form />
            {/* { SampleData.map(item => <Items />)} */}
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import SampleData from './SampleData'
import Form from './Form'


export default function App(){
    // console.log(SampleData)
    const [ data, setData ] = useState([])

    const initState = {
        status: false,
        rowKey: null
    }
    const [ editMode, setEditMode ] = useState(initState)

    const [ itemPrice, setItemPrice ] = useState(null)

    // theData = () => {SampleData.map(dataEntry => setData(dataEntry))}
    
    useEffect(() => {
        // theData()
        setData(SampleData)
    },[])
    
    console.log(data)
//need to addProduct func here


    const onEdit = ({ _id, currentItemPrice }) => {
        setEditMode({
            status: true,
            rowKey: _id
        })
        setItemPrice(currentItemPrice)
    }

    const updateProduct = (_id, newItemPrice) => {
        
    }
    // form to receive:
    // Title, Description, Price, Quantity, Image

    // Once entered they need to be added to the table specific
        // to the cell they belong.
        // order and sort by price?


    return (
        <div>
            <h1>Hello from the App component!</h1>
            {/* <Form addProduct={addProduct}/> */}
            {/* { SampleData.map(item => <Items />)} */}
            {/* product table */}

            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.product}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.image}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
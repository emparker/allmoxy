import react, { useState } from 'react'


export default function Form(props){

    const initInputs = { product: "", description: "", price: "", image: ""}
    const [ inputs, setInputs ] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        props.addProduct(inputs)
        setInputs(initInputs)
    }

    return(
        <div>
            {/* <form>
                <input
                    type="text"
                    placeholder="product"
                    name="product"
                    onChange={}
                    value={}
                />
                <input
                    type="text"
                    placeholder="description"
                    name="description"
                    onChange={}
                    value={}
                />
                <input
                    type="text"
                    placeholder="price"
                    name="price"
                    onChange={}
                    value={}
                />
                <input
                    type="text"
                    placeholder="image"
                    name="image"
                    onChange={}
                    value={}
                />
            </form> */}

            <h2>This is the form component</h2>
        </div>

    )
}
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const saveProduct = async(e) => {
        e.preventDefault();
        await axios.post(`http://localhost:5000/products`,{
            name: name,
            price: price
        })
       navigate('/')
    }
    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                <input  className=" input" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name' />
                </div>
                </div>
                <div className='field'>
                <label className='label'>Price</label>
                <div className='control'>
                <input value={price}  className="input" onChange={(e) => setPrice(e.target.value)} type="text" placeholder='price' />
                </div>
                </div>
                <div className='field'>
                <div className='control'>
                    <button className='button is-primary'>Save</button>
                </div>
                </div>
            </form>
        </div>
    )
}
export default AddProduct
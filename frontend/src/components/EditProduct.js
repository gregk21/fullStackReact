import { useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import axios from  "axios"

const EditProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()


const updateProduct = async(e) => {
    e.preventDefault()
    await axios.patch(`http://localhost:5000/products/${id}`, {
    name: name,
    price: price
})
    navigate('/')
}

useEffect(() => {
    getProductById();
}, []);

const getProductById = async() => {
    const response = await axios.get(`http://localhost:5000/products/${id}`)
    setName(response.data.name)
    setPrice(response.data.price)
}
return (
    <div>
        <form onSubmit={updateProduct}>
            <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" />
            </div>
            </div>

            <div className="field">
            <label className="label">Price</label>
            <div className="control">
                <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="price" />
            </div>
            </div>
     
            <div className="field">
            <div className="control">
                <button className="button is-primary">Update</button>
            </div>
            </div>
        </form>
    </div>
)
}

export default EditProduct



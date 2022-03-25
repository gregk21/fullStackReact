import React, { useEffect } from 'react';
import axios from 'axios';
import {Link, NavLink} from 'react-router-dom';

const ProductList = () => {
    const[products,setProducts]=React.useState([])
   
    useEffect(() => {
        fetchData();
    }, []);
  
    const fetchData = async() => {
      const response = await fetch(`http://localhost:5000/products`)
      const data = await response.json();
      setProducts(data);
  }

    const deleteProducts = async(id)=>{
        await axios.delete(`http://localhost:5000/products/${id}`)
        fetchData()
    }
    return(
        <div>
            <NavLink to='add' className="button is-primary mt-5">Add product</NavLink>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index +1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={()=>deleteProducts(product.id)}  className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )





}
export default ProductList
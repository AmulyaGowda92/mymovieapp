import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';


const Products = () => {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    const fetchProductsData = async () => {

        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        // console.log(data);
        setProducts(data);
    }

    useEffect(() => {
        fetchProductsData();
    }, []);

    const handleAdd = (item) => {
        dispatch(add(item));
    }

  return (
    <div className='productsWrapper'>
        {
            products.map((product) => {
                return (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className='btn' onClick={() => handleAdd(product)}>Add To cart</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products
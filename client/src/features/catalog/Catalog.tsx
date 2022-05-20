import { useState, useEffect } from 'react';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    function getProducts () {
        fetch('http://localhost:5000/api/Products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }
    
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <ProductList products={products} />
        </>
    )
}
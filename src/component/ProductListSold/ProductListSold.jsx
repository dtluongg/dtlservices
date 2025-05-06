import React from 'react'
import { useNavigate } from 'react-router-dom';
import laptopData from '../../data/laptops.json';
import Item from '../Item/Item';
import "../ProductList/ProductList.css";

const ProductListSold = () => {
    const navigate = useNavigate();
    const { products } = laptopData;
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="product-list" id="product-list">
            <h2>Danh sách laptop đã bán</h2>
            <div className="products-grid">
                {products
                    .filter(product => product.status === 'sold')
                    .map(product => (
                        <div key={product.id} onClick={() => handleProductClick(product.id)}>
                            <Item product={product} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ProductListSold; 
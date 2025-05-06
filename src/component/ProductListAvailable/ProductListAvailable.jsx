import React from "react";
import { useNavigate } from "react-router-dom";
import "../ProductList/ProductList.css";
import Item from "../Item/Item";
import laptopData from "../../data/laptops.json";

const ProductListAvailable = () => {
    const navigate = useNavigate();
    const { products } = laptopData;
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="product-list" id="product-list">
            <h2>Danh sách laptop đang có sẵn</h2>
            <div className="products-grid">
                {products
                    .filter(product => product.status === 'available')
                    .map(product => (
                        <div key={product.id} onClick={() => handleProductClick(product.id)}>
                            <Item product={product} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProductListAvailable;

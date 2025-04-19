import React from "react";
import { useNavigate } from "react-router-dom";
import Item from "../Item/Item";
import "./ProductList.css";
import laptopData from "../../data/laptops.json";

const ProductList = () => {
    const navigate = useNavigate();
    const { products } = laptopData;
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return(
        <div className="product-list" id="product-list">
            <h2 style={{marginBottom: "30px"}}>Danh sách Laptop</h2>
            <div className="products-grid">
                {products.map(product => (
                    <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                    >
                        <Item product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ProductList;

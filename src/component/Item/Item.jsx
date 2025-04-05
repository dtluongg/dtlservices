import React from "react";
import "./Item.css";
const Item = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={process.env.PUBLIC_URL + product.images[0]} alt={product.name} />
                <div className={`status-badge ${product.status}`}>
                    {product.status === "available" ? "Đang còn" : "Đã bán"}
                </div>
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <p className="price">{product.price}</p>
                <button
                    className={`add-to-cart ${product.status === "sold" ? "disabled" : ""}`}
                    disabled={product.status === "sold"}
                    onClick={(e) => e.stopPropagation()}
                >
                    {product.status === "sold" ? "Đã bán" : "Liên hệ ngay"}
                </button>
            </div>
        </div>
    );
};
export default Item;

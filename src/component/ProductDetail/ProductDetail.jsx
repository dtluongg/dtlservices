import React, { useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import laptopData from '../../data/laptops.json';
import './ProductDetail.css';


const ProductDetail = () => {
    const {id} = useParams(); // lấy id từ url
    const navigate = useNavigate(); // lấy navigate để chuyển trang
    const [selectedImage, setSelectedImage] = useState(0); // lấy ảnh đầu tiên. 

    const product = laptopData.products.find(p => p.id === parseInt(id));

    if(!product){
        return(
            <div className='product-not-found'>
                <h2>Sản phẩm không tồn tại</h2>
                <button className='back-btn' onClick={()=> navigate(-1)}>
                    Quay lại
                </button>
            </div>
        )
    }

    return(
        <div className="product_details">
            <div className="product_container">
                <div className="product_images">
                    <div className="main_image">
                        <img 
                            src={process.env.PUBLIC_URL + product.images[selectedImage]}
                            alt={product.name}
                        />
                    </div>
                    <div className="other_images">
                        {product.images.map((image, index) => (
                            <img 
                                key={index}
                                src={process.env.PUBLIC_URL + image}
                                alt={`${product.name} ${index + 1}`}
                                className={selectedImage === index ? 'active' : ''}
                                onClick={() => setSelectedImage(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="product_info">
                    <h1>{product.name}</h1>
                    <div className={`status_badge ${product.status}`}>
                        {product.status === 'available' ? 'Đang còn' : 'Đã bán'}
                    </div>
                    <p className="price">{product.price}</p>
                    <p className="description">{product.fullDescription}</p>
                    <div className="specifications">
                        <h2>Thông số kỹ thuật của laptop {product.name}</h2>
                        <table>
                            <tbody>
                                {Object.entries(product.specifications).map(([key, value])=> (
                                    <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="action_button">
                        <button className={`contact_btn ${product.status === 'sold' ? 'disabled' : ''}`}
                        disabled={product.status === 'sold'}
                        >
                            {product.status === 'sold' ? 'Đã bán' : 'Liên hệ ngay'}
                        </button>
                        <button className="back_btn" onClick={() => navigate(-1)}>
                            Quay lại
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
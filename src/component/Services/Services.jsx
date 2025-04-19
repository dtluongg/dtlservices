import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
    const navigate = useNavigate();

    const handleCarServiceClick = () => {
        navigate("car-service");
    };

    const handleLaptopServiceClick = () => {
        const serviceOptionElement = document.getElementById('service-option');
        if (serviceOptionElement) {
            serviceOptionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleBanhMiClick = () => {
        navigate("banh-mi");
        setTimeout(() => {
            const banhmiService = document.querySelector('.banhmi-service');
            if (banhmiService) {
                banhmiService.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="services">
            <div className="service_cart" onClick={handleCarServiceClick}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/services/book_car/car3.jpeg`}
                    alt="Dịch vụ xe du lịch"
                    className="service_image"
                />
                <div className="service_overlay">
                    <h3>Đặt xe vi vu mọi nơi</h3>
                    <p>Nhận đặt xe đi du lịch, sân bay, bệnh viện 24/7.</p>
                    <p>Luôn có sẵn xe từ 7, 16, 24, 30, 45 chỗ.</p>
                </div>
            </div>
            <div className="service_cart" onClick={handleLaptopServiceClick}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/services/upgrade_laptop/laptop.jpeg`}
                    alt="Dịch vụ nâng cấp, sửa lỗi laptop"
                    className="service_image"
                />
                <div className="service_overlay">
                    <h3>Dịch vụ nâng cấp, sửa lỗi laptop</h3>
                    <p>Nâng cấp laptop (ram, ssd) giá cực hấp dẫn.</p>
                    <p>Hỗ trợ sửa các lỗi cơ bản của máy tính (miễn phí).</p>
                </div>
            </div>
            <div className="service_cart" onClick={handleBanhMiClick}>
                <img
                    src={`${process.env.PUBLIC_URL}/images/services/order_banhmi/banhmi_dacruot.jpg`}
                    alt="Bánh mì cô Tuyết"
                    className="service_image"
                />
                <div className="service_overlay">
                    <h3>Bánh mì cô Tuyết</h3>
                    <p>
                        Em Lượng giao bánh mì sandwich, bánh mì kẹp thịt và bánh mì đặc ruột số
                        lượng lớn đến tận nhà mọi người.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;

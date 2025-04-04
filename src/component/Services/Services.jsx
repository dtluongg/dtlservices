import React from "react";
import "./Services.css";

const Services = () => {
    return (
        <div className="services">
            <div className="service_cart">
                <img
                    src={`${process.env.PUBLIC_URL}/images/services/car3.jpeg`}
                    alt="Dịch vụ xe du lịch"
                    className="service_image"
                />
                <div className="service_overlay">
                    <h3>Đặt xe vi vu mọi nơi</h3>
                    <p>Nhận đặt xe đi du lịch, sân bay, bệnh viện 24/7.</p>
                    <p>Luôn có sẵn xe từ 7, 16, 24, 30, 45 chỗ.</p>
                </div>
            </div>
            <div className="service_cart">
                <img
                    src={`${process.env.PUBLIC_URL}/images/services/laptop.jpeg`}
                    alt="Dịch vụ nâng cấp, sửa lỗi laptop"
                    className="service_image"
                />
                <div className="service_overlay">
                    <h3>Dịch vụ nâng cấp, sửa lỗi laptop</h3>
                    <p>Nâng cấp laptop (ram, ssd) giá cực hấp dẫn.</p>
                    <p>Cài lại win và office bản quyền vĩnh viễn chỉ từ 100 cành.</p>
                </div>
            </div>
            <div className="service_cart">
                <img
                    src={`${process.env.PUBLIC_URL}/images/services/banhmi.jpeg`}
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

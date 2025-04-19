import React, { useState } from 'react';
import './CarService.css';
import carDestinations from '../../data/carDestinations.json';
import PopupForm from './PopupForm';

const CarService = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (serviceType) => {
        setSelectedService(serviceType);
    };

    const handleClosePopup = () => {
        setSelectedService(null);
    };

    return (
        <div className="car-service">
            {/* Container 1: Dịch vụ xe */}
            <div className="service_cars">
                <h2>Nhận hợp đồng đặt xe đi du lịch và dịch vụ cho thuê xe 4 - 7 - 16 - 29 - 45 chỗ</h2>
                <div className="service_cars_container">
                    <div className="service_car" onClick={() => handleServiceClick('du lịch')}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/services/book_car/car.jpeg`}
                            alt="Đặt xe đi du lịch"
                            className="service_image"
                        />
                        <div className="service_info">
                            <h3>Đặt xe đi du lịch</h3>
                            <p>Đi du lịch các tỉnh Vũng Tàu, Phan Thiết, Nha Trang, Tây Ninh, An Giang,...</p>
                        </div>
                    </div>

                    <div className="service_car" onClick={() => handleServiceClick('sân bay')}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/services/book_car/car.jpeg`}
                            alt="Đặt xe đi sân bay"
                            className="service_image"
                        />
                        <div className="service_info">
                            <h3>Đặt xe đi sân bay</h3>
                            <p>Đặt xe đi sân bay, ga tàu, bến xe các tỉnh</p>
                        </div>
                    </div>

                    <div className="service_car" onClick={() => handleServiceClick('khám bệnh')}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/services/book_car/car.jpeg`}
                            alt="Đặt xe đi khám bệnh"
                            className="service_image"
                        />
                        <div className="service_info">
                            <h3>Đặt xe đi khám bệnh</h3>
                            <p>Hẹn lịch đi các bệnh viện khu vực Biên Hoà - HCM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Container 2: Các điểm đến */}
            <div className="destinations">
                <h2>Các điểm đến đã đi qua</h2>
                <div className="destinations_grid">
                    {carDestinations.destinations.map((destination, index) => (
                        <div key={index} className="destination_card">
                            <img
                                src={`${process.env.PUBLIC_URL}${destination.image}`}
                                alt={destination.province}
                                className="destination_image"
                            />
                            <div className="destination_info">
                                <h3>{destination.province}</h3>
                                <p>{destination.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup Form */}
            <PopupForm
                isOpen={selectedService !== null}
                onClose={handleClosePopup}
                serviceType={selectedService}
            />
        </div>
    );
};

export default CarService;

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import DatePicker from 'react-datepicker';
import { vi } from 'date-fns/locale';
import "react-datepicker/dist/react-datepicker.css";
import './PopupForm.css';

const PopupForm = ({ isOpen, onClose, serviceType }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pickupAddress: '',
        pickupDate: null,
        pickupTime: '',
        destination: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Hàm chuyển đổi định dạng ngày từ Date object sang dd/mm/yyyy
    const formatDateForEmail = (date) => {
        if (!date) return '';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const templateParams = {
                to_name: 'Dịch vụ xe',
                from_name: formData.name,
                phone: formData.phone,
                pickup_address: formData.pickupAddress,
                pickup_date: formatDateForEmail(formData.pickupDate),
                pickup_time: formData.pickupTime,
                destination: formData.destination,
                service_type: serviceType
            };

            await emailjs.send(
                'dtlservices_email',
                'template_cars',
                templateParams,
                'ry5Bn1FUY5gvomQ4U'
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                phone: '',
                pickupAddress: '',
                pickupDate: null,
                pickupTime: '',
                destination: ''
            });
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        setFormData(prev => ({
            ...prev,
            pickupDate: date
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2 style={{ marginBottom: "20px" }}>Đặt xe đi {serviceType}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Tên khách hàng:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Số điện thoại:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            title="Vui lòng nhập số điện thoại 10 số"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pickupAddress">Địa chỉ đón:</label>
                        <input
                            type="text"
                            id="pickupAddress"
                            name="pickupAddress"
                            value={formData.pickupAddress}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pickupDate">Ngày đón:</label>
                        <DatePicker
                            selected={formData.pickupDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            locale={vi}
                            className="date-picker-input"
                            placeholderText="Chọn ngày"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pickupTime">Giờ đón:</label>
                        <input
                            type="time"
                            id="pickupTime"
                            name="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="destination">Nơi đến:</label>
                        <input
                            type="text"
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
                    </button>
                    {submitStatus === 'success' && (
                        <div className="success-message">
                            Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ với bạn sớm.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="error-message">
                            Có lỗi xảy ra. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua số điện thoại.
                        </div>
                    )}
                </form>
                <div className="contact-panel">
                    <p>Liên hệ ngay:</p>
                    <div className="phone-number">0379.499.255 (em Lượng)</div>
                    <div className="phone-number">0559.599.255 (em Lượng)</div>
                </div>
            </div>
        </div>
    );
};

export default PopupForm; 
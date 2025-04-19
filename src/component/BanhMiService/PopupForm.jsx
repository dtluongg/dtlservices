import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './PopupForm.css';

const PopupForm = ({ isOpen, onClose, serviceType }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        quantity: '',
        note: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const templateParams = {
                to_name: 'Dịch vụ bánh mì',
                from_name: formData.name,
                phone: formData.phone,
                address: formData.address,
                quantity: formData.quantity,
                note: formData.note || 'Không có',
                service_type: serviceType
            };

            await emailjs.send(
                'dtlservices_email',
                'template_banhmi',
                templateParams,
                'ry5Bn1FUY5gvomQ4U'
            );

            setSubmitStatus('success');
            setFormData({
                name: '',
                phone: '',
                address: '',
                quantity: '',
                note: ''
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

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>×</button>
                <h2 style={{ marginBottom: "20px" }}>Đặt {serviceType}</h2>
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
                        <label htmlFor="address">Địa chỉ giao hàng:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Số lượng:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            min="1"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="note">Ghi chú:</label>
                        <textarea
                            id="note"
                            name="note"
                            value={formData.note}
                            onChange={handleChange}
                        ></textarea>
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
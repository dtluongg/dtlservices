import React, { useState, useEffect } from 'react';
import './BanhMiService.css';
import DetailBanhMi from './DetailBanhMi';
import PopupForm from './PopupForm';

const BanhMiService = () => {
    const [showForm, setShowForm] = useState(false);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    const handleItemClick = (type) => {
        setSelectedType(type);
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const getServiceType = () => {
        switch (selectedType) {
            case 'dacruot':
                return 'Bánh Mì Đặc Ruột';
            case 'sandwich':
                return 'Bánh Mì Sandwich';
            case 'kepthit':
                return 'Bánh Mì Kẹp Thịt';
            default:
                return '';
        }
    };

    return (
        <div className="banhmi-container">
            <div className="banhmi-service">
                <div className="banhmi-item" onClick={() => handleItemClick('dacruot')}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/services/order_banhmi/banhmi_dacruot.jpg`} 
                        alt="Bánh mì đặc ruột"
                    />
                    <div className="banhmi-overlay">
                        <h2>Bánh Mì Đặc Ruột</h2>
                        <p>Bánh mì đặc ruột, thơm ngon, nóng hổi có sẵn tại tiệm từ 5 giờ mỗi ngày.</p>
                    </div>
                </div>
                <div className="banhmi-item" onClick={() => handleItemClick('sandwich')}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/services/order_banhmi/banhmi_sandwich.jpg`} 
                        alt="Bánh mì sandwich"
                    />
                    <div className="banhmi-overlay">
                        <h2>Bánh Mì Sandwich</h2>
                        <p>Bánh mì sandwich mềm mịn, ngọt ngọt, thơm thơm, số lượng chỉ 10 cái mỗi ngày.</p>
                    </div>
                </div>
                <div className="banhmi-item" onClick={() => handleItemClick('kepthit')}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/services/order_banhmi/banhmi_kepthit.jpg`} 
                        alt="Bánh mì kẹp thịt"
                    />
                    <div className="banhmi-overlay">
                        <h2>Bánh Mì Kẹp Thịt Hoặc Trứng</h2>
                        <p>Bánh mì kẹp đa dạng tuỳ theo sở thích cá nhân mỗi người.</p>
                    </div>
                </div>
            </div>

            <DetailBanhMi />

            <PopupForm 
                isOpen={showForm}
                onClose={handleCloseForm}
                serviceType={getServiceType()}
            />
        </div>
    );
};

export default BanhMiService; 
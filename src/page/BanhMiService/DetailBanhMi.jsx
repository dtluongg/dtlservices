import React , { useState, useEffect } from 'react';
import './DetailBanhMi.css';
import PopupForm from './PopupForm';
import OrderSticker from '../../component/OrderSticker/OrderSticker';
const DetailBanhMi = () => {
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

    const getServiceType = ({menuItems}) => {
        switch (selectedType) {
            case 1:
                return menuItems[0].name;
            case 2:
                return menuItems[1].name;
            case 3:
                return menuItems[2].name;
            case 4:
                return menuItems[3].name;
            case 5:
                return menuItems[4].name;
            default:
                return '';
        }
    };


    const menuItems = [
        {
            id: 1,
            name: 'Bánh Mì Sandwich',
            price: '20.000đ',
            image: 'order_banhmi/banhmisandwich.jpg',
            description: 'Bánh mì sanwich mềm, mịn, thơm ngon'
        },
        {
            id: 2,
            name: 'Bánh Mì Kẹp Thịt',
            price: '15.000đ',
            image: 'order_banhmi/banhmithit.jpg',
            description: 'Bánh mì kẹp thịt heo + chả lụa + nem'
        },
        {
            id: 3,
            name: 'Bánh Mì Chả Lụa',
            price: '15.000đ',
            image: 'order_banhmi/banhmichalua.jpg',
            description: 'Bánh mì chả lụa'
        },
        {
            id: 4,
            name: 'Bánh Mì Trứng ',
            price: '13.000đ - 17.000đ',
            image: 'order_banhmi/banhmitrung.jpeg',
            description: 'Bánh mì 1-2 trứng'
        },
        {
            id: 5,  
            name: 'Bánh Mì Trứng + Thịt',
            price: '22.000đ',
            image: 'order_banhmi/banhmifull.png',
            description: 'Bánh mì trứng + thịt'
        },
        {
            id: 6,
            name: 'Bánh Mì full topping',
            price: '25.000đ',
            image: 'order_banhmi/banhmifull.png',
            description: 'Bánh mì trứng + thịt + chả lụa + nem'
        }
        
    ];

    return (
        <div className="detail-banhmi">
            <h2 className="detail-title">Thực Đơn Bánh Mì</h2>
            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item" onClick={() => handleItemClick(item.id)}>
                        <OrderSticker OrderName='Click để đặt bánh'/>
                        <div className="menu-image">
                            <img 
                                src={`${process.env.PUBLIC_URL}/images/services/${item.image}`} 
                                alt={item.name}
                            />
                        </div>
                        <div className="menu-content">
                            <h3>{item.name}</h3>
                            <p className="price">{item.price}</p>
                            <p className="description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <PopupForm 
                isOpen={showForm}
                onClose={handleCloseForm}
                serviceType={getServiceType({menuItems})}
            />
        </div>
    );
};

export default DetailBanhMi; 
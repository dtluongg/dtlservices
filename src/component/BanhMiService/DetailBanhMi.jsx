import React from 'react';
import './DetailBanhMi.css';

const DetailBanhMi = () => {
    const menuItems = [
        {
            id: 1,
            name: 'Bánh Mì Sandwich',
            price: '20.000đ',
            image: 'banhmi_dacruot.jpg',
            description: 'Bánh mì sanwich mềm, mịn, thơm ngon'
        },
        {
            id: 2,
            name: 'Bánh Mì Kẹp Thịt',
            price: '15.000đ',
            image: 'banhmi_sandwich.jpg',
            description: 'Bánh mì kẹp thịt heo + chả lụa + nem'
        },
        {
            id: 3,
            name: 'Bánh Mì Trứng ',
            price: '13.000đ - 17.000đ',
            image: 'banhmi_kepthit.jpg',
            description: 'Bánh mì trứng thịt'
        },
        {
            id: 4,
            name: 'Bánh Mì Trứng + Thịt',
            price: '22.000đ',
            image: 'banhmi_sandwich.jpg',
            description: 'Bánh mì trứng + thịt'
        },
        {
            id: 5,
            name: 'Bánh Mì full topping',
            price: '25.000đ',
            image: 'banhmi_kepthit.jpg',
            description: 'Bánh mì trứng + thịt + chả lụa + nem'
        }
    ];

    return (
        <div className="detail-banhmi">
            <h2 className="detail-title">Thực Đơn Bánh Mì</h2>
            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
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
        </div>
    );
};

export default DetailBanhMi; 
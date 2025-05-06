import React, { useEffect } from "react";
import "./Header.css";
import logo from "../Asset/logo/logo.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navigateAndScroll = (elementId) => {
        if (location.pathname !== '/') {
            navigate('/');
            // Đợi một chút để DOM được cập nhật sau khi chuyển trang
            setTimeout(() => {
                scrollToElement(elementId);
            }, 100);
        } else {
            scrollToElement(elementId);
        }
    };

    const handleContactClick = (e) => {
        e && e.preventDefault();
        navigateAndScroll('contact');
    };

    const handleLaptopServiceClick = (e) => {
        e.preventDefault();
        navigate('/laptop-service');
    };

    const handleCarServiceClick = (e) => {
        e.preventDefault();
        navigate("/car-service");
    };

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleProductClick = (e) => {
        e.preventDefault();
        navigateAndScroll('product-list');
    };

    const handleBanhMiClick = (e) => {
        e.preventDefault();
        navigate('/banh-mi');
    };

    // Xử lý scroll khi URL có hash
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            setTimeout(() => {
                scrollToElement(hash);
            }, 100);
        }
    }, [location]);

    return (
        <div className="header">
            <div className="header-left" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
                <img src={logo} alt="header-logo" />
                <h1>DTL Services</h1>
            </div>
            <nav className="header-center">
                <ul className="nav-links">
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="#" onClick={handleProductClick}>Sản phẩm</Link>
                        <ul className="subnav1">
                            <li><Link to="/sanphamlaptop">Laptop</Link></li>
                            <li><Link to="/sanphamlaptop">Laptop</Link></li>
                            <li><Link to="/sanphamlaptop">Laptop</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" onClick={handleCarServiceClick}>Dịch vụ xe Du lịch</Link></li>
                    <li><Link to="#" onClick={handleLaptopServiceClick}>Dịch vụ laptop</Link></li>
                    <li><Link to="#" onClick={handleBanhMiClick}>Đặt bánh mì</Link></li>
                    <li><Link to="https://dtluongg.github.io/#home">Thông tin</Link></li>
                </ul>
            </nav>
            <div className="header-right">
                <button onClick={handleContactClick}>Liên hệ</button>
            </div>
        </div>
    );
};

export default Header;

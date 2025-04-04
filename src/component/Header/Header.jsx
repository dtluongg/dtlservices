import React from "react";
import "./Header.css";
import logo from "../Asset/logo/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="header-logo" />
                <h1>DTL Services</h1>
            </div>
            <nav className="header-center">
                <ul className="nav-links">
                    <li><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/sanpham">Sản phẩm</Link>
                        <ul className="subnav1">
                            <li><Link to="/sanphamlaptop">Laptop</Link></li>
                            <li><Link to="/sanphamlaptop">Laptop</Link></li>
                            <li><Link to="/sanphamlaptop">Laptop</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/dichvulaptop">Dịch vụ laptop</Link></li>
                    <li><Link to="/dichvuxedulich">Dịch vụ xe Du lịch</Link></li>
                    <li><Link to="/thongtin">Thông tin</Link></li>
                </ul>
            </nav>
            <div className="header-right">
                <button>Login</button>
            </div>
        </div>
    );
};

export default Header;
